"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      name: {
        type: Sequelize.STRING(30),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING(6),
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
    await queryInterface.addConstraint("users", {
      type: "unique",
      fields: ["user_name"],
      name: "UNIQUE_USERS_NAME",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
