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
          energy_id: { [Op.ne]: 1 },
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

    static async nocSingle(modeles, nojs) {
      return await this.findAll({
        attributes: ["ts", "batt_volt", "dock_active"],
        where: {
          nojs_id: nojs,
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
        limit: 1,
      })
        .then((result) => result)
        .catch((err) => {
          console.log("err");
          return err;
        });
    }

    static async sla(modeles, dateTime, nojs) {
      return await this.findAll({
        attributes: [
          "ts",
          "batt_volt",
          "dock_active",
          "load1",
          "load2",
          "load3",
          "bspwatt",
        ],
        where: {
          nojs_id: nojs,
          ts: { [Op.between]: [dateTime.start, dateTime.end] },
          energy_id: { [Op.ne]: 1 },
        },
        include: [
          {
            model: modeles.energyModel,
            as: "energy",
          },
        ],
        order: [["ts", "ASC"]],
      })
        .then((result) => {
          const seen = new Set();
          const filteredArr = result.filter((el) => {
            const duplicate = seen.has(el.ts);
            seen.add(el.ts);
            return !duplicate;
          });
          return filteredArr;
        })
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
      cpu_temp: DataTypes.FLOAT,
      dock_active: DataTypes.STRING,
      load1: DataTypes.FLOAT,
      load2: DataTypes.FLOAT,
      load3: DataTypes.FLOAT,
      dock_cell_id: DataTypes.INTEGER,
      energy_id: DataTypes.INTEGER,
      statistics_id: DataTypes.INTEGER,
      pv_id: DataTypes.INTEGER,
      bspwatt: DataTypes.INTEGER,
      mcb_voltage: DataTypes.FLOAT,
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
