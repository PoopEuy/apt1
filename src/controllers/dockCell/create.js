const { dockCellModel } = require("../../models");

module.exports = async (req, res) => {
  const data = ({
    dock_1,
    dock_2,
    dock_3,
    dock_4,
    dock_5,
    dock_6,
    dock_7,
    dock_8,
    dock_9,
    dock_10,
    dock_11,
    dock_12,
    dock_13,
    dock_14,
    dock_15,
    dock_16,
  } = req.body);

  dockCellModel
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
