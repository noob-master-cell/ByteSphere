import express from "express"; // Importing Express framework
import { signup } from "../controllers/auth.controller.js"; // Importing signup controller function

const router = express.Router(); // Creating a new router instance

// POST /signup route handler
router.post("/signup", signup);

export default router; // Exporting the router for use in other parts of the application
