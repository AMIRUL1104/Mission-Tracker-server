import type { Request, Response, NextFunction } from "express";
export declare class PriorityController {
    static getPriorities(req: Request, res: Response, next: NextFunction): Promise<void>;
    static createPriority(req: Request, res: Response, next: NextFunction): Promise<void>;
    static deletePriority(req: Request, res: Response, next: NextFunction): Promise<void>;
    static addMilestone(req: Request, res: Response, next: NextFunction): Promise<void>;
    static toggleMilestone(req: Request, res: Response, next: NextFunction): Promise<void>;
    static deleteMilestone(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=priority.controller.d.ts.map