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
        type: Sequelize.INTEGER(3),
      },
      vsat_on: {
        type: Sequelize.INTEGER(3),
      },
      bts_off: {
        type: Sequelize.INTEGER(3),
      },
      bts_on: {
        type: Sequelize.INTEGER(3),
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
