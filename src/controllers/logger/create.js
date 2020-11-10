const {
  dockCellModel,
  energyModel,
  nojsLoggerModel,
  nojsUserModel,
  pvModel,
  statisticsModel,
  serviceCallModel,
} = require("../../models");

const hexToBinary = require("../../helpers/hexToBin");
const now = require("../../helpers/dateTime");

const createDockCell = async (params) => {
  return await dockCellModel.create(params).then((result) => result.id);
};
const createEnergy = async (params) => {
  return await energyModel.create(params).then((result) => result.id);
};
const createPv = async (params) => {
  return await pvModel.create(params).then((result) => result.id);
};
const createStatistics = async (params) => {
  return await statisticsModel.create(params).then((result) => result.id);
};
const findNojs = async (params) => {
  return await nojsUserModel
    .findOne({
      where: { nojs: params },
    })
    .then((result) => result.id)
    .catch((err) => err);
};
const serviceCall = async (nojsId, value) => {
  const ceckService = await serviceCallModel.findOne({
    where: { nojs_id: nojsId, status: "OPEN" },
  });
  const error = value * 3;

  //update Service Call
  if (ceckService) {
    let updateData = {
      nojs_id: nojsId,
    };
    if (value != 0) {
      if (ceckService.error != error) {
        updateData = { ...updateData, error };
      }
    } else {
      updateData = { ...updateData, closed_time: now(), status: "CLOSED" };
    }
    return ceckService.update(updateData);
  }

  //create Service Call
  if (error != 0) {
    const newData = {
      nojs_id: nojsId,
      open_time: now(),
      status: "OPEN",
      error,
    };
    return serviceCallModel.create(newData);
  }
};

module.exports = async (req, res) => {
  let logger = [];
  const { status, data } = req.body;
  if (status == "success") {
    await data.reduce(async (promise, data) => {
      const dock_cell_id = await createDockCell(data.dock_cell).then((e) => e);
      const energy_id = await createEnergy(data.energy).then((e) => e);
      const pv_id = await createPv(data.pv).then((e) => e);
      const statistics_id = await createStatistics(data.statistics).then(
        (e) => e
      );
      const nojs_id = await findNojs(data.nojs).then((e) => e);
      const dock_active = hexToBinary(data.logger.dock_active);
      serviceCall(nojs_id, dock_active.off);

      logger.push({
        ...data.logger,
        dock_cell_id,
        energy_id,
        pv_id,
        statistics_id,
        nojs_id,
      });
    }, Promise.resolve());
  } else {
    const dock_cell_id = 1;
    const energy_id = 1;
    const pv_id = 1;
    const statistics_id = 1;
    const nojs_id = await findNojs(data[0].nojs).then((e) => e);
    serviceCall(nojs_id, 16);

    logger.push({
      ...data[0].logger,
      dock_cell_id,
      energy_id,
      pv_id,
      statistics_id,
      nojs_id,
    });
  }

  nojsLoggerModel
    .bulkCreate(logger)
    .then((result) => {
      return res.status(201).json({
        status: "success",
        data: `${logger.length} data, Created`,
      });
    })
    .catch((err) => {
      return res.status(409).json({
        status: "error",
        message: err,
      });
    });
};
