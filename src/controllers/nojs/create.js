const { nojsUserModel } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const nojs = req.body.nojs;
  const site = req.body.site;
  const provinsi = req.body.provinsi;
  const lc = req.body.lc;
  const mitra = req.body.mitra;
  const ip = req.body.ip;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const id_lvd_vsat = req.body.id_lvdvsat == "" ? null : req.body.id_lvdvsat;
  const id_ping = req.body.id_ping == "" ? null : req.body.id_ping;
  const id_batt_volt = req.body.id_batvolt == "" ? null : req.body.id_batvolt;
  const id_vsat_curr = req.body.id_vsatcurr == "" ? null : req.body.id_vsatcurr;
  const id_bts_curr = req.body.id_btscurr == "" ? null : req.body.id_btscurr;

  const schema = {
    nojs: "string|empty:false",
    site: "string|empty:false",
    lc: "string|empty:false",
    mitra: "string|empty:false",
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
  };

  const createdNojs = await nojsUserModel.create(data);

  return res.status(201).json({
    status: "success",
    data: {
      id: createdNojs.id,
    },
  });
};
