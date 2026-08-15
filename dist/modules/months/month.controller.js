import { MonthService } from "./month.service.js";
export class MonthController {
    static async getAllMonths(req, res, next) {
        try {
            // req.user.userId ekhane correctly working
            const userId = req.user.userId;
            const months = await MonthService.getUserMonths(userId);
            res.status(200).json({ success: true, data: months });
        }
        catch (error) {
            next(error);
        }
    }
    static async getSingleMonth(req, res, next) {
        try {
            const userId = req.user.userId;
            const { year, month } = req.query;
            const currentYear = year
                ? parseInt(year)
                : new Date().getFullYear();
            const currentMonth = month
                ? parseInt(month)
                : new Date().getMonth() + 1;
            const monthData = await MonthService.getOrCreateMonth(userId, currentYear, currentMonth);
            res.status(200).json({ success: true, data: monthData });
        }
        catch (error) {
            next(error);
        }
    }
    static async createMonth(req, res, next) {
        try {
            const userId = req.user.userId;
            const { year, month } = req.body;
            const newMonth = await MonthService.createMonth(userId, Number(year), Number(month));
            res.status(201).json({ success: true, data: newMonth });
        }
        catch (error) {
            next(error);
        }
    }
    static async deleteMonth(req, res, next) {
        try {
            const userId = req.user.userId;
            const id = req.params.id;
            await MonthService.deleteMonth(userId, id);
            res
                .status(200)
                .json({ success: true, message: "Month deleted successfully" });
        }
        catch (error) {
            next(error);
        }
    }
}
//# sourceMappingURL=month.controller.js.map