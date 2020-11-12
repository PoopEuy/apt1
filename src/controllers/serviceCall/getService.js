const { serviceCallModel } = require("../../models");

module.exports = async (req, res) => {
  const status = req.query.status || req.body.status || "";
  const sqlOptions = { include: ["nojs"] };

  if (status) {
    sqlOptions.where = {
      status,
    };
  }

  const users = await serviceCallModel.findAll(sqlOptions);

  return res.json({
    status: "success",
    data: users,
  });
};
