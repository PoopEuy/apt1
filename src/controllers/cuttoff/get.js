const { cutoffModel } = require("../../models");

module.exports = async (req, res) => {
  const { site } = req.query;
  if (site) {
    return cutoffModel
      .findAll({ where: { site } })
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
  }
  return cutoffModel
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
