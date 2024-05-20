import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  getUserProfile,
  getMyAppointments
} from "../Controllers/userController.js";

const router = express.Router();

router.get("/:id", authenticate, restrict(['student']), getSingleUser);
router.get("/", authenticate, restrict(['admin']), getAllUser);
router.put("/:id", authenticate, restrict(['student']), updateUser);
router.delete("/:id", authenticate, restrict(['student']), deleteUser);
router.get("/profile/me", authenticate, restrict(['student']), getUserProfile);
router.get("appointments/my-appointments", authenticate, restrict(['student']), getMyAppointments);

export default router;
