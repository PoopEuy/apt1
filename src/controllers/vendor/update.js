const { vendorModel } = require("../../models");

module.exports = async (req, res) => {
  const id = req.params.id;
  const { name, phone, pt } = req.body;

  const vendor = await vendorModel.findOne({ where: { id } });
  if (!vendor) {
    return res.status(404).json({
      status: "error",
      message: "vendor not found",
    });
  }

  await vendor.update({ name, phone, pt });

  return res.json({
    status: "success",
    data: { name, phone, pt },
  });
};
