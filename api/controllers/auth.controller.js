import User from "../../models/user.model.js"; // Importing User model (assuming it's defined elsewhere)
import bcryptjs from "bcryptjs"; // Importing bcryptjs for password hashing
import { errorHandler } from "../utils/error.js"; // Importing errorHandler utility function for error handling

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body; // Destructuring username, email, and password from request body

  // Validation: Check if username, email, and password are provided and not empty
  if (
    !username ||
    !email ||
    !password ||
    username == "" ||
    email == "" ||
    password == ""
  ) {
    next(errorHandler(400, "Please fill all the fields")); // If any field is missing or empty, send 400 Bad Request error
  }

  const hashedPassword = bcryptjs.hashSync(password, 10); // Hashing the password synchronously with bcryptjs

  // Creating a new instance of User model with username, email, and hashed password
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save(); // Saving the new user to the database asynchronously
    res.json({ message: "Sign Up successful" }); // Sending a JSON response indicating successful signup
  } catch (error) {
    next(error); // If an error occurs during database operation, pass it to the error handling middleware
  }
};
