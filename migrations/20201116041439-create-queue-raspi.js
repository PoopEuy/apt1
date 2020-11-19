"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("queue_raspis", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.bulkInsert("queue_raspis", [
      {
        name: "site1",
        status: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "site2",
        status: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "site3",
        status: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "site4",
        status: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("queue_raspis");
  },
};
