"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("nojs_users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nojs: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      site: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      provinsi: {
        type: Sequelize.STRING,
      },
      lc: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      mitra: {
        type: Sequelize.STRING,
      },
      ip: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      latitude: {
        type: Sequelize.STRING,
      },
      longitude: {
        type: Sequelize.STRING,
      },
      id_lvd_vsat: {
        type: Sequelize.INTEGER,
      },
      id_ping: {
        type: Sequelize.INTEGER,
      },
      id_batt_volt: {
        type: Sequelize.INTEGER,
      },
      id_vsat_curr: {
        type: Sequelize.INTEGER,
      },
      id_bts_curr: {
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
    await queryInterface.addConstraint("nojs_users", {
      type: "unique",
      fields: ["nojs"],
      name: "UNIQUE_NOJS",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("nojs_users");
  },
};
