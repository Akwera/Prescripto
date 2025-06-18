const express = require("express");
const controller = require("./controller");
const doctorRoutes = express.Router();

const app = express()
const multer = require("multer")

app.use("/images", express.static('../upload/images'))

//image storage engine
const storage = multer.diskStorage({
    destination: "../upload/images",
    //filename is optional
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)

    }
})
const upload = multer({ storage })

doctorRoutes.post("/", upload.single("image"), controller.createDoctor);
doctorRoutes.get("/",  controller.getDoctors);
doctorRoutes.get("/:id",controller.getDoctorWithSpeciality )
doctorRoutes.put("/:id", upload.single('image'), controller.updateDoctorById);
module.exports = doctorRoutes;