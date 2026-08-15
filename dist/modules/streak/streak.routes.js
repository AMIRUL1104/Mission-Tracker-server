import { Router } from "express";
import { StreakController } from "./streak.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
// import { validate } from "../../middleware/validate.middleware.js";
// import { streakStatsQuerySchema } from "./streak.validation.js";
const router = Router();
router.use(authMiddleware);
// শুধুমাত্র Stats দেখা এবং রিসেট করার পারমিশন থাকবে
router.get("/stats", StreakController.getStats);
// router.delete("/", StreakController.resetStreaks);
export default router;
//# sourceMappingURL=streak.routes.js.map