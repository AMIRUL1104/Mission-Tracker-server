import { AcademicService } from "./academic.service.js";
import { createAcademicSchema, updateAcademicSchema, createChapterSchema, updateChapterSchema, updateWeekSchema, } from "./academic.validation.js";
export class AcademicController {
    static async getAcademics(req, res) {
        try {
            const userId = req.user.id;
            const monthId = req.params.monthId;
            const academics = await AcademicService.getAcademicsByMonth(userId, monthId);
            return res.status(200).json({ success: true, data: academics });
        }
        catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }
    static async createAcademic(req, res) {
        try {
            const userId = req.user.id;
            const validated = createAcademicSchema.parse(req.body);
            const academic = await AcademicService.createAcademic(userId, validated);
            return res.status(201).json({ success: true, data: academic });
        }
        catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }
    static async updateAcademic(req, res) {
        try {
            const userId = req.user.id;
            const id = req.params.id;
            const validated = updateAcademicSchema.parse(req.body);
            const updated = await AcademicService.updateAcademic(userId, id, validated);
            return res.status(200).json({ success: true, data: updated });
        }
        catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }
    static async deleteAcademic(req, res) {
        try {
            const userId = req.user.id;
            const { id } = req.params;
            await AcademicService.deleteAcademic(userId, id);
            return res.status(200).json({
                success: true,
                message: "Academic subject deleted successfully",
            });
        }
        catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }
    static async addChapter(req, res) {
        try {
            const userId = req.user.id;
            const academicId = req.params.academicId;
            const validated = createChapterSchema.parse(req.body);
            const chapter = await AcademicService.addChapter(userId, academicId, validated.title);
            return res.status(201).json({ success: true, data: chapter });
        }
        catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }
    static async updateChapter(req, res) {
        try {
            const userId = req.user.id;
            const chapterId = req.params.chapterId;
            const validated = updateChapterSchema.parse(req.body);
            const chapter = await AcademicService.updateChapter(userId, chapterId, validated);
            return res.status(200).json({ success: true, data: chapter });
        }
        catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }
    static async deleteChapter(req, res) {
        try {
            const userId = req.user.id;
            const chapterId = req.params.chapterId;
            await AcademicService.deleteChapter(userId, chapterId);
            return res
                .status(200)
                .json({ success: true, message: "Chapter deleted successfully" });
        }
        catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }
    static async updateWeekHours(req, res) {
        try {
            const userId = req.user.id;
            const { academicId, weekId } = req.params;
            const validated = updateWeekSchema.parse(req.body);
            const updatedWeek = await AcademicService.updateWeekHours(userId, academicId, weekId, validated.hoursSpent);
            return res.status(200).json({ success: true, data: updatedWeek });
        }
        catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }
}
//# sourceMappingURL=academic.controller.js.map