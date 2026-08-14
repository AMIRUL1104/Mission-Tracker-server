import { Router } from "express";
import { TaskController } from "./task.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

const router = Router();

router.use(authMiddleware);

router.get("/month/:monthId", TaskController.getTasks);
router.post("/", TaskController.createTask);
router.delete("/:id", TaskController.deleteTask);
router.post("/toggle-check", TaskController.toggleCheck);

export default router;
