"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Energy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Energy.belongsToMany(models.nojsLoggerModel, {
      //   through: "energy",
      //   foreignKey: "energy_id",
      // });
    }
  }
  Energy.init(
    {
      edl1: DataTypes.FLOAT,
      edl2: DataTypes.FLOAT,
      eh1: DataTypes.FLOAT,
      eh2: DataTypes.FLOAT,
      eh3: DataTypes.FLOAT,
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
      modelName: "energyModel",
      tableName: "energy",
    }
  );
  return Energy;
};
