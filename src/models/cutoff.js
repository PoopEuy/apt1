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
      vsat_off: DataTypes.INTEGER,
      vsat_on: DataTypes.INTEGER,
      bts_off: DataTypes.INTEGER,
      bts_on: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cutoffModel",
      tableName: "cutoffs",
    }
  );
  return Cutoff;
};
