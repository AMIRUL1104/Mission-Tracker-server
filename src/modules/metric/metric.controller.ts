import type { Request, Response, NextFunction } from "express";
import { MetricService } from "./metric.service.js";

export class MetricController {
  static async getMetricsByMonth(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const userId = req.user!.userId;
      const monthId = req.params.monthId as string;

      const metrics = await MetricService.getMetricsByMonth(userId, monthId);
      res.status(200).json({ success: true, data: metrics });
    } catch (error) {
      next(error);
    }
  }

  static async createMetric(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.userId;
      const { monthId, name, value, target, unit, position } = req.body;

      // Dynamically build payload to satisfy TS exactOptionalPropertyTypes
      const payload: Parameters<typeof MetricService.createMetric>[1] = {
        monthId: monthId as string,
        name: name as string,
      };

      if (value !== undefined) payload.value = Number(value);
      if (target !== undefined) payload.target = Number(target);
      if (unit !== undefined) payload.unit = unit as string;
      if (position !== undefined) payload.position = Number(position);

      const newMetric = await MetricService.createMetric(userId, payload);

      res.status(201).json({ success: true, data: newMetric });
    } catch (error) {
      next(error);
    }
  }

  static async updateMetric(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.userId;
      const id = req.params.id as string;
      const { name, value, target, unit, position } = req.body;

      const payload: Parameters<typeof MetricService.updateMetric>[2] = {};

      if (name !== undefined) payload.name = name as string;
      if (value !== undefined) payload.value = Number(value);
      if (target !== undefined) payload.target = Number(target);
      if (unit !== undefined) payload.unit = unit as string;
      if (position !== undefined) payload.position = Number(position);

      const updatedMetric = await MetricService.updateMetric(
        userId,
        id,
        payload,
      );

      res.status(200).json({ success: true, data: updatedMetric });
    } catch (error) {
      next(error);
    }
  }

  static async deleteMetric(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.userId;
      const id = req.params.id as string;

      await MetricService.deleteMetric(userId, id);
      res
        .status(200)
        .json({ success: true, message: "Metric deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}
