import { z } from "zod";
export const createMonthSchema = z.object({
    year: z.number().int().min(2020).max(2100),
    month: z.number().int().min(1).max(12),
});
export const getMonthQuerySchema = z.object({
    monthKey: z
        .string()
        .regex(/^\d{4}-\d{2}$/, "Invalid monthKey format (YYYY-MM required)"),
});
//# sourceMappingURL=month.validation.js.map