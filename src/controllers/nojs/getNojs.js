const { nojsUserModel } = require("../../models");

module.exports = async (req, res) => {
  const userIds = req.query.user_ids || req.body.user_ids || [];
  let sqlOptions = {
    attributes: [
      "id",
      "nojs",
      "site",
      "provinsi",
      "lc",
      "mitra",
      "ip",
      "latitude",
      "longitude",
      "id_lvd_vsat",
      "id_ping",
      "id_batt_volt",
      "id_vsat_curr",
      "id_bts_curr",
    ],
  };

  if (userIds.length) {
    sqlOptions.where = {
      id: userIds,
    };
  }
  console.log(req.body);
  const users = await nojsUserModel.findAll(sqlOptions);

  return res.json({
    status: "success",
    data: users,
  });
};
