"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn("nojs_loggers", "panel2_type", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("nojs_loggers", "ehub_ver", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("nojs_loggers", "panel2_type"),
      queryInterface.removeColumn("nojs_loggers", "ehub_ver"),
    ]);
  },
};
