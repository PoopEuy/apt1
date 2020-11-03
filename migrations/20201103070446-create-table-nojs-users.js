"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("nojs_users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nojs: {
        type: Sequelize.STRING(8),
        allowNull: false,
      },
      site: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      provinsi: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      lc: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      mitra: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      ip: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      latitutde: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      longitude: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      id_lvd_vsat: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      id_ping: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      id_batt_volt: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      id_vsat_curr: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      id_bts_curr: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
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
