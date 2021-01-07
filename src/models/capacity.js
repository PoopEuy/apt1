"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class capacity extends Model {
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
  capacity.init(
    {
      nojs_id: DataTypes.INTEGER,
      disk_free: DataTypes.STRING,
      disk_total: DataTypes.STRING,
      disk_used: DataTypes.STRING,
      free_ram: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "capacityModel",
      tableName: "capacities",
    }
  );
  return capacity;
};
