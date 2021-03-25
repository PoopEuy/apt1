const { progressModel, ticketModel } = require("../../models");
const { secToString, dateFormater } = require("../../helpers/dateTime");

module.exports = async (req, res) => {
  const { ticket_id, group, title, note, status } = req.query;
  const tempTicket_id = ticket_id ? { ticket_id } : {};
  const tempGroup = group ? { group } : {};
  const tempTitle = title ? { title } : {};
  const tempNote = note ? { note } : {};
  const tempStatus = status ? { status } : {};
  const where = {
    ...tempTicket_id,
    ...tempGroup,
    ...tempTitle,
    ...tempNote,
    ...tempStatus,
  };

  await progressModel
    .findAll({
      where,
      // include: [
      //   {
      //     model: ticketModel,
      //     as: "ticket",
      //   },
      // ],
    })
    .then((result) => {
      const tempData = [];
      result.forEach((data) => {
        const createdAt = new Date(data.createdAt);
        const updatedAt = new Date(data.updatedAt);
        let newDate = new Date();
        !data.status ? newDate : (newDate = updatedAt);
        const dateString = secToString((newDate - createdAt) / 1000);
        tempData.push({
          id: data.id,
          group: data.group,
          title: data.title,
          note: data.note,
          progress_open: dateFormater(createdAt),
          progress_closed: data.status ? dateFormater(updatedAt) : "-",
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
