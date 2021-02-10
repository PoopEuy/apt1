const { cutoffModel } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  await cutoffModel
    .destroy({ where: { id } })
    .then((result) => {
      if (result > 0) {
        return res.json({
          status: "success",
        });
      }
      return res.json({
        status: "error",
        message: "Site not found",
      });
    })
    .catch((err) => {
      return res.json({
        status: "error",
        message: "Site not found",
      });
    });
};
