const { dbConnection } = require("../connection");
const { DataTypes } = require("sequelize");
const SpecialityModel = require("../speciality/model");

const DoctorsModel = dbConnection.define(
  "DoctorModel",
  {
    doctorId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //image_data: {
    // type: DataTypes.BLOB('long'),
    // allowNull: false
    // },

    degree: {
      type: DataTypes.ENUM("degree", "specialist", "masters"),
      allowNull: false,
      // allowNull defaults to true
    },
    experience: {
      type: DataTypes.STRING(),
      allowNull: false,
      // allowNull defaults to true
    },
    availability: {
      type: DataTypes.ENUM("Available", "Unavailable"),
      allowNull: false,
      // allowNull defaults to true
    },
    fees: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // allowNull defaults to true
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: false,
      // allowNull defaults to true
    },
    speciality: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SpecialityModel,
        key: "specialityId",
      },
    },


  },


  {
    dbConnection,
    tableName: "doctor",
  }
);
//DoctorsModel.hasMany(AppointmentsModel, { foreignKey: "doctor" });
//AppointmentsModel.belongsTo(DoctorsModel, { foreignKey: "doctor" });



module.exports = DoctorsModel;

//const foodmodel=mongoose.models.food||mongoosee.models("food", foodSchema)
