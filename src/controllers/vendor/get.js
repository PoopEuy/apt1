const { vendorModel } = require("../../models");

module.exports = async (req, res) => {
  const attributes = ["id", "name", "phone", "pt"];
  vendorModel
    .findAll({ attributes })
    .then((result) => {
      return res.json({
        status: "success",
        data: result,
      });
    })
    .catch((err) => {
      return res.status(409).json({
        status: "error",
        data: err,
      });
    });
};
