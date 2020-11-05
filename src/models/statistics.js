"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Statistics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Statistics.init(
    {
      dock_max: DataTypes.INTEGER,
      value_max: DataTypes.FLOAT,
      dock_min: DataTypes.INTEGER,
      value_min: DataTypes.FLOAT,
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "statisticsModel",
      tableName: "statistics",
    }
  );
  return Statistics;
};
