const { nojsUserModel } = require("../../models");

module.exports = async (req, res) => {
  const id = req.query.nojs_id || req.body.nojs_id || [];

  const users = await nojsUserModel.findAllId(id);

  return res.json({
    status: "success",
    data: users,
  });
};
