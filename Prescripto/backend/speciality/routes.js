const express = require("express");
const controller = require("./controller");
const specialityRoutes = express.Router();

const app = express()
const multer = require("multer")

app.use("/images", express.static('../upload/images'))

//image storage engine
const storage = multer.diskStorage({
    destination: "../upload/images",
    //filename is optional
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
        //return cb(null, `${file.originalname}`)

    }
})
const upload = multer({ storage })

specialityRoutes.post("/", upload.single("image"), controller.createSpeciality);
specialityRoutes.get("/", controller.getAllSpeciality);
specialityRoutes.get("/:id", controller.getSpeciality);
specialityRoutes.put("/:id", controller.updateSpecialityById)
specialityRoutes.delete("/:id", controller.deleteSpecialityById);
module.exports = specialityRoutes;