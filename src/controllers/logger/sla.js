const models = require("../../models");
const { sla } = require("../../helpers/sla");

module.exports = async (req, res) => {
  let dateTime;
  const { nojs, start, end } = req.query;
  if (start && end) {
    dateTime = { start, end };
    if (!nojs) {
      return res.status(404).json({
        status: "error",
        message: "Nojs Not Found",
      });
    }
    const dataNojs = await models.nojsUserModel.findId(nojs);
    try {
      await models.nojsLoggerModel
        .sla(models, dateTime, nojs)
        .then((result) => {
          const data = sla(result, { start, end });
          return res.json({
            status: "success",
            data: [
              {
                nojs: dataNojs.nojs,
                site: dataNojs.site,
                lc: dataNojs.lc,
                ...data.avg,
              },
            ],
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
    res.status(404).json({
      status: "error",
      message: "Parameter Not Found",
    });
  }
};
