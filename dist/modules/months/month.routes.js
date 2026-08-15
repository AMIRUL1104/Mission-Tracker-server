import { Router } from "express";
import { MonthController } from "./month.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
const router = Router();
// Protect all month routes with authMiddleware
router.use(authMiddleware);
router.get("/", MonthController.getAllMonths);
router.get("/find", MonthController.getSingleMonth);
router.post("/", MonthController.createMonth);
router.delete("/:id", MonthController.deleteMonth);
export default router;
//# sourceMappingURL=month.routes.js.map