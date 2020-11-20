const { nojsUserModel } = require("../../models");

module.exports = async (req, res) => {
  // const id = req.query.nojs_id || req.body.nojs_id || [];
  // const users = await nojsUserModel.findAllId(id);
  // return res.json({
  //   status: "success",
  //   data: users,
  // });
  const query = req.query;
  const attributes = nojsUserModel.attributes();
  if (query) {
    const temp = { attributes, where: query };

    await nojsUserModel
      .findAll(temp)
      .then((result) => {
        return res.json({
          status: "success",
          data: result,
        });
      })
      .catch((err) => {
        return res.json({
          status: "error",
          data: err,
        });
      });
  }
};
