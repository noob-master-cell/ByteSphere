import express from "express"; // Importing Express framework
import mongoose from "mongoose"; // Importing mongoose for MongoDB connection
import dotenv from "dotenv"; // Importing dotenv for environment variables
import userRoutes from "./routes/user.route.js"; // Importing user routes
import authRoutes from "./routes/auth.route.js"; // Importing auth routes
import cookieParser from "cookie-parser"; // Importing cookie-parser for managing cookies
import postRoutes from "./routes/post.route.js"; // Importing post routes
import path from "path";

import "dotenv/config";

dotenv.config(); // Loading environment variables from .env file

// Connecting to MongoDB using mongoose
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err); // Log error if MongoDB connection fails
  });

const __dirname = path.resolve();

const app = express(); // Creating an Express application

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cookieParser()); // Middleware to parse cookies

app.listen(3000, () => {
  console.log("Server is running on port : 3000");
});

// Routes
app.use("/api/user", userRoutes); // Mounting user routes under /api/user
app.use("/api/auth", authRoutes); // Mounting auth routes under /api/auth
app.use("/api/post", postRoutes); // Mounting post routes under /api/post

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client", "dist", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; // Default to 500 if no statusCode is provided
  const message = err.message || "Internal Server Error"; // Default error message
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
