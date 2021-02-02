"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.nojsUserModel, {
        foreignKey: "nojs_id",
        as: "nojs",
      });
    }
  }
  Ticket.init(
    {
      nojs_id: DataTypes.INTEGER,
      note: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ticketModel",
      tableName: "tickets",
    }
  );
  return Ticket;
};
