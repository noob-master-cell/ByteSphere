import express from "express"; // Importing Express framework
import { test } from "../controllers/user.controller.js"; // Importing test controller function

const router = express.Router(); // Creating a new router instance

// GET /test route handler
router.get("/test", test);

export default router; // Exporting the router for use in other parts of the application
