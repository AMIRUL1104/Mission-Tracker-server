import { Router } from "express";
import users from "../modules/user/user.route.js";
import authRoutes from "../modules/auth/auth.route.js";
import monthRoutes from "../modules/months/month.routes.js";

// Initialize the main API router
const router = Router();

/**
 * User Routes
 */
router.use("/users", users);

/**
 * Auth Routes
 */
router.use("/auth", authRoutes);

/**
 * Month Routes
 * Endpoints:
 * GET    /months
 * GET    /months/find
 * POST   /months
 * DELETE /months/:id
 */
router.use("/months", monthRoutes);

// Export router to be used in main application
export default router;
