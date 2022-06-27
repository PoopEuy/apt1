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
      queryInterface.addColumn("nojs_loggers", "load3", {
        type: Sequelize.FLOAT,
        allowNull: true,
      }),
      queryInterface.addColumn("nojs_loggers", "bspwatt", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.addColumn("nojs_loggers", "mcb_voltage", {
        type: Sequelize.FLOAT,
        allowNull: true,
      }),
    ]);
    // return queryInterface;.addColumn(
    //   "nojs_loggers",
    //   "load3",
    //   Sequelize.FLOAT
    // )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
