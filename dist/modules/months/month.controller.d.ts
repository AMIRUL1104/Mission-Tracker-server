import type { Request, Response, NextFunction } from "express";
export declare class MonthController {
    static getAllMonths(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getSingleMonth(req: Request, res: Response, next: NextFunction): Promise<void>;
    static createMonth(req: Request, res: Response, next: NextFunction): Promise<void>;
    static deleteMonth(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=month.controller.d.ts.map