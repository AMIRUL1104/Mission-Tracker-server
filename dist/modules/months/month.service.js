import prisma from "../../lib/prisma.js";
export class MonthService {
    // ১. ইউজারের সব মাস খুঁজে আনবে
    static async getUserMonths(userId) {
        return await prisma.month.findMany({
            where: { userId },
            orderBy: [{ year: "desc" }, { month: "desc" }],
        });
    }
    // ২. নির্দিষ্ট একটি মাস আনবে (যদি না থাকে তবে অটো ক্রিয়েট করবে)
    static async getOrCreateMonth(userId, year, month) {
        const monthKey = `${year}-${String(month).padStart(2, "0")}`;
        let monthData = await prisma.month.findUnique({
            where: {
                userId_monthKey: { userId, monthKey },
            },
        });
        if (!monthData) {
            monthData = await prisma.month.create({
                data: {
                    userId,
                    year,
                    month,
                    monthKey,
                    status: "active",
                },
            });
        }
        return monthData;
    }
    // ৩. ম্যানুয়ালি মাস তৈরি করা
    static async createMonth(userId, year, month) {
        const monthKey = `${year}-${String(month).padStart(2, "0")}`;
        return await prisma.month.create({
            data: {
                userId,
                year,
                month,
                monthKey,
                status: "active",
            },
        });
    }
    // ৪. মাস আর্কাইভ বা ডিলিট করা
    static async deleteMonth(userId, monthId) {
        return await prisma.month.deleteMany({
            where: {
                id: monthId,
                userId, // Security: ensure user owns this record
            },
        });
    }
}
//# sourceMappingURL=month.service.js.map