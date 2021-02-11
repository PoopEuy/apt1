"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cutoffs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      site: {
        type: Sequelize.STRING(20),
      },
      vsat_off: {
        type: Sequelize.FLOAT,
      },
      vsat_on: {
        type: Sequelize.FLOAT,
      },
      bts_off: {
        type: Sequelize.FLOAT,
      },
      bts_on: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("cutoffs");
  },
};
