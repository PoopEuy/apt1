const { queueRaspiModel } = require("../../models");

module.exports = async (req, res) => {
  const { name, status } = req.body;
  const data = { name, status };

  const createdNojs = await queueRaspiModel.create(data);
  return res.status(201).json({
    status: "success",
    data: {
      id: createdNojs.id,
    },
  });
};
