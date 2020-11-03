const { nojsUserModel } = require("../../models");

module.exports = async (req, res) => {
  const id = req.params.id;

  await nojsUserModel.destroy({
    where: {
      id,
    },
  });
  return res.json({
    status: "success",
    data: {
      message: "Nojs Delete",
      id: id,
    },
  });
};
