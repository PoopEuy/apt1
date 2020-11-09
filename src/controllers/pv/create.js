const { pvModel } = require("../../models");

module.exports = async (req, res) => {
  const data = ({
    pv1_curr,
    pv1_volt,
    pv2_curr,
    pv2_volt,
    pv3_curr,
    pv3_volt,
  } = req.body);

  pvModel
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
