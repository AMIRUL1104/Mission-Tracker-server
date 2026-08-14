import type { Request, Response, NextFunction } from "express";
import { PriorityService } from "./priority.service.js";

export class PriorityController {
  static async getPriorities(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.userId;
      const monthId = req.params.monthId as string;
      const priorities = await PriorityService.getPrioritiesByMonth(
        userId,
        monthId,
      );
      res.status(200).json({ success: true, data: priorities });
    } catch (error) {
      next(error);
    }
  }

  static async createPriority(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.userId;
      const priority = await PriorityService.createPriority(userId, req.body);
      res.status(201).json({ success: true, data: priority });
    } catch (error) {
      next(error);
    }
  }

  static async deletePriority(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.userId;
      const id = req.params.id as string;
      await PriorityService.deletePriority(userId, id);
      res
        .status(200)
        .json({ success: true, message: "Priority deleted successfully" });
    } catch (error) {
      next(error);
    }
  }

  // Milestones Controllers
  static async addMilestone(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.userId;
      const priorityId = req.params.priorityId as string;
      const { title } = req.body;
      const milestone = await PriorityService.addMilestone(
        userId,
        priorityId,
        title,
      );
      res.status(201).json({ success: true, data: milestone });
    } catch (error) {
      next(error);
    }
  }

  static async toggleMilestone(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const userId = req.user!.userId;
      const id = req.params.id as string;
      const { completed } = req.body;
      const updated = await PriorityService.toggleMilestone(
        userId,
        id,
        completed,
      );
      res.status(200).json({ success: true, data: updated });
    } catch (error) {
      next(error);
    }
  }

  static async deleteMilestone(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const userId = req.user!.userId;
      const id = req.params.id as string;
      await PriorityService.deleteMilestone(userId, id);
      res
        .status(200)
        .json({ success: true, message: "Milestone deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}
