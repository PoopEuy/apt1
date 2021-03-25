const { progressModel } = require("../../models");

module.exports = async (req, res) => {
  const id = req.params.id;

  await progressModel
    .destroy({ where: { id } })
    .then((result) => {
      console.log(result);
      return res.json({
        status: "success",
        data: {
          message: "Progress Delete",
          id: id,
        },
      });
    })
    .catch((err) => {
      return res.status(404).json({
        status: "error",
        data: "Nojs not found",
      });
    });
};
