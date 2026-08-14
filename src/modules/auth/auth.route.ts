import { Router } from "express";

import {
  registerController,
  loginController,
  logoutController,
} from "./auth.controller.js";

import { registerSchema, loginSchema } from "./auth.validation.js";

import { validate } from "../../middleware/validate.middleware.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

const router = Router();

router.post("/register", validate(registerSchema), registerController);

router.post("/login", validate(loginSchema), loginController);

router.post("/logout", authMiddleware, logoutController);

export default router;
