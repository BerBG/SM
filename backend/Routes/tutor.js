import express from "express";
import {
  updateTutor,
  deleteTutor,
  getAllTutor,
  getSingleTutor,
} from "../Controllers/tutorController.js";

const router = express.Router();

router.get("/:id", getSingleTutor);
router.get("/", getAllTutor);
router.put("/:id", updateTutor);
router.delete("/:id", deleteTutor);

export default router;
