"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class nojsUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  nojsUser.init(
    {
      nojs: DataTypes.STRING,
      site: DataTypes.STRING,
      provinsi: DataTypes.STRING,
      lc: DataTypes.STRING,
      mitra: DataTypes.STRING,
      ip: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      id_lvd_vsat: DataTypes.INTEGER,
      id_ping: DataTypes.INTEGER,
      id_batt_volt: DataTypes.INTEGER,
      id_vsat_curr: DataTypes.INTEGER,
      id_bts_curr: DataTypes.INTEGER,
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
      modelName: "nojsUserModel",
      tableName: "nojs_users",
    }
  );
  return nojsUser;
};
