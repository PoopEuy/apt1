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
      queryInterface.addColumn("nojs_loggers", "rxlevel", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.addColumn("nojs_loggers", "plpfill", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.addColumn("nojs_loggers", "sync", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("nojs_loggers", "rxlevel"),
      queryInterface.removeColumn("nojs_loggers", "plpfill"),
      queryInterface.removeColumn("nojs_loggers", "sync"),
    ]);
  },
};
