const models = require("../../models");
const { now, minusHour } = require("../../helpers/dateTime");
const resultFiveMinutes = require("../../helpers/resultFiveMinutes");

module.exports = async (req, res) => {
  const dateTime = {
    start: minusHour(4),
    end: now(),
  };
  // const dateTime = {
  //   start: "2020-11-16 04:45:00",
  //   end: "2020-11-16 08:45:00",
  // };
  const nojs = req.query.nojs;
  if (!nojs) {
    return res.status(404).json({
      status: "error",
      message: "Nojs Not Found",
    });
  }
  try {
    const dataNojs = await models.nojsUserModel.findId(nojs);
    await models.nojsLoggerModel
      .noc(models, dateTime, nojs)
      .then((result) => {
        const data = resultFiveMinutes(result);
        return res.json({
          status: "success",
          nojs: dataNojs.nojs,
          total: data.length,
          data: data,
        });
      })
      .catch((err) => {
        return res.status(409).json({
          status: "error",
          message: err,
        });
      });
  } catch (error) {
    return res.status(409).json({
      status: "error",
      message: "Nojs Not Found",
    });
  }
};
