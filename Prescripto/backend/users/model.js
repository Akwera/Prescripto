const { DataTypes } = require("sequelize");
const { dbConnection } = require("../connection");

const UserModel = dbConnection.define(
  "UserModel",
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    userName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
   // role: {
     // type: DataTypes.ENUM("admin", "vendor", "customer"),
     // allowNull: false,
      // allowNull defaults to true
   // },
    phoneNumber: {
      type: DataTypes.STRING(13),
      allowNull: false,

      // allowNull defaults to true
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false,
  
        // allowNull defaults to true
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
  
        // allowNull defaults to true
      },
      address_line1: {
        type: DataTypes.STRING(30),
        allowNull: false,
  
        // allowNull defaults to true
      },
      address_line2: {
        type: DataTypes.STRING(30),
        allowNull: false,
  
        // allowNull defaults to true
      },
  },
  {
    dbConnection,
    tableName: "users",
    tablespace: false,
    indexes: [{ unique: true, fields: ["email"] }],
  }
);



module.exports = { UserModel };
