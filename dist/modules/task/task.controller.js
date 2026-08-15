import { TaskService } from "./task.service.js";
export class TaskController {
    static async getTasks(req, res) {
        try {
            const userId = req.user.userId;
            const monthId = req.params.monthId;
            const tasks = await TaskService.getTasksByMonth(userId, monthId);
            res.status(200).json({ success: true, data: tasks });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async createTask(req, res) {
        try {
            const userId = req.user.userId;
            const task = await TaskService.createTask(userId, req.body);
            res.status(201).json({ success: true, data: task });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async deleteTask(req, res) {
        try {
            const userId = req.user.userId;
            const id = req.params.id;
            await TaskService.deleteTask(userId, id);
            res
                .status(200)
                .json({ success: true, message: "Task deleted successfully" });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async toggleCheck(req, res) {
        try {
            const userId = req.user.userId;
            const { taskId, date, completed } = req.body;
            const result = await TaskService.toggleDailyCheck(userId, {
                taskId,
                date,
                completed,
            });
            res.status(200).json({ success: true, data: result });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
//# sourceMappingURL=task.controller.js.map