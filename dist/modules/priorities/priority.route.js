import { Router } from "express";
import { PriorityController } from "./priority.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
const router = Router();
router.use(authMiddleware);
// Priority Routes
router.get("/month/:monthId", PriorityController.getPriorities);
router.post("/", PriorityController.createPriority);
router.delete("/:id", PriorityController.deletePriority);
// Milestone Routes
router.post("/:priorityId/milestones", PriorityController.addMilestone);
router.patch("/milestones/:id", PriorityController.toggleMilestone);
router.delete("/milestones/:id", PriorityController.deleteMilestone);
export default router;
//# sourceMappingURL=priority.route.js.map