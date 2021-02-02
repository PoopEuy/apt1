const { ticketModel, nojsUserModel } = require("../../models");

module.exports = async (req, res) => {
  const { status, nojs_id } = req.query;
  if (status) {
    let isTrue = status === "true";
    await ticketModel
      .findAll({ where: { status: isTrue } })
      .then((result) => {
        return res.json({
          status: "success",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(409).json({
          status: "error",
          data: err,
        });
      });
  } else if (nojs_id) {
    await ticketModel
      .findAll({ where: { nojs_id } })
      .then((result) => {
        return res.json({
          status: "success",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(409).json({
          status: "error",
          data: err,
        });
      });
  } else {
    await ticketModel
      .findAll()
      .then((result) => {
        return res.json({
          status: "success",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(409).json({
          status: "error",
          data: err,
        });
      });
  }
};
