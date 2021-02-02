const { ticketModel } = require("../../models");

module.exports = async (req, res) => {
  const id = req.params.id;

  await ticketModel
    .destroy({ where: { id } })
    .then((result) => {
      console.log(result);
      return res.json({
        status: "success",
        data: {
          message: "Ticket Delete",
          id: id,
        },
      });
    })
    .catch((err) => {
      return res.status(404).json({
        status: "error",
        data: "Nojs not found",
      });
    });
};
