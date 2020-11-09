const {
  dockCellModel,
  energyModel,
  nojsLoggerModel,
  nojsUserModel,
  pvModel,
  statisticsModel,
} = require("../../models");

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

module.exports = async (req, res) => {
  let logger = [];
  await req.body.reduce(async (promise, data) => {
    const dock_cell_id = await createDockCell(data.dock_cell).then((e) => e);
    const energy_id = await createEnergy(data.energy).then((e) => e);
    const pv_id = await createPv(data.pv).then((e) => e);
    const statistics_id = await createStatistics(data.statistics).then(
      (e) => e
    );
    const nojs_id = await findNojs(data.nojs).then((e) => e);

    logger.push({
      ...data.logger,
      dock_cell_id,
      energy_id,
      pv_id,
      statistics_id,
      nojs_id,
    });
  }, Promise.resolve());

  nojsLoggerModel
    .bulkCreate(logger)
    .then((result) => {
      return res.status(201).json({
        status: "success",
        data: `${logger.length} Created`,
      });
    })
    .catch((err) => {
      return res.status(409).json({
        status: "error",
        message: err,
      });
    });
};
