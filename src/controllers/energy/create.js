const { energyModel } = require("../../models");

module.exports = async (req, res) => {
  const data = ({ edl1, edl2, eh1, eh2, eh3 } = req.body);

  energyModel
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
