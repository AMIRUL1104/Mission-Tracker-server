import prisma from "../../lib/prisma.js";
import { StreakService } from "../streak/streak.service.js";
export class TaskService {
    // ১. নির্দিষ্ট মাসের সব টাস্ক ও তাদের DailyChecks নিয়ে আসা
    static async getTasksByMonth(userId, monthId) {
        // Check ownership of month
        const month = await prisma.month.findFirst({
            where: { id: monthId, userId },
        });
        if (!month)
            throw new Error("Month not found or unauthorized");
        return await prisma.task.findMany({
            where: { monthId },
            include: {
                dailyChecks: true,
            },
            orderBy: { createdAt: "asc" },
        });
    }
    // ২. নতুন Task তৈরি
    static async createTask(userId, data) {
        const month = await prisma.month.findFirst({
            where: { id: data.monthId, userId },
        });
        if (!month)
            throw new Error("Month not found or unauthorized");
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
    static async deleteTask(userId, taskId) {
        const task = await prisma.task.findUnique({
            where: { id: taskId },
            include: { month: true },
        });
        if (!task || task.month.userId !== userId) {
            throw new Error("Task not found or unauthorized");
        }
        const deletedTask = await prisma.task.delete({
            where: { id: taskId },
        });
        return deletedTask;
    }
    // ৪. DailyCheck Toggle (upsert ব্যবহার করে + Auto Streak Automation)
    static async toggleDailyCheck(userId, data) {
        const task = await prisma.task.findUnique({
            where: { id: data.taskId },
            include: { month: true },
        });
        if (!task || task.month.userId !== userId) {
            throw new Error("Task not found or unauthorized");
        }
        // Upsert: রেকর্ড থাকলে আপডেট করবে, না থাকলে নতুন তৈরি করবে
        const updatedCheck = await prisma.dailyCheck.upsert({
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
        // 🔄 AUTOMATION: ওই নির্দিষ্ট তারিখের সব টাস্ক কমপ্লিট হলো কিনা চেক করে স্ট্রিক সিঙ্ক করা
        await this.syncStreakAutomation(userId, task.monthId, data.date);
        return updatedCheck;
    }
    // 🤖 Helper: অটোমেটিক স্ট্রিক টগল করার মেথড
    static async syncStreakAutomation(userId, monthId, date) {
        // 해당 মাসের ইউজারের সব টাস্ক আনা
        const userTasks = await prisma.task.findMany({
            where: { monthId, month: { userId } },
            include: {
                dailyChecks: {
                    where: { date },
                },
            },
        });
        // টাস্ক না থাকলে কিছু করার প্রয়োজন নেই
        if (userTasks.length === 0)
            return;
        // চেক করা সব টাস্কের dailyCheck true আছে কিনা তা ভেরিফাই করা
        const isAllCompleted = userTasks.every((t) => {
            const check = t.dailyChecks[0];
            return check && check.completed === true;
        });
        // সব টাস্ক কমপ্লিট হলে স্ট্রিক 'true', অন্যথায় 'false'
        await StreakService.toggleStreak(userId, date, isAllCompleted);
    }
}
//# sourceMappingURL=task.service.js.map