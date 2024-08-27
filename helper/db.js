const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_Name || "ic",
  process.env.DB_USERNAME || "postgres",
  process.env.DB_PASSWORD || "postgres",
  {
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
    sync: {
      force: true,
    },
  }
);
sequelize.sync({ force: true });
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((e) => {
    console.error("Unable to connect to the database:", e);
  });

module.exports = sequelize;
