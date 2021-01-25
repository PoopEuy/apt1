"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("nojs_users", "gs", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.addColumn("nojs_users", "darat", {
        type: Sequelize.STRING(30),
        allowNull: true,
      }),
      queryInterface.addColumn("nojs_users", "laut", {
        type: Sequelize.STRING(30),
        allowNull: true,
      }),
      queryInterface.addColumn("nojs_users", "udara", {
        type: Sequelize.STRING(30),
        allowNull: true,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("nojs_users", "darat"),
      queryInterface.removeColumn("nojs_users", "laut"),
      queryInterface.removeColumn("nojs_users", "udara"),
    ]);
  },
};
