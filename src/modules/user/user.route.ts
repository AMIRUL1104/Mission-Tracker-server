import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";

import {
  createUserController,
  getUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} from "./user.controller.js";

import { createUserSchema, updateUserSchema } from "./user.validation.js";

import { validate } from "../../middleware/validate.middleware.js";

const router = Router();

router.post("/", validate(createUserSchema), createUserController);

router.get("/", getUsersController);

// router.get("/profile", authMiddleware, getProfileController);

router.get("/:id", authMiddleware, getUserByIdController);

router.patch("/:id", validate(updateUserSchema), updateUserController);

router.delete("/:id", deleteUserController);

export default router;
