"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pv", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      pv1_curr: {
        type: Sequelize.FLOAT,
      },
      pv1_volt: {
        type: Sequelize.FLOAT,
      },
      pv2_curr: {
        type: Sequelize.FLOAT,
      },
      pv2_volt: {
        type: Sequelize.FLOAT,
      },
      pv3_curr: {
        type: Sequelize.FLOAT,
      },
      pv3_volt: {
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

    await queryInterface.bulkInsert("pv", [
      {
        pv1_curr: null,
        pv1_volt: null,
        pv2_curr: null,
        pv2_volt: null,
        pv3_curr: null,
        pv3_volt: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("pv");
  },
};
