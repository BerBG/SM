import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";
import {
  updateTutor,
  deleteTutor,
  getAllTutor,
  getSingleTutor,
} from "../Controllers/tutorController.js";

const router = express.Router();

router.get("/:id", getSingleTutor);
router.get("/", getAllTutor);
router.put("/:id", authenticate, restrict(['tutor']), updateTutor);
router.delete("/:id", authenticate, restrict(['tutor']), deleteTutor);

export default router;
