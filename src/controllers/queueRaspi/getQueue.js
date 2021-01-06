const { queueRaspiModel } = require("../../models");

module.exports = async (req, res) => {
  try {
    const raspi = await queueRaspiModel.findOne({ where: req.query });
    return res.json({
      status: "success",
      data: raspi,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error,
    });
  }
};
