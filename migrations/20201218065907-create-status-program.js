"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("status_programs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nojs_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "nojs_users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      accumulate_energy_service: {
        type: Sequelize.STRING(15),
      },
      check_button_service: {
        type: Sequelize.STRING(15),
      },
      handle_canbus_service: {
        type: Sequelize.STRING(15),
      },
      handle_mosfet_service: {
        type: Sequelize.STRING(15),
      },
      handle_mosfet_timer: {
        type: Sequelize.STRING(15),
      },
      handle_relay_service: {
        type: Sequelize.STRING(15),
      },
      handle_relay_timer: {
        type: Sequelize.STRING(15),
      },
      keep_alive_dock_service: {
        type: Sequelize.STRING(15),
      },
      keep_alive_dock_timer: {
        type: Sequelize.STRING(15),
      },
      mppt_service: {
        type: Sequelize.STRING(15),
      },
      mppt_snmp_service: {
        type: Sequelize.STRING(15),
      },
      mppt_snmp_timer: {
        type: Sequelize.STRING(15),
      },
      store_log_data_service: {
        type: Sequelize.STRING(15),
      },
      store_log_data_timer: {
        type: Sequelize.STRING(15),
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
    await queryInterface.dropTable("status_programs");
  },
};
