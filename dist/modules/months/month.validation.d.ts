import { z } from "zod";
export declare const createMonthSchema: z.ZodObject<{
    year: z.ZodNumber;
    month: z.ZodNumber;
}, z.core.$strip>;
export declare const getMonthQuerySchema: z.ZodObject<{
    monthKey: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=month.validation.d.ts.map