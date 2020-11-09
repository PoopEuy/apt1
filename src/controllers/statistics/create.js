const { statisticsModel } = require("../../models");

module.exports = async (req, res) => {
  const data = ({ dock_max, value_max, dock_min, value_min } = req.body);

  statisticsModel
    .create(data)
    .then((result) => {
      return res.status(201).json({
        status: "success",
        data: {
          id: result.id,
        },
      });
    })
    .catch((err) => {
      return res.status(409).json({
        status: "error",
        message: err,
      });
    });
};
