const {
  dockCellModel,
  energyModel,
  nojsLoggerModel,
  nojsUserModel,
  pvModel,
  statisticsModel,
  serviceCallModel,
} = require("../../models");

const hexToBin = require("../../helpers/hexToBin");
const now = require("../../helpers/dateTime");

const findNojs = async (nojs) => {
  return await nojsUserModel
    .findOne({
      where: { nojs },
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
    return await ceckService.update(updateData);
  }

  //create Service Call
  if (error != 0) {
    const newData = {
      nojs_id: nojsId,
      open_time: now(),
      status: "OPEN",
      error,
    };
    return await serviceCallModel.create(newData);
  }
};
const dataToFormatDb = async (datas) => {
  return await datas.map((el) => {
    const logger = {
      batt_volt: el.batt_volt,
      dock_active: el.dock_active,
      load1: el.load1,
      load2: el.load2,
      ts: el.ts,
    };
    const energy = {
      edl1: el.edl1,
      edl2: el.edl2,
      eh1: el.eh1,
      eh2: el.eh2,
      eh3: el.eh3,
    };
    const pv = {
      pv1_curr: el.pv1_curr,
      pv1_volt: el.pv1_volt,
      pv2_curr: el.pv2_curr,
      pv2_volt: el.pv2_volt,
      pv3_curr: el.pv3_curr,
      pv3_volt: el.pv3_volt,
    };
    const statistics = {
      dock_max: el.max_battv[0],
      value_max: el.max_battv[1],
      dock_min: el.min_battv[0],
      value_min: el.min_battv[1],
    };
    let = dock_cell = {};
    el.dvc.map((e, i) => {
      return (dock_cell[`dock_${i + 1}`] = e);
    });
    return { logger, energy, pv, statistics, dock_cell };
  });
};

module.exports = async (req, res) => {
  let logger = [];
  const { status, nojs } = req.body;
  const nojs_id = await findNojs(nojs).then((result) => result);

  if (status == "success") {
    const dataBody = await dataToFormatDb(req.body.data);
    for (const el in dataBody) {
      if (dataBody.hasOwnProperty(el)) {
        const data = dataBody[el];
        const dock_cell_id = await dockCellModel
          .create(data.dock_cell)
          .then((result) => result.id);
        const energy_id = await energyModel
          .create(data.energy)
          .then((result) => result.id);
        const pv_id = await pvModel.create(data.pv).then((result) => result.id);
        const statistics_id = await statisticsModel
          .create(data.statistics)
          .then((result) => result.id);
        const dock_active = hexToBin(data.logger.dock_active);
        serviceCall(nojs_id, dock_active.off);
        logger.push({
          ...data.logger,
          dock_cell_id,
          energy_id,
          pv_id,
          statistics_id,
          nojs_id,
        });
      }
    }
  } else {
    const dataBody = req.body.data[0];

    const dock_cell_id = 1;
    const energy_id = 1;
    const pv_id = 1;
    const statistics_id = 1;
    serviceCall(nojs_id, 16);

    logger.push({
      ...dataBody,
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
