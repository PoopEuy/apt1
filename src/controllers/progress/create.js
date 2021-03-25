const { progressModel, ticketModel } = require("../../models");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const { ticket_id, group, title, note, status, createdAt } = req.body;

  if (ticket_id) {
    var ticket = await ticketModel.findByPk(ticket_id);
    if (!ticket) {
      return res.status(404).json({
        status: "error",
        message: "ticket not found",
      });
    }
  }

  const temp = await progressModel.findOne({
    where: { [Op.and]: [{ ticket_id }, { status: false }] },
  });

  if (temp) {
    return res.status(409).json({
      status: "error",
      message: "Progress belum selesai",
    });
  }
  const ceckLastProgress = await progressModel.findOne({
    where: { [Op.and]: [{ ticket_id }, { status: true }] },
    order: [["id", "DESC"]],
  });
  const date = ceckLastProgress ? ceckLastProgress.updatedAt : ticket.createdAt;
  const data = { ticket_id, group, title, note, createdAt: date };

  const create = await progressModel.create(data);

  return res.status(201).json({
    status: "success",
    data: {
      id: create.id,
    },
  });
};
