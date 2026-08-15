// Validation will be added later using Zod.
import { z } from "zod";
export const createUserSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name cannot exceed 50 characters"),
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .optional(),
    age: z.number().int().min(1).max(150).optional(),
});
export const updateUserSchema = z.object({
    name: z.string().min(2).max(50).optional(),
    email: z.string().email().optional(),
    age: z.number().int().min(1).max(150).optional(),
});
//# sourceMappingURL=user.validation.js.map