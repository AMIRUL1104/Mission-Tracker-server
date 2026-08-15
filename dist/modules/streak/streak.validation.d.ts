import { z } from "zod";
export declare const toggleStreakSchema: z.ZodObject<{
    params: z.ZodObject<{
        date: z.ZodString;
    }, z.core.$strip>;
    body: z.ZodObject<{
        completed: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const streakStatsQuerySchema: z.ZodObject<{
    query: z.ZodObject<{
        monthKey: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=streak.validation.d.ts.map