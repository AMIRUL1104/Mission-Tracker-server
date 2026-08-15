import type { RegisterInput, LoginInput } from "./auth.validation.js";
export declare const registerUser: (data: RegisterInput) => Promise<{
    id: string;
    name: string;
    email: string;
    age: number | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const loginUser: (data: LoginInput) => Promise<{
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
        age: number | null;
    };
}>;
//# sourceMappingURL=auth.service.d.ts.map