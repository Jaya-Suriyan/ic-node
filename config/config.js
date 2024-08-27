require("dotenv").config();
module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "ic",
    host: "127.0.0.1",
    dialect: "postgres",
    dialectModule: require('pg')
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "ic",
    host: "127.0.0.1",
    dialect: "postgres",
    dialectModule: require('pg')
  },
  production: {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "ic",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
    dialectModule: require('pg'),
    port: process.env.DB_PORT || 5432, 
  },
};
