const { ticketModel, nojsUserModel } = require("../../models");
const { Op } = require("sequelize");
module.exports = async (req, res) => {
  const { note, status, site } = req.body;

  const temp = await ticketModel.findOne({
    where: { [Op.and]: [{ site }, { status: false }] },
  });
  if (temp) {
    return res.status(409).json({
      status: "error",
      message: "Data Sudah Tersedia",
    });
  }

  const data = { site, note, status };

  const create = await ticketModel.create(data);

  return res.status(201).json({
    status: "success",
    data: {
      id: create.id,
    },
  });
};
