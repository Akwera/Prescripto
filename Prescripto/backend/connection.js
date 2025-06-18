const { Sequelize } = require("sequelize");
require("dotenv").config();

/*const dbConnection = new Sequelize("prescripto", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: { timestamps: true },
  logging: console.log,
});*/
console.log('Connecting to MySQL at:', process.env.DB_HOST);

const dbConnection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: { timestamps: true },
    logging: console.log,
  }
);



const syncModels = async () => {
  await dbConnection.sync({ force: true });
};

module.exports = { dbConnection, syncModels };