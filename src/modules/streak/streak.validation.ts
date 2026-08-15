import { z } from "zod";

export const toggleStreakSchema = z.object({
  params: z.object({
    date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  }),
  body: z.object({
    completed: z.boolean().optional().default(true),
  }),
});

export const streakStatsQuerySchema = z.object({
  query: z.object({
    monthKey: z
      .string()
      .regex(/^\d{4}-\d{2}$/, "Month key must be in YYYY-MM format")
      .optional(),
  }),
});
