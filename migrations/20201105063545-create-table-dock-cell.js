"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("dock_cells", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      dock_1: {
        type: Sequelize.INTEGER,
      },
      dock_2: {
        type: Sequelize.INTEGER,
      },
      dock_3: {
        type: Sequelize.INTEGER,
      },
      dock_4: {
        type: Sequelize.INTEGER,
      },
      dock_5: {
        type: Sequelize.INTEGER,
      },
      dock_6: {
        type: Sequelize.INTEGER,
      },
      dock_7: {
        type: Sequelize.INTEGER,
      },
      dock_8: {
        type: Sequelize.INTEGER,
      },
      dock_9: {
        type: Sequelize.INTEGER,
      },
      dock_10: {
        type: Sequelize.INTEGER,
      },
      dock_11: {
        type: Sequelize.INTEGER,
      },
      dock_12: {
        type: Sequelize.INTEGER,
      },
      dock_13: {
        type: Sequelize.INTEGER,
      },
      dock_14: {
        type: Sequelize.INTEGER,
      },
      dock_15: {
        type: Sequelize.INTEGER,
      },
      dock_16: {
        type: Sequelize.INTEGER,
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

    await queryInterface.bulkInsert("dock_cells", [
      {
        dock_1: null,
        dock_2: null,
        dock_3: null,
        dock_4: null,
        dock_5: null,
        dock_6: null,
        dock_7: null,
        dock_8: null,
        dock_9: null,
        dock_10: null,
        dock_11: null,
        dock_12: null,
        dock_13: null,
        dock_14: null,
        dock_15: null,
        dock_16: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("dock_cells");
  },
};
