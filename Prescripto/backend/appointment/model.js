const { dbConnection } = require("../connection");
const { DataTypes } = require("sequelize");
const SpecialityModel = require("../speciality/model");
const { UserModel } = require("../users/model");
const DoctorsModel = require("../doctors/model");

const AppointmentsModel = dbConnection.define(
  "AppointmentModel",
  {
    appointmentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    doctor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: DoctorsModel,
        key: "doctorId",
      },
    },
    patient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: "userId",
      },
    },
    date: {
      type: DataTypes.DATE(),
      allowNull: false,
      // allowNull defaults to true
    },
    time: {
      type: DataTypes.TIME(),
      allowNull: false,
      // allowNull defaults to true
    },
    reason: {
      type: DataTypes.STRING(50),
      allowNull: false,
      // allowNull defaults to true
    },


  },


  {
    dbConnection,
    tableName: "appointment",
  }
);

module.exports = AppointmentsModel;



