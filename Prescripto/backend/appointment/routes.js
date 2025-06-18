const express = require("express");
const controller = require("./controller");
const appointmentRoutes = express.Router();



appointmentRoutes.post("/", controller.createAppointment);
appointmentRoutes.get("/",  controller.getAppointments);
appointmentRoutes.get("/:id",controller.getAppointment)
appointmentRoutes.put("/:id", controller.updateAppointmentById);
module.exports = appointmentRoutes;