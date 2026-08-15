import { Router } from "express";
import { AcademicController } from "./academic.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
const router = Router();
router.use(authMiddleware);
// Academic Subjects
router.get("/:monthId", AcademicController.getAcademics);
router.post("/", AcademicController.createAcademic);
router.patch("/:id", AcademicController.updateAcademic);
router.delete("/:id", AcademicController.deleteAcademic);
// Chapters
router.post("/:academicId/chapters", AcademicController.addChapter);
router.patch("/chapters/:chapterId", AcademicController.updateChapter);
router.delete("/chapters/:chapterId", AcademicController.deleteChapter);
// Weekly Hours
router.patch("/:academicId/weeks/:weekId", AcademicController.updateWeekHours);
export default router;
//# sourceMappingURL=academic.routes.js.map