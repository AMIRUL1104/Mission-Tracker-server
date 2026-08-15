import { Router } from "express";
import users from "../modules/user/user.route.js";
import authRoutes from "../modules/auth/auth.route.js";
import monthRoutes from "../modules/months/month.routes.js";
import priorityRoutes from "../modules/priorities/priority.route.js";
import taskRoutes from "../modules/task/task.routes.js";
import streakRoutes from "../modules/streak/streak.routes.js";
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

router.use("/priorities", priorityRoutes);

router.use("/tasks", taskRoutes);

router.use("/streaks", streakRoutes);

// Export router to be used in main application
export default router;
