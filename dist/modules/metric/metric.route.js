import { Router } from "express";
import { MetricController } from "./metric.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
const router = Router();
// Protect all metric routes with authMiddleware
router.use(authMiddleware);
router.get("/:monthId", MetricController.getMetricsByMonth);
router.post("/", MetricController.createMetric);
router.patch("/:id", MetricController.updateMetric);
router.delete("/:id", MetricController.deleteMetric);
export default router;
//# sourceMappingURL=metric.route.js.map