const express = require("express");
const cors = require("cors");


const SpecialityModel = require("./speciality/model");
const DoctorModel = require("./doctors/model");





//convert to json
const bodyParser = require("body-parser");

require("dotenv").config();
//json response small
const compression = require("compression");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
const PORT = process.env.PORT;

const { dbConnection, syncModels } = require("./connection");
const doctorRoutes = require("./doctors/routes");
const specialityRoutes = require("./speciality/routes");
const authRoutes = require("./users/routes");
const appointmentRoutes = require("./appointment/routes");

const  {UserModel}  = require("./users/model");
const DoctorsModel = require("./doctors/model");
const AppointmentsModel = require("./appointment/model")

syncModels();

SpecialityModel.hasMany(DoctorsModel, { foreignKey: 'specialityId' });
DoctorModel.belongsTo(SpecialityModel, { foreignKey: 'speciality' });

DoctorsModel.hasMany(AppointmentsModel, { foreignKey: "doctor" });
AppointmentsModel.belongsTo(DoctorsModel, { foreignKey: "doctor" });

UserModel.hasMany(AppointmentsModel, { foreignKey: "patient" });
AppointmentsModel.belongsTo(UserModel, { foreignKey: "patient" });

//UserModel.hasMany(AppointmentsModel, { foreignKey: 'userId' });
//AppointmentsModel.belongsTo(UserModel, { foreignKey: 'patient' });

//AppointmentsModel.hasMany(DoctorsModel, { foreignKey: 'doctor' });
//DoctorsModel.belongsTo(AppointmentsModel, { foreignKey: 'doctor' });

//DoctorsModel.hasMany(AppointmentsModel, { foreignKey: "doctorId" });
//AppointmentsModel.belongsTo(DoctorsModel, { foreignKey: "doctor" });

app.listen(PORT, () => {
    console.log("app running on port:" + PORT);
});

dbConnection
    .sync()
    .then(() => {
        console.log("Database synchronized");
    })
    .catch((error) => {
        console.error("Error synchronizing database:", error);
    });
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002", "http://localhost:3003", "https:localhost:5000"];
app.use(
    cors({
        origin: allowedOrigins, // Specify allowed origin(s)

        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"], // Specify allowed HTTP methods
        allowedHeaders: ["content-type", "Authorization"],
        preflightContinue: false, // Disable preflight continuation
        optionsSuccessStatus: 200, // Set success status code
    })
);
app.use("/images", express.static('../upload/images'))
app.use("/api/v1/doctors", doctorRoutes);
app.use("/api/v1/speciality", specialityRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/appointments", appointmentRoutes);