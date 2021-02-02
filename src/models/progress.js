"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  progress.init(
    {
      ticket_id: DataTypes.INTEGER,
      group: DataTypes.INTEGER,
      title: DataTypes.STRING,
      note: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "progressModel",
      tableName: "progresses",
    }
  );
  return progress;
};
