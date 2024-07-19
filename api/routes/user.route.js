import express from "express"; // Importing Express framework
import {
  test,
  updateUser,
  deleteUser,
  signout, // Importing signout controller function
} from "../controllers/user.controller.js"; // Importing test controller function
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router(); // Creating a new router instance

// GET /test route handler
router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);

export default router; // Exporting the router for use in other parts of the application
