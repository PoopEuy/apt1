"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DockCell extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // DockCell.belongsToMany(models.nojsLoggerModel, {
      //   through: "nojs_logger",
      //   foreignKey: "dock_cell_id",
      // });
    }
  }
  DockCell.init(
    {
      dock_1: DataTypes.INTEGER,
      dock_2: DataTypes.INTEGER,
      dock_3: DataTypes.INTEGER,
      dock_4: DataTypes.INTEGER,
      dock_5: DataTypes.INTEGER,
      dock_6: DataTypes.INTEGER,
      dock_7: DataTypes.INTEGER,
      dock_8: DataTypes.INTEGER,
      dock_9: DataTypes.INTEGER,
      dock_10: DataTypes.INTEGER,
      dock_11: DataTypes.INTEGER,
      dock_12: DataTypes.INTEGER,
      dock_13: DataTypes.INTEGER,
      dock_14: DataTypes.INTEGER,
      dock_15: DataTypes.INTEGER,
      dock_16: DataTypes.INTEGER,
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
      modelName: "dockCellModel",
      tableName: "dock_cells",
    }
  );
  return DockCell;
};
