const { dbConnection } = require("../connection");
const { DataTypes } = require("sequelize");

const SpecialityModel = dbConnection.define(
  "SpecialityModel",
  {
    specialityId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    specialityName: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique:true
    },

  
 

    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //image_data: {
    // type: DataTypes.BLOB('long'),
    // allowNull: false
    // },
 
    

  },


  {
    dbConnection,
    tableName: "speciality",
  }
);

module.exports = SpecialityModel;

//const foodmodel=mongoose.models.food||mongoosee.models("food", foodSchema)
