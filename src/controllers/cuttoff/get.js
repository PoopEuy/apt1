const { cutoffModel } = require("../../models");

module.exports = async (req, res) => {
  cutoffModel
    .findAll()
    .then((result) => {
      return res.status(200).json({
        status: "success",
        data: result,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        status: "error",
        message: err,
      });
    });
};
