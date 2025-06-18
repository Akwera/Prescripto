const SpecialityModel = require("../speciality/model");
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
const getDoctorWithSpeciality = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await DoctorsModel.findOne({
      where: { doctorId: id },
      include: [{ model: SpecialityModel, as: "speciality" }],
    });
    res.send(doctor);
  } catch (error) {
    res.send(error);
  }
};
const getDoctors = async (req, res) => {
  try {
    const Doctors = await DoctorsModel.findAll({ include: SpecialityModel });
    res.send({ error: false, message: "Doctors retrieved", data: Doctors });
  } catch (error) {
    res.send(error.message);
  }
};
const createDoctor = async (req, res) => {
  const {
    firstName,
    lastName,

    address,
    fees,
    experience,
    degree,
    speciality,
    description,
    availability



  } = req.body;
  //const image_name= req.file.originalname
  //const image_data= req.file.buffer
  //const image=req.file.filename
  //const image=req.file.name
  const image = req.file.filename || req.file.name
  try {
    const doctor = await DoctorsModel.create({
      firstName: firstName,
      lastName: lastName,
      // category_name: category_name,
      fees: fees,
      experience: experience,
      speciality: speciality,
      description: description,
      address: address,
      degree: degree,
      image: image,
      availability: availability

      //image_name: image_name,
      //image_data:image_data
    });
    if (doctor) {
      //res.json({result:req.filename})
      //res.json({ message: "product created successfully", image_url: `http://localhost:8080/images/${req.file.filename}` });
      res.json({ message: "doctor created successfully" });
    } else {
      res.send("an error occured");
    }
  } catch (error) {
    res.send(error.message);
  }
};
const updateDoctorById = async (req, res) => {
  const id = req.params.id;
  const {
    firstName,
    lastName,

    address,
    fees,
    experience,
    degree,
    speciality,
    description,
    availability

  } = req.body;
  const image = req.file.filename
  try {
    const updated = await DoctorsModel.update(
      {
        firstName: firstName,
        lastName: lastName,
        // category_name: category_name,
        fees: fees,
        experience: experience,
        speciality: speciality,
        description: description,
        address: address,
        degree: degree,
        image: image,
        availability: availability

      },
      {
        where: { doctorId: id },
      }
    );
    if (updated) {
      res.send("doctor info updated successfully");
    } else {
      res.send("an error occured");
    }
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = {

  createDoctor,
  getDoctors, 
  getDoctorWithSpeciality,
  updateDoctorById

};