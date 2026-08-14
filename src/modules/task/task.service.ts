import prisma from "../../lib/prisma.js";

export class TaskService {
  // ১. নির্দিষ্ট মাসের সব টাস্ক ও তাদের DailyChecks নিয়ে আসা
  static async getTasksByMonth(userId: string, monthId: string) {
    // Check ownership of month
    const month = await prisma.month.findFirst({
      where: { id: monthId, userId },
    });
    if (!month) throw new Error("Month not found or unauthorized");

    return await prisma.task.findMany({
      where: { monthId },
      include: {
        dailyChecks: true,
      },
      orderBy: { createdAt: "asc" },
    });
  }

  // ২. নতুন Task তৈরি
  static async createTask(
    userId: string,
    data: { monthId: string; title: string; category?: string },
  ) {
    const month = await prisma.month.findFirst({
      where: { id: data.monthId, userId },
    });
    if (!month) throw new Error("Month not found or unauthorized");

    return await prisma.task.create({
      data: {
        monthId: data.monthId,
        title: data.title,
        category: data.category ?? null,
      },
      include: { dailyChecks: true },
    });
  }

  // ৩. Task ডিলিট
  static async deleteTask(userId: string, taskId: string) {
    const task = await prisma.task.findUnique({
      where: { id: taskId },
      include: { month: true },
    });

    if (!task || task.month.userId !== userId) {
      throw new Error("Task not found or unauthorized");
    }

    return await prisma.task.delete({
      where: { id: taskId },
    });
  }

  // ৪. DailyCheck Toggle (upsert ব্যবহার করে)
  static async toggleDailyCheck(
    userId: string,
    data: { taskId: string; date: string; completed: boolean },
  ) {
    const task = await prisma.task.findUnique({
      where: { id: data.taskId },
      include: { month: true },
    });

    if (!task || task.month.userId !== userId) {
      throw new Error("Task not found or unauthorized");
    }

    // Upsert: রেকর্ড থাকলে আপডেট করবে, না থাকলে নতুন তৈরি করবে
    return await prisma.dailyCheck.upsert({
      where: {
        taskId_date: {
          taskId: data.taskId,
          date: data.date,
        },
      },
      update: {
        completed: data.completed,
      },
      create: {
        taskId: data.taskId,
        date: data.date,
        completed: data.completed,
      },
    });
  }
}
