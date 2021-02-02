const { ticketModel } = require("../../models");

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

  await ticket.update({ status: true });

  return res.json({
    status: "success",
  });
};
