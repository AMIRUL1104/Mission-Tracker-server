import type { Request, Response, NextFunction } from "express";
import { StreakService } from "./streak.service.js";

export class StreakController {
  // GET /api/streaks/stats
  static async getStats(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.userId;
      const { monthKey } = req.query as { monthKey?: string };

      const stats = await StreakService.getStreakStats(userId, monthKey);

      res.status(200).json({
        success: true,
        data: stats,
      });
    } catch (error) {
      next(error);
    }
  }

  // // DELETE /api/streaks
  // static async resetStreaks(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const userId = req.user!.userId;

  //     // await StreakService.resetStreaks(userId);

  //     res.status(200).json({
  //       success: true,
  //       message: "All streak data reset successfully",
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}
