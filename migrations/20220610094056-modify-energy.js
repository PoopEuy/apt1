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
      queryInterface.addColumn("energy", "edl3", {
        type: Sequelize.FLOAT,
        allowNull: true,
      }),
      // queryInterface.addColumn("energy", "eh3", {
      //   type: Sequelize.FLOAT,
      //   allowNull: true,
      // }),
    ]);
    // return queryInterface;.addColumn(
    //   "nojs_loggers",
    //   "load3",
    //   Sequelize.FLOAT
    // )
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("energy", "edl3"),
      // queryInterface.removeColumn("energy", "eh3"),
    ]);
  },
};
