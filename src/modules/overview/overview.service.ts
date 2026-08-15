import prisma from "../../lib/prisma.js";

export class OverviewService {
  static async getOverviewDataFromDB(userId: string, monthId: string) {
    // ১. সিলেক্টেড Month-এর সব ডাটা ফেচ
    const monthData = await prisma.month.findFirst({
      where: {
        id: monthId,
        userId: userId,
      },
      include: {
        priorities: {
          orderBy: { position: "asc" },
          include: {
            milestones: {
              orderBy: { position: "asc" },
            },
          },
        },
        tasks: {
          orderBy: { position: "asc" },
          include: {
            dailyChecks: true,
          },
        },
        academics: {
          orderBy: { position: "asc" },
          include: {
            chapters: true,
            weeklyLogs: true,
          },
        },
        metrics: {
          orderBy: { position: "asc" },
        },
      },
    });

    // ২. ইউজার স্ট্রিক ডাটা ফেচ
    const streaks = await prisma.streak.findMany({
      where: { userId },
      orderBy: { date: "desc" },
    });

    return {
      month: monthData,
      streaks,
    };
  }
}
