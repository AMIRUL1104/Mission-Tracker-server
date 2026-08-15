import type { Request, Response } from "express";
import { AcademicService } from "./academic.service.js";
import {
  createAcademicSchema,
  updateAcademicSchema,
  createChapterSchema,
  updateChapterSchema,
  updateWeekSchema,
} from "./academic.validation.js";

export class AcademicController {
  static async getAcademics(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const monthId = req.params.monthId as string;

      const academics = await AcademicService.getAcademicsByMonth(
        userId,
        monthId,
      );
      return res.status(200).json({ success: true, data: academics });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async createAcademic(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const validated = createAcademicSchema.parse(req.body);

      const academic = await AcademicService.createAcademic(userId, validated);
      return res.status(201).json({ success: true, data: academic });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateAcademic(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const id = req.params.id as string;
      const validated = updateAcademicSchema.parse(req.body) as {
        subject?: string;
        targetHours?: number;
      };

      const updated = await AcademicService.updateAcademic(
        userId,
        id,
        validated,
      );
      return res.status(200).json({ success: true, data: updated });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async deleteAcademic(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const { id } = req.params as { id: string };

      await AcademicService.deleteAcademic(userId, id);
      return res.status(200).json({
        success: true,
        message: "Academic subject deleted successfully",
      });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async addChapter(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const academicId = req.params.academicId as string;
      const validated = createChapterSchema.parse(req.body);

      const chapter = await AcademicService.addChapter(
        userId,
        academicId,
        validated.title,
      );
      return res.status(201).json({ success: true, data: chapter });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateChapter(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const chapterId = req.params.chapterId as string;
      const validated = updateChapterSchema.parse(req.body) as {
        title?: string;
        isCompleted?: boolean;
      };

      const chapter = await AcademicService.updateChapter(
        userId,
        chapterId,
        validated,
      );
      return res.status(200).json({ success: true, data: chapter });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async deleteChapter(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const chapterId = req.params.chapterId as string;

      await AcademicService.deleteChapter(userId, chapterId);
      return res
        .status(200)
        .json({ success: true, message: "Chapter deleted successfully" });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateWeekHours(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const { academicId, weekId } = req.params as {
        academicId: string;
        weekId: string;
      };
      const validated = updateWeekSchema.parse(req.body);

      const updatedWeek = await AcademicService.updateWeekHours(
        userId,
        academicId,
        weekId,
        validated.hoursSpent,
      );
      return res.status(200).json({ success: true, data: updatedWeek });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }
}
