"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NojsLogger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NojsLogger.init(
    {
      ts: DataTypes.STRING,
      nojs_id: DataTypes.INTEGER,
      batt_volt: DataTypes.FLOAT,
      dock_active: DataTypes.STRING,
      load1: DataTypes.FLOAT,
      load2: DataTypes.FLOAT,
      dock_cell_id: DataTypes.INTEGER,
      energy_id: DataTypes.INTEGER,
      statistics_id: DataTypes.INTEGER,
      pv_id: DataTypes.INTEGER,
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
      modelName: "nojsLoggerModel",
      tableName: "nojs_loggers",
    }
  );
  return NojsLogger;
};
