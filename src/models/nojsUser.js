"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NojsUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // NojsUser.belongsToMany(models.nojsLoggerModel, {
      //   through: "nojs_logger",
      //   foreignKey: "nojs_id",
      // });
      // NojsUser.hasMany(models.nojsLoggerModel, { as: "loggers" });
    }

    static attributes() {
      return [
        "id",
        "nojs",
        "site",
        "provinsi",
        "lc",
        "mitra",
        "ip",
        "latitude",
        "longitude",
        "id_lvd_vsat",
        "id_ping",
        "id_batt_volt",
        "id_vsat_curr",
        "id_bts_curr",
      ];
    }

    static async findId(id) {
      return await this.findOne({
        attributes: ["nojs"],
        where: { id },
      })
        .then((result) => result)
        .catch((err) => err);
    }
    static async findAllId(id) {
      let temp = { attributes: this.attributes() };
      id.length && (temp = { ...temp, id });
      return await this.findAll(temp)
        .then((result) => result)
        .catch((err) => err);
    }
    static async findlc(lc) {
      let temp = { attributes: this.attributes() };
      temp = { ...temp, where: { lc } };
      console.log(temp);
      return await this.findAll(temp)
        .then((result) => result)
        .catch((err) => err);
    }
  }
  NojsUser.init(
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
  return NojsUser;
};
