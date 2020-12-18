const { statusProgramModel } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;

  await statusProgramModel
    .destroy({ where: { id } })
    .then((result) => {
      return res.json({
        status: "success",
      });
    })
    .catch((err) => {
      return res.json({
        status: "error",
        message: "Nojs not found",
      });
    });
};
