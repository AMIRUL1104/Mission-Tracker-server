import type { Request, Response } from "express";
export declare class TaskController {
    static getTasks(req: Request, res: Response): Promise<void>;
    static createTask(req: Request, res: Response): Promise<void>;
    static deleteTask(req: Request, res: Response): Promise<void>;
    static toggleCheck(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=task.controller.d.ts.map