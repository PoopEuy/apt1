"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("tickets", "nojs_id");

    await queryInterface.addColumn("tickets", "site", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("tickets", "nojs_id", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "nojs_users",
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    });
    await queryInterface.removeColumn("tickets", "site");
  },
};
