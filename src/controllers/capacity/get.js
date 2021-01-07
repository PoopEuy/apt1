const { capacityModel, nojsUserModel } = require("../../models");

module.exports = async (req, res) => {
  capacityModel
    .findAll({
      include: [
        {
          model: nojsUserModel,
          as: "nojs",
          attributes: ["nojs", "site"],
        },
      ],
    })
    .then((result) => {
      let temp = [];
      result.forEach((el) => {
        temp = [
          ...temp,
          {
            nojs: el.nojs.nojs,
            site: el.nojs.site,
            disk_free: el.disk_free,
            disk_total: el.disk_total,
            disk_used: el.disk_used,
            free_ram: el.free_ram,
          },
        ];
      });
      return res.status(200).json({
        status: "success",
        data: temp,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        status: "error",
        message: err,
      });
    });
};
