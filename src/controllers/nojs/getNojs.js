const { nojsUserModel } = require("../../models");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  // const id = req.query.nojs_id || req.body.nojs_id || [];
  // const users = await nojsUserModel.findAllId(id);
  // return res.json({
  //   status: "success",
  //   data: users,
  // });
  const query = req.query;
  const site = req.query.site;
  const attributes = nojsUserModel.attributes();
  if (!site) {
    const temp = { attributes, where: query, order: [["site", "ASC"]] };

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
  } else if (site) {
    const offset = (site.slice(4, 5) - 1) * 25;
    const temp = {
      attributes,
      order: [
        ["lc", "ASC"],
        ["nojs", "ASC"],
      ],
      offset,
      limit: 25,
    };
    await nojsUserModel
      .findAll(temp)
      .then((result) => {
        return res.json({
          status: "success",
          total: result.length,
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
