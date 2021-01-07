"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("capacities", {
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
      disk_free: {
        type: Sequelize.STRING(8),
      },
      disk_total: {
        type: Sequelize.STRING(8),
      },
      disk_used: {
        type: Sequelize.STRING(8),
      },
      free_ram: {
        type: Sequelize.STRING(8),
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
    await queryInterface.dropTable("capacities");
  },
};
