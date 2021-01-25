const { vendorModel } = require("../../models");

module.exports = async (req, res) => {
  const { pt, name, phone } = req.body;

  const data = { pt, name, phone };

  const create = await vendorModel.create(data);

  return res.status(201).json({
    status: "success",
    data: {
      id: create.id,
    },
  });
};
