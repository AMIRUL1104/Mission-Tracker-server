import prisma from "../../lib/prisma.js";
export class StreakService {
    // ১. নির্দিষ্ট তারিখের স্ট্রিক টগল (Mark / Unmark) করা
    static async toggleStreak(userId, date, completed = true) {
        if (completed) {
            return await prisma.streak.upsert({
                where: {
                    userId_date: { userId, date },
                },
                update: { completed: true },
                create: { userId, date, completed: true },
            });
        }
        else {
            return await prisma.streak.deleteMany({
                where: { userId, date },
            });
        }
    }
    // ২. স্ট্রিকের ওভারঅল Stats এবং Monthly Streaks আনা
    static async getStreakStats(userId, monthKey) {
        const allStreaks = await prisma.streak.findMany({
            where: { userId, completed: true },
            orderBy: { date: "asc" },
        });
        const completedDates = allStreaks.map((s) => s.date);
        const totalCompletedDays = completedDates.length;
        let currentStreak = 0;
        let bestStreak = 0;
        let tempStreak = 0;
        const dateSet = new Set(completedDates);
        // Best Streak Calculation
        if (completedDates.length > 0) {
            let prevDate = null;
            for (const dateStr of completedDates) {
                const currentDate = new Date(dateStr);
                if (prevDate) {
                    const diffDays = Math.round((currentDate.getTime() - prevDate.getTime()) / (1000 * 3600 * 24));
                    if (diffDays === 1) {
                        tempStreak++;
                    }
                    else if (diffDays > 1) {
                        tempStreak = 1;
                    }
                }
                else {
                    tempStreak = 1;
                }
                if (tempStreak > bestStreak) {
                    bestStreak = tempStreak;
                }
                prevDate = currentDate;
            }
        }
        // Current Streak Calculation
        const today = new Date();
        const todayStr = today.toISOString().split("T")[0];
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split("T")[0];
        let checkDate = new Date();
        if (!dateSet.has(todayStr) && dateSet.has(yesterdayStr)) {
            checkDate = yesterday;
        }
        while (true) {
            const formatted = checkDate.toISOString().split("T")[0];
            if (dateSet.has(formatted)) {
                currentStreak++;
                checkDate.setDate(checkDate.getDate() - 1);
            }
            else {
                break;
            }
        }
        // specific month filtering for calendar view
        let monthStreaks = completedDates;
        if (monthKey) {
            monthStreaks = completedDates.filter((d) => d.startsWith(monthKey));
        }
        return {
            currentStreak,
            bestStreak,
            totalCompletedDays,
            monthStreaks,
        };
    }
}
//# sourceMappingURL=streak.service.js.map