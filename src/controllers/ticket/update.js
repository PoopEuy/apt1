const { ticketModel, progressModel } = require("../../models");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const id = req.params.id;
  const { nojs_id, note, status, updatedAt } = req.body;

  const ticket = await ticketModel.findOne({ where: { id } });
  if (!ticket) {
    return res.status(404).json({
      status: "error",
      message: "ticket not found",
    });
  }

  const temp = await progressModel.findOne({
    where: { [Op.and]: [{ ticket_id: id }, { status: false }] },
  });

  if (temp) {
    return res.status(409).json({
      status: "error",
      message: "Progress belum selesai",
    });
  }

  await ticket.update({ status: true });

  return res.json({
    status: "success",
  });
};
