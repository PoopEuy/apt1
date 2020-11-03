const { nojsUserModel } = require("../../models");

module.exports = async (req, res) => {
  const userIds = req.query.user_ids || req.body.user_ids || [];

  const sqlOPtions = {
    attributes: [
      "id",
      "nojs",
      "site",
      "provinsi",
      "lc",
      "mitra",
      "ip",
      "latitutde",
      "longitude",
      "id_lvd_vsat",
      "id_ping",
      "id_batt_volt",
      "id_vsat_curr",
      "id_bts_curr",
    ],
  };

  if (userIds.length) {
    sqlOPtions.where = {
      id: userIds,
    };
  }
  console.log(req.body);
  const users = await nojsUserModel.findAll(sqlOPtions);

  return res.json({
    status: "success",
    data: users,
  });
};
