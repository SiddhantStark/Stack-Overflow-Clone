import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import users from "../models/auth.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });// we are trying to find the email in the existing data

    if (existinguser) {
      //if the email already exists then we will send status code 404 and print the given message
      return res.status(404).json({ message: "User already Exist." });
    }

    //we will hash the password entered by the user
    const hashedPassword = await bcrypt.hash(password, 12);
    // and then we will create a new user object which will store all the data of user
    const newUser = await users.create({
      name,
      email,
      password: hashedPassword,
    });
    // we will create the token for authentication
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } //the token will expire in 1 hour
    );
    res.status(200).json({ result: newUser, token }); 
  } catch (error) {
    //if any error occurs
    res.status(500).json("Something went worng...");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });// we are trying to find the email in existing database
    if (!existinguser) {
      // if it doesn't exist then we will give error
      return res.status(404).json({ message: "User don't Exist." });
    }
    //else we will compare the entered password with real password
    const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
    if (!isPasswordCrt) {
      //if password is incorrect then we give will the given message
      return res.status(400).json({ message: "Invalid credentials" });
    }
    //else we will log in the user
    // we will create the token
    const token = jwt.sign(
      { email: existinguser.email, id: existinguser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existinguser, token });
  } catch (error) {
    res.status(500).json("Something went worng...");
  }
};