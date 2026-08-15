import { StreakService } from "./streak.service.js";
export class StreakController {
    // GET /api/streaks/stats
    static async getStats(req, res, next) {
        try {
            const userId = req.user.userId;
            const { monthKey } = req.query;
            const stats = await StreakService.getStreakStats(userId, monthKey);
            res.status(200).json({
                success: true,
                data: stats,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
//# sourceMappingURL=streak.controller.js.map