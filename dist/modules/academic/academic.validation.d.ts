import { z } from "zod";
export declare const createAcademicSchema: z.ZodObject<{
    monthId: z.ZodString;
    subject: z.ZodString;
    targetHours: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateAcademicSchema: z.ZodObject<{
    subject: z.ZodOptional<z.ZodString>;
    targetHours: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const createChapterSchema: z.ZodObject<{
    title: z.ZodString;
}, z.core.$strip>;
export declare const updateChapterSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    isCompleted: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateWeekSchema: z.ZodObject<{
    hoursSpent: z.ZodNumber;
}, z.core.$strip>;
//# sourceMappingURL=academic.validation.d.ts.map