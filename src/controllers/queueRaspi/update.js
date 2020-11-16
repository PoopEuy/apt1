const { queueRaspiModel } = require("../../models");

module.exports = async (req, res) => {
  const id = req.params.id;
  const status = req.body.status;

  const raspi = await queueRaspiModel.findByPk(id);
  if (!raspi) {
    return res.status(404).json({
      status: "error",
      message: "Raspi not found",
    });
  }

  await raspi.update({ status });

  return res.json({
    status: "success",
    data: {
      id: raspi.id,
      status: raspi.status,
    },
  });
};
