const { nojsUserModel } = require("../../models");

module.exports = async (req, res) => {
  const userIds = req.query.user_ids || req.body.user_ids || [];

  if (userIds.length) {
    sqlOPtions.where = {
      id: userIds,
    };
  }
  console.log(req.body);
  const users = await nojsUserModel.findAll();

  return res.json({
    status: "success",
    data: users,
  });
};
