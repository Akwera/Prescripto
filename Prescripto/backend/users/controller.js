const { UPDATE } = require("sequelize/lib/query-types");
const { UserModel } = require("./model");
const { dbConnection } = require("../connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.send("All fields are mandatory");
    }
    const user = await UserModel.findOne({
      where: { email },
    });
    //compare user password and hashed password

    if (
      user &&
      (await bcrypt.compare(req.body.password.toString(), user.password))
    ) {
      const accessToken = jwt.sign(
        {
          user: { username: user.userName, email: user.email, id: user.userId },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "24h" }//expiresIn:"15m"
      );
      const id = user.userId
      console.log(id)
      // res.status(200).send(accessToken);
      res.status(200).json({ data: accessToken, user: id, message: "Logged" })
    } else {
      res.status(400).send("email or password is not valid");
    }
  } catch (error) {
    res.send(error.message);
  }
};
const deleteUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findByPk(id);
    if (user) {
      await user.destroy();
      res.send({
        error: false,
        message: "user deleted successfully",
        data: [],
      });
    } else {
      res.send({
        error: true,
        message: `user of id ${id} not registered`,
        data: [],
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.send({ error: false, message: "users retrieved", data: users });
  } catch (error) {
    res.send(error.message);
  }
};
//const currentUser = asyncHandler(async (req, res) => {
//res.status(200).json( req.user );
//});
const getUserById = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  try {
    const user = await UserModel.findByPk(id);
    if (user) {
      res.send({
        error: false,
        message: "user retrieved successfully",
        data: user,
      });
    } else {
      res.send({
        error: true,
        message: `user of id ${id} not registered`,
        data: [],
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};

const updateUserById = async (req, res) => {
  const id = req.params.id;
  const { username, password, role, phone } = req.body;
  try {
    const updated = await UserModel.update(
      {
        userName: username,
        password: password,
        role: role,
        phoneNumber: phone,
      },
      {
        where: { userId: id },
      }
    );
    if (updated) {
      res.send("user updated successfully");
    } else {
      res.send("an error occured");
    }
  } catch (error) {
    res.send(error.message);
  }
};
const register = async (req, res) => {
  //console.log(req.body);
  try {
    const passwordString = req.body.password.toString();
    const hashedPassword = await bcrypt.hash(passwordString, 10);
    const userdata = await UserModel.create({
      userName: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      address_line1: req.body.address_line1,
      address_line2: req.body.address_line2,
      phoneNumber: req.body.phoneNumber,
      gender: req.body.gender,
      dob: req.body.dob
    });

    if (userdata) {
      res.status(200).json({ message: "user created successfully", success: true, data: "Ok" });
    } else {
      res.status(201).json({ message: "an error occured" });
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  login,
  register,
  getUserById,
  deleteUserById,
  getUsers,
  updateUserById,
};
