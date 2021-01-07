const { capacityModel } = require("../../models");

module.exports = async (req, res) => {
  const { nojs_id, disk_free, disk_total, disk_used, free_ram } = req.body;

  const nojs = await capacityModel.findOne({
    where: { nojs_id },
  });

  if (nojs) {
    await nojs.update({
      nojs_id,
      disk_free,
      disk_total,
      disk_used,
      free_ram,
    });
    return res.status(202).json({
      status: "success",
      message: "data update",
    });
  }

  await capacityModel.create({
    nojs_id,
    disk_free,
    disk_total,
    disk_used,
    free_ram,
  });

  return res.status(201).json({
    status: "success",
    message: "data Created",
  });
};
