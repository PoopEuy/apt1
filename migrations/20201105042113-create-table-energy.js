"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("energy", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      edl1: {
        type: Sequelize.FLOAT,
      },
      edl2: {
        type: Sequelize.FLOAT,
      },
      eh1: {
        type: Sequelize.FLOAT,
      },
      eh2: {
        type: Sequelize.FLOAT,
      },
      eh3: {
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("energy");
  },
};
