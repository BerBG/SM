import User from "../models/UserSchema.js";
import Tutor from "../models/TutorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    let user = null;

    if (role == "student") {
      user = await User.findOne({ email });
    } else if (role == "tutor") {
      user = await Tutor.findOne({ email });
    }

    // Check if user exist
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role == "student") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role
      });
    }

    if (role == "tutor") {
      user = new Tutor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role
      });
    }

    await user.save()

    res.status(200).json({success: true, message: 'User successfully created'})

  } catch (err) {
    res.status(500).json({success:false, message: 'Internal server error, Try again'})
  }
};

export const login = async (req, res) => {
  try {
  } catch (err) {}
};
