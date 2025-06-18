const SpecialityModel = require("../speciality/model");
const { UserModel } = require("../users/model");
const AppointmentsModel = require("./model");
const DoctorsModel = require("./model");
/*
const doctor = await DoctorModel.findOne({ where: { doctorId: doctorId }, include: { model: SpecialityModel, attributes: ['specialityName'] } })
*/

//async function getDoctorWithSpeciality(doctorId) { const doctor = await Doctor.findOne({ where: { id: doctorId }, include: Speciality }); console.log(doctor); }
/*const getDoctorWithSpeciality = async (req, res) => {
  try {
    const Doctor = await DoctorsModel.findOne({ where: { id: doctorId }, include: SpecialityModel });
    res.send({ error: false, message: "Doctors with speciality retrieved", data: Doctors });
    console.log(Doctor);
  } catch (error) {
    res.send(error.message);
  }
}*/
const getAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await AppointmentsModel.findOne({
      where: { appointmentId: id },
      include: [{ model: UserModel, as: "patient" }, { model: DoctorsModel, as: "doctor" }],
    });
    res.send(appointment);
  } catch (error) {
    res.send(error);
  }
};
const getAppointments = async (req, res) => {
  try {
   // const appointments = await AppointmentsModel.findAll({ include: UserModel }, { include: DoctorsModel });
   const appointments = await AppointmentsModel.findAll({ include: [UserModel, DoctorsModel] });
    res.json({ error: false, message: "Appointments retrieved", data: appointments });
  } catch (error) {
    //res.send(error.message);
    res.status(500).json({ error: true, message: error.message });
  }
};
const createAppointment = async (req, res) => {
  const {
    doctor,
    patient,
    date,
    time,
    reason,
  } = req.body;

  try {
    // Check if an appointment already exists for the given date and time
    const existingAppointment = await AppointmentsModel.findOne({
      where: { doctor, date, time }
    });
    if (existingAppointment) {
      return res.status(400).json({ message: 'This time slot is already booked.' });
    }

    const appointment = await AppointmentsModel.create({
      doctor: doctor,
      patient: patient,
      date: date,
      time: time,
      reason: reason,
    });

    if (appointment) {
      res.json({ message: "Appointment created successfully" });
    } else {
      res.status(500).json({ message: "An error occurred while creating the appointment" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAppointmentById = async (req, res) => {
  const id = req.params.id;
  const {

    doctor,
    patient,
    // category_name: category_name,
    date,
    time,
    reason
  } = req.body;
  //const image = req.file.filename
  try {
    const updated = await AppointmentsModels.update(
      {
        doctor: doctor,
        patient: patient,
        // category_name: category_name,
        date: date,
        time: time,
        reason: reason,

      },
      {
        where: { appointmentId: id },
      }
    );
    if (updated) {
      res.send("appointment info updated successfully");
    } else {
      res.send("an error occured");
    }
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = {

  createAppointment,
  getAppointments,
  getAppointment,
  updateAppointmentById

};