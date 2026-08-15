import type { Request, Response, NextFunction } from "express";
export declare class MetricController {
    static getMetricsByMonth(req: Request, res: Response, next: NextFunction): Promise<void>;
    static createMetric(req: Request, res: Response, next: NextFunction): Promise<void>;
    static updateMetric(req: Request, res: Response, next: NextFunction): Promise<void>;
    static deleteMetric(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=metric.controller.d.ts.map