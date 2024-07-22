import express from "express"; // Importing Express framework
import mongoose from "mongoose"; // Importing mongoose for MongoDB connection
import dotenv from "dotenv"; // Importing dotenv for environment variables
import userRoutes from "./routes/user.route.js"; // Importing user routes
import authRoutes from "./routes/auth.route.js"; // Importing auth routes
import postRoutes from "./routes/post.route.js"; // Importing post routes
import cookieParser from "cookie-parser"; // Importing cookie-parser for managing cookies
import path from "path";
import cors from "cors"; // Importing CORS for cross-origin requests

dotenv.config(); // Loading environment variables from .env file

// Connecting to MongoDB using mongoose
mongoose
  .connect(process.env.MONGO, { connectTimeoutMS: 30000 })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err); // Log error if MongoDB connection fails
  });

const __dirname = path.resolve();

const app = express(); // Creating an Express application

// Middleware
app.use(cors()); // Enabling CORS
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cookieParser()); // Middleware to parse cookies
app.use(express.static(path.join(__dirname, "/client/dist"))); // Serving static files from client

// Routes
app.use("/api/user", userRoutes); // Mounting user routes under /api/user
app.use("/api/auth", authRoutes); // Mounting auth routes under /api/auth
app.use("/api/post", postRoutes); // Mounting post routes under /api/post

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client", "dist", "index.html")); // Serve React app for all other routes
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging
  const statusCode = err.statusCode || 500; // Default to 500 if no statusCode is provided
  const message = err.message || "Internal Server Error"; // Default error message
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
