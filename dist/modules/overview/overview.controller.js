import { OverviewService } from "./overview.service.js";
export class OverviewController {
    // GET /api/overview/:monthId
    static async getOverview(req, res, next) {
        try {
            // TypeScript Type-safety standard alignment
            const userId = req.user.userId;
            const monthId = req.params.monthId;
            if (!monthId) {
                return res.status(400).json({
                    success: false,
                    message: "Month ID is required",
                });
            }
            const result = await OverviewService.getOverviewDataFromDB(userId, monthId);
            if (!result.month) {
                return res.status(404).json({
                    success: false,
                    message: "Month data not found for this user",
                });
            }
            return res.status(200).json({
                success: true,
                message: "Overview data retrieved successfully",
                data: result,
            });
        }
        catch (error) {
            // Direct pass to Global Error Middleware
            next(error);
        }
    }
}
//# sourceMappingURL=overview.controller.js.map