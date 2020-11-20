const { nojsUserModel } = require("../../models");

module.exports = async (req, res) => {
  const lc = req.params.lc;
  nojsUserModel
    .findAll({
      where: { lc },
    })
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
