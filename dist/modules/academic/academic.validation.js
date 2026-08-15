import { z } from "zod";
export const createAcademicSchema = z.object({
    monthId: z.string().uuid("Invalid Month ID"),
    subject: z.string().min(1, "Subject name is required"),
    targetHours: z.number().min(0, "Target hours cannot be negative").default(0),
});
export const updateAcademicSchema = z.object({
    subject: z.string().min(1).optional(),
    targetHours: z.number().min(0).optional(),
});
export const createChapterSchema = z.object({
    title: z.string().min(1, "Chapter title is required"),
});
export const updateChapterSchema = z.object({
    title: z.string().min(1).optional(),
    isCompleted: z.boolean().optional(),
});
export const updateWeekSchema = z.object({
    hoursSpent: z.number().min(0, "Hours spent cannot be negative"),
});
//# sourceMappingURL=academic.validation.js.map