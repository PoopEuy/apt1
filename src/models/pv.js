"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pv extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pv.init(
    {
      pv1_curr: DataTypes.FLOAT,
      pv1_volt: DataTypes.FLOAT,
      pv2_curr: DataTypes.FLOAT,
      pv2_volt: DataTypes.FLOAT,
      pv3_curr: DataTypes.FLOAT,
      pv3_volt: DataTypes.FLOAT,
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
      modelName: "pvModel",
      tableName: "pv",
    }
  );
  return Pv;
};
