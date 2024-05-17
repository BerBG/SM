import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
} from "../Controllers/userController.js";

const router = express.Router();

router.get("/:id", authenticate, restrict(['student']), getSingleUser);
router.get("/", restrict(['admin']), getAllUser);
router.put("/:id", restrict(['student']), updateUser);
router.delete("/:id", restrict(['student']), deleteUser);

export default router;
