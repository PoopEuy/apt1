const { progressModel, ticketModel } = require("../../models");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const { ticket_id, group, title, note, status, createdAt } = req.body;

  if (ticket_id) {
    const ticket = await ticketModel.findByPk(ticket_id);
    if (!ticket) {
      return res.status(404).json({
        status: "error",
        message: "ticket not found",
      });
    }
  }

  const date = new Date(createdAt);
  const data = { ticket_id, group, title, note, createdAt: date };

  const create = await progressModel.create(data);

  return res.status(201).json({
    status: "success",
    data: {
      id: create.id,
    },
  });
};
