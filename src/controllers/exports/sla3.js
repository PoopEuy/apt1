const models = require("../../models");
const { sla } = require("../../helpers/sla");
const download = require("../../helpers/excel/sla3");
const { monthFormater } = require("../../helpers/dateTime");

module.exports = async (req, res) => {
  const { nojs, start, end, apt1v3 } = req.query;

  if (!nojs) {
    return res.status(404).json({
      status: "error",
      message: "Nojs Not Found",
    });
  }
  if (start && end) {
    dateTime = { start, end };

    const dataNojs = await models.nojsUserModel.findId(nojs);
    try {
      await models.nojsLoggerModel
        .sla(models, dateTime, nojs)
        .then((result) => {
          const data = sla(result, { start, end });
          const wb = download({
            log: data.log,
            site: dataNojs.site,
            uptime: data.duration,
            sumVolt: data.sumBattVolt,
            date: monthFormater(start),
            v3: apt1v3 && apt1v3 == "true" ? true : false,
          });

          res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          );
          res.setHeader(
            "Content-Disposition",
            `attachment; filename=${dataNojs.site}.xlsx`
          );
          return wb.xlsx.write(res).then(function () {
            res.status(200).end();
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
