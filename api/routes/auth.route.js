import express from "express"; // Importing Express framework
import { signup, signin, google } from "../controllers/auth.controller.js"; // Importing signup controller function

const router = express.Router(); // Creating a new router instance

// POST /signup route handler
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);

export default router; // Exporting the router for use in other parts of the application
