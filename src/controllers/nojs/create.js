const { nojsUserModel } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const {
    nojs,
    site,
    provinsi,
    lc,
    mitra,
    ip,
    latitude,
    longitude,
    id_lvd_vsat,
    id_ping,
    id_batt_volt,
    id_vsat_curr,
    id_bts_curr,
    gs,
    darat,
    laut,
    udara,
  } = req.body;

  const schema = {
    nojs: "string|empty:false",
    site: "string|empty:false",
    lc: "string|empty:false",
    ip: "string|empty:false",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const user = await nojsUserModel.findOne({
    where: { nojs },
  });

  if (user) {
    return res.status(404).json({
      status: "error",
      message: "nojs already exist",
    });
  }

  const data = {
    nojs,
    site,
    provinsi,
    lc,
    mitra,
    ip,
    latitude,
    longitude,
    id_lvd_vsat,
    id_ping,
    id_batt_volt,
    id_vsat_curr,
    id_bts_curr,
    gs,
    darat,
    laut,
    udara,
  };
  try {
    const createdNojs = await nojsUserModel.create(data);
    return res.status(201).json({
      status: "success",
      data: {
        id: createdNojs.id,
      },
    });
  } catch (e) {
    return res.status(409).json({
      status: "error",
      message: e,
    });
  }
};
