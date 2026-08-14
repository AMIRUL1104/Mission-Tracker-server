import type { Request, Response, NextFunction } from "express";
import { MonthService } from "./month.service.js";

export class MonthController {
  static async getAllMonths(req: Request, res: Response, next: NextFunction) {
    try {
      // req.user.userId ekhane correctly working
      const userId = req.user!.userId;
      const months = await MonthService.getUserMonths(userId);
      res.status(200).json({ success: true, data: months });
    } catch (error) {
      next(error);
    }
  }

  static async getSingleMonth(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.userId;
      const { year, month } = req.query;

      const currentYear = year
        ? parseInt(year as string)
        : new Date().getFullYear();
      const currentMonth = month
        ? parseInt(month as string)
        : new Date().getMonth() + 1;

      const monthData = await MonthService.getOrCreateMonth(
        userId,
        currentYear,
        currentMonth,
      );
      res.status(200).json({ success: true, data: monthData });
    } catch (error) {
      next(error);
    }
  }

  static async createMonth(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.userId;
      const { year, month } = req.body;

      const newMonth = await MonthService.createMonth(
        userId,
        Number(year),
        Number(month),
      );
      res.status(201).json({ success: true, data: newMonth });
    } catch (error) {
      next(error);
    }
  }

  static async deleteMonth(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.userId;
      const id = req.params.id as string;

      await MonthService.deleteMonth(userId, id);
      res
        .status(200)
        .json({ success: true, message: "Month deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}
