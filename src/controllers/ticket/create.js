const { ticketModel, nojsUserModel } = require("../../models");
const { Op } = require("sequelize");
module.exports = async (req, res) => {
  const { nojs_id, note, status, createdAt } = req.body;

  if (nojs_id) {
    const nojs = await nojsUserModel.findByPk(nojs_id);
    if (!nojs) {
      return res.status(404).json({
        status: "error",
        message: "Nojs not found",
      });
    }

    const temp = await ticketModel.findOne({
      where: { [Op.and]: [{ nojs_id }, { status: false }] },
    });
    if (temp) {
      return res.status(409).json({
        status: "error",
        message: "Data Sudah Tersedia",
      });
    }

    const date = new Date(createdAt);
    const data = { nojs_id, note, status, createdAt: date };

    const create = await ticketModel.create(data);

    return res.status(201).json({
      status: "success",
      data: {
        id: create.id,
      },
    });
  }
};
