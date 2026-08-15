import { Router } from "express";
import { OverviewController } from "./overview.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
const router = Router();
// Middleware প্রয়োগ করা
router.use(authMiddleware);
// Route Params হিসেবে monthId পাঠিয়ে Dashboard Overview ডাটা নেওয়া
router.get("/:monthId", OverviewController.getOverview);
export default router;
//# sourceMappingURL=overview.route.js.map