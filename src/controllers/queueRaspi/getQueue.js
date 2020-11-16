const { queueRaspiModel } = require("../../models");

module.exports = async (req, res) => {
  const id = req.query.id;
  if (!id) {
    return res.json({
      status: "success",
      message: "Raspi Not Found",
    });
  }

  const raspi = await queueRaspiModel.findOne({ where: { id } });

  return res.json({
    status: "success",
    data: raspi,
  });
};
