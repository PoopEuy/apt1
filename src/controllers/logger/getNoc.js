const models = require("../../models");
const { now, minusHour } = require("../../helpers/dateTime");
const resultFiveMinutes = require("../../helpers/resultFiveMinutes");
const {
  formaterNoc,
  formaterNocError,
} = require("../../helpers/dataFormaterNOC");

module.exports = async (req, res) => {
  // const dateTime = {
  //   start: minusHour(4),
  //   end: now(),
  // };
  const dateTime = {
    start: "2020-12-02 10:55:04",
    end: "2020-12-02 14:55:04",
  };
  const nojs = req.query.nojs;
  const single = req.query.single;
  if (!nojs) {
    return res.status(404).json({
      status: "error",
      message: "Nojs Not Found",
    });
  }
  const dataNojs = await models.nojsUserModel.findId(nojs);
  if (!single) {
    try {
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
  } else {
    try {
      await models.nojsLoggerModel
        .nocSingle(models, nojs)
        .then((result) => {
          if (result[0]) {
            const data =
              result[0].energy.id != 1
                ? [formaterNoc(result[0])]
                : [formaterNocError(result[0].ts)];
            return res.json({
              status: "success",
              nojs: dataNojs.nojs,
              total: data.length,
              data: data,
            });
          }
          return res.json({
            status: "success",
            nojs: dataNojs.nojs,
            total: 0,
            data: [],
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
  }
};
