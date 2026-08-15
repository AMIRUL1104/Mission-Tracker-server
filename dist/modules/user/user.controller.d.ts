import type { Request, Response } from "express";
export declare const createUserController: (req: Request, res: Response) => Promise<void>;
export declare const getUsersController: (req: Request, res: Response) => Promise<void>;
export declare const getUserByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateUserController: (req: Request, res: Response) => Promise<void>;
export declare const deleteUserController: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=user.controller.d.ts.map