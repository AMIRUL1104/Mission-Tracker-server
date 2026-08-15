import { z } from "zod";
export const registerSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name cannot exceed 50 characters"),
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(100, "Password cannot exceed 100 characters"),
    age: z
        .number()
        .int("Age must be an integer")
        .min(1, "Age must be at least 1")
        .max(150, "Invalid age")
        .optional(),
});
export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
});
//# sourceMappingURL=auth.validation.js.map