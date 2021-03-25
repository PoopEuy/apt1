"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Ticket.init(
    {
      note: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      site: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ticketModel",
      tableName: "tickets",
    }
  );
  return Ticket;
};
