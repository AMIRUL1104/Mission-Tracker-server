import type { Request, Response } from "express";
export declare class AcademicController {
    static getAcademics(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static createAcademic(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static updateAcademic(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static deleteAcademic(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static addChapter(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static updateChapter(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static deleteChapter(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static updateWeekHours(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=academic.controller.d.ts.map