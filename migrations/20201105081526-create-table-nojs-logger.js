"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("nojs_loggers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      ts: {
        type: Sequelize.STRING,
      },
      nojs_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "nojs_users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      batt_volt: {
        type: Sequelize.FLOAT,
      },
      dock_active: {
        type: Sequelize.STRING,
      },
      load1: {
        type: Sequelize.FLOAT,
      },
      load2: {
        type: Sequelize.FLOAT,
      },
      dock_cell_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "dock_cells",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      energy_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "energy",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      statistics_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "statistics",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      pv_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "pv",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("nojs_loggers");
  },
};
