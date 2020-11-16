"use strict";
const { Model } = require("sequelize");
const { Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class NojsLogger extends Model {
    static associate(models) {
      this.belongsTo(models.nojsUserModel, {
        foreignKey: "nojs_id",
        as: "nojs",
      });
      this.belongsTo(models.dockCellModel, {
        foreignKey: "dock_cell_id",
        as: "dockCell",
      });
      this.belongsTo(models.energyModel, {
        foreignKey: "energy_id",
        as: "energy",
      });
      this.belongsTo(models.pvModel, {
        foreignKey: "pv_id",
        as: "pv",
      });
    }
    static async noc(modeles, dateTime, nojs) {
      return await this.findAll({
        attributes: ["ts", "batt_volt", "dock_active"],
        where: {
          nojs_id: nojs,
          ts: { [Op.between]: [dateTime.start, dateTime.end] },
          batt_volt: { [Op.ne]: null },
        },
        include: [
          {
            model: modeles.energyModel,
            as: "energy",
          },
          // {
          //   model: modeles.nojsUserModel,
          //   as: "nojs",
          //   attributes: ["nojs"],
          // },
          // {
          //   model: modeles.pvModel,
          //   as: "pv",
          // },
        ],
        order: [["ts", "DESC"]],
      })
        .then((result) => result)
        .catch((err) => {
          console.log(err);
          return err;
        });
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
