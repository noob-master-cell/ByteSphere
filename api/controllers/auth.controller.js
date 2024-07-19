import User from "../../models/user.model.js"; // Importing User model (assuming it's defined elsewhere)
import bcryptjs from "bcryptjs"; // Importing bcryptjs for password hashing
import { errorHandler } from "../utils/error.js"; // Importing errorHandler utility function for error handling
import jwt from "jsonwebtoken"; // Importing jsonwebtoken for generating JWT tokens

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

// Sign-in endpoint
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "Please fill all the fields"));
  }

  try {
    const validUser = await User.findOne({ email }); // Search by email instead of username
    if (!validUser) {
      return next(errorHandler(401, "User not found"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Invalid password"));
    }

    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    );
    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({ rest });
  } catch (error) {
    next(error);
  }
};
export const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign(
        { id: newUser._id, isAdmin: newUser.isAdmin },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
