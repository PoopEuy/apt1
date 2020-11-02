require("dotenv").config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

console.log(DB_NAME);

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "mysql",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "database_test",
    host: DB_HOST,
    dialect: "mysql",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "database_production",
    host: DB_HOST,
    dialect: "mysql",
  },
};
