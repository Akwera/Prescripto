const SpecialityModel = require("./model");
const getAllSpeciality = async (req, res) => {
    try {
      const Speciality = await SpecialityModel.findAll();
      res.send({ error: false, message: "Speciality retrieved", data: Speciality });
    } catch (error) {
      res.send(error.message);
    }
  };
const createSpeciality = async (req, res) => {
    const {
      specialityName,

    
      
  
    } = req.body;
    //const image_name= req.file.originalname
    //const image_data= req.file.buffer
    //const image=req.file.filename
    //const image=req.file.name
    //const image = req.file.filename||req.file.name
    const image=req.file.filename
    try {
      const speciality = await SpecialityModel.create({
        specialityName: specialityName,
        
        image:image,

        //image_name: image_name,
        //image_data:image_data
      });
      if (speciality) {
        //res.json({result:req.filename})
        //res.json({ message: "product created successfully", image_url: `http://localhost:8080/images/${req.file.filename}` });
        res.json({ message: "speciality created successfully" });
      } else {
        res.send("an error occured");
      }
    } catch (error) {
      res.send(error.message);
    }
  };
  const updateSpecialityById = async (req, res) => {
    const id = req.params.id;
    const { specialityName } = req.body;
    const image = req.file.filename||req.file.name
    try {
      const updated = await SpecialityModel.update(
        {
          specialityName: specialityName,
        
          image:image,
        },
        {
          where: { specialityId: id },
        }
      );
      if (updated) {
        res.send("Speciality updated successfully");
      } else {
        res.send("an error occured");
      }
    } catch (error) {
      res.send(error.message);
    }
  };
  const deleteSpecialityById = async (req, res) => {
    const id = req.params.id;
    try {
      const Speciality = await SpecialityModel.findByPk(id);
      if (Speciality) {
        await Speciality.destroy();
        res.send({
          error: false,
          message: "Speciality deleted successfully",
          data: [],
        });
      } else {
        res.send({
          error: true,
          message: `Speciality of id ${id} not found`,
          data: [],
        });
      }
    } catch (error) {
      res.send(error.message);
    }
  };
  const getSpeciality = async (req, res) => {
    const id = req.params.id;
    try {
      const Speciality = await SpecialityModel.findByPk(id);
      if (Speciality) {
        res.send({
          error: false,
          message: "Speciality retrieved successfully",
          data: Speciality,
        });
      } else {
        res.send({
          error: true,
          message: `Speciality of id ${id} not found`,
          data: [],
        });
      }
    } catch (error) {
      res.send(error.message);
    }
  };
  module.exports = {
  
    createSpeciality,
    getAllSpeciality,
    updateSpecialityById,
    deleteSpecialityById,
    getSpeciality
    
  };