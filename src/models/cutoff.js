"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cutoff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cutoff.init(
    {
      site: DataTypes.STRING,
      vsat_off: DataTypes.FLOAT,
      vsat_on: DataTypes.FLOAT,
      bts_off: DataTypes.FLOAT,
      bts_on: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "cutoffModel",
      tableName: "cutoffs",
    }
  );
  return Cutoff;
};
