import { PriorityService } from "./priority.service.js";
export class PriorityController {
    static async getPriorities(req, res, next) {
        try {
            const userId = req.user.userId;
            const monthId = req.params.monthId;
            const priorities = await PriorityService.getPrioritiesByMonth(userId, monthId);
            res.status(200).json({ success: true, data: priorities });
        }
        catch (error) {
            next(error);
        }
    }
    static async createPriority(req, res, next) {
        try {
            const userId = req.user.userId;
            const priority = await PriorityService.createPriority(userId, req.body);
            res.status(201).json({ success: true, data: priority });
        }
        catch (error) {
            next(error);
        }
    }
    static async deletePriority(req, res, next) {
        try {
            const userId = req.user.userId;
            const id = req.params.id;
            await PriorityService.deletePriority(userId, id);
            res
                .status(200)
                .json({ success: true, message: "Priority deleted successfully" });
        }
        catch (error) {
            next(error);
        }
    }
    // Milestones Controllers
    static async addMilestone(req, res, next) {
        try {
            const userId = req.user.userId;
            const priorityId = req.params.priorityId;
            const { title } = req.body;
            const milestone = await PriorityService.addMilestone(userId, priorityId, title);
            res.status(201).json({ success: true, data: milestone });
        }
        catch (error) {
            next(error);
        }
    }
    static async toggleMilestone(req, res, next) {
        try {
            const userId = req.user.userId;
            const id = req.params.id;
            const { completed } = req.body;
            const updated = await PriorityService.toggleMilestone(userId, id, completed);
            res.status(200).json({ success: true, data: updated });
        }
        catch (error) {
            next(error);
        }
    }
    static async deleteMilestone(req, res, next) {
        try {
            const userId = req.user.userId;
            const id = req.params.id;
            await PriorityService.deleteMilestone(userId, id);
            res
                .status(200)
                .json({ success: true, message: "Milestone deleted successfully" });
        }
        catch (error) {
            next(error);
        }
    }
}
//# sourceMappingURL=priority.controller.js.map