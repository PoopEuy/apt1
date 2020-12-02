const { nojsUserModel } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  // const id = req.params.id;
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
  console.log({
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
  });
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

  const nojsUser = await nojsUserModel.findOne({ where: { nojs } });
  if (!nojsUser) {
    return res.status(404).json({
      status: "error",
      message: "Nojs not found",
    });
  }

  await nojsUser.update({
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
  });

  return res.json({
    status: "success",
    data: {
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
    },
  });
};
