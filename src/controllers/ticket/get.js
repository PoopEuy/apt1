const { ticketModel, nojsUserModel } = require("../../models");
const { secToString, dateFormater } = require("../../helpers/dateTime");

module.exports = async (req, res) => {
  const { id, status, nojs_id, site } = req.query;
  const isTrue = status === "true";
  const tempId = id ? { id } : {};
  const tempSite = site ? { site } : {};
  const tempStatus = status ? { status: isTrue } : {};
  const where = { ...tempSite, ...tempStatus, ...tempId };
  await ticketModel
    .findAll({ where })
    .then((result) => {
      const tempData = [];
      result.forEach((data) => {
        const createdAt = new Date(data.createdAt);
        const updatedAt = new Date(data.updatedAt);
        let newDate = new Date();
        createdAt.getTime() == updatedAt.getTime()
          ? newDate
          : (newDate = updatedAt);
        const dateString = secToString((newDate - createdAt) / 1000);
        tempData.push({
          id: data.id,
          site: data.site,
          note: data.note,
          ticket_open: dateFormater(createdAt),
          ticket_closed: data.status ? dateFormater(updatedAt) : "-",
          duration: dateString,
          status: data.status ? "CLOSE" : "OPEN",
        });
      });
      return res.json({
        status: "success",
        data: tempData,
      });
    })
    .catch((err) => {
      return res.status(409).json({
        status: "error",
        data: err,
      });
    });
};
