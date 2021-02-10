const { cutoffModel } = require("../../models");

module.exports = async (req, res) => {
  const { site, vsat_off, vsat_on, bts_off, bts_on } = req.body;

  const dataSite = await cutoffModel.findOne({
    where: { site },
  });

  if (dataSite) {
    if (vsat_off) {
      await dataSite.update({
        site,
        vsat_off,
        vsat_on,
        bts_off,
        bts_on,
      });
      return res.status(202).json({
        status: "success",
        message: "data update",
      });
    }
    return res.status(202).json({
      status: "success",
      message: "data null",
    });
  }

  await cutoffModel.create({
    site,
    vsat_off,
    vsat_on,
    bts_off,
    bts_on,
  });

  return res.status(201).json({
    status: "success",
    message: "data Created",
  });
};
