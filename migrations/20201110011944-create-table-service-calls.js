"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("service_calls", {
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
      open_time: {
        type: Sequelize.STRING,
      },
      closed_time: {
        type: Sequelize.STRING,
      },
      error: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("service_calls");
  },
};
