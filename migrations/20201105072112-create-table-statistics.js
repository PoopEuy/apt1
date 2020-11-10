"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("statistics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      dock_max: {
        type: Sequelize.INTEGER,
      },
      value_max: {
        type: Sequelize.FLOAT,
      },
      dock_min: {
        type: Sequelize.INTEGER,
      },
      value_min: {
        type: Sequelize.FLOAT,
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

    await queryInterface.bulkInsert("statistics", [
      {
        dock_max: null,
        value_max: null,
        dock_min: null,
        value_min: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("statistics");
  },
};
