import prisma from "../../lib/prisma.js";

export class AcademicService {
  // Get all academics for a specific month
  static async getAcademicsByMonth(userId: string, monthId: string) {
    // Verify month belongs to user
    const monthExists = await prisma.month.findFirst({
      where: { id: monthId, userId },
    });

    if (!monthExists) {
      throw new Error("Month not found or unauthorized");
    }

    return await prisma.academic.findMany({
      where: { monthId },
      include: {
        chapters: {
          orderBy: { createdAt: "asc" },
        },
        weeklyLogs: {
          orderBy: { weekNumber: "asc" },
        },
      },
      orderBy: { createdAt: "asc" },
    });
  }

  // Create subject & auto-create 4 weeks
  static async createAcademic(
    userId: string,
    data: { monthId: string; subject: string; targetHours?: number },
  ) {
    const monthExists = await prisma.month.findFirst({
      where: { id: data.monthId, userId },
    });

    if (!monthExists) {
      throw new Error("Month not found or unauthorized");
    }

    return await prisma.academic.create({
      data: {
        monthId: data.monthId,
        subject: data.subject,
        targetHours: data.targetHours || 0,
        weeklyLogs: {
          create: [
            { weekNumber: 1, hoursSpent: 0 },
            { weekNumber: 2, hoursSpent: 0 },
            { weekNumber: 3, hoursSpent: 0 },
            { weekNumber: 4, hoursSpent: 0 },
          ],
        },
      },
      include: {
        chapters: true,
        weeklyLogs: {
          orderBy: { weekNumber: "asc" },
        },
      },
    });
  }

  // Update subject details
  static async updateAcademic(
    userId: string,
    academicId: string,
    data: { subject?: string; targetHours?: number },
  ) {
    const academic = await prisma.academic.findFirst({
      where: { id: academicId, month: { userId } },
    });

    if (!academic) {
      throw new Error("Academic subject not found or unauthorized");
    }

    return await prisma.academic.update({
      where: { id: academicId },
      data,
      include: {
        chapters: true,
        weeklyLogs: { orderBy: { weekNumber: "asc" } },
      },
    });
  }

  // Delete subject
  static async deleteAcademic(userId: string, academicId: string) {
    const academic = await prisma.academic.findFirst({
      where: { id: academicId, month: { userId } },
    });

    if (!academic) {
      throw new Error("Academic subject not found or unauthorized");
    }

    return await prisma.academic.delete({
      where: { id: academicId },
    });
  }

  // Chapter: Add chapter
  static async addChapter(userId: string, academicId: string, title: string) {
    const academic = await prisma.academic.findFirst({
      where: { id: academicId, month: { userId } },
    });

    if (!academic) {
      throw new Error("Academic subject not found or unauthorized");
    }

    return await prisma.academicChapter.create({
      data: {
        academicId,
        title,
      },
    });
  }

  // Chapter: Update / Toggle chapter
  static async updateChapter(
    userId: string,
    chapterId: string,
    data: { title?: string; isCompleted?: boolean },
  ) {
    const chapter = await prisma.academicChapter.findFirst({
      where: { id: chapterId, academic: { month: { userId } } },
    });

    if (!chapter) {
      throw new Error("Chapter not found or unauthorized");
    }

    return await prisma.academicChapter.update({
      where: { id: chapterId },
      data,
    });
  }

  // Chapter: Delete chapter
  static async deleteChapter(userId: string, chapterId: string) {
    const chapter = await prisma.academicChapter.findFirst({
      where: { id: chapterId, academic: { month: { userId } } },
    });

    if (!chapter) {
      throw new Error("Chapter not found or unauthorized");
    }

    return await prisma.academicChapter.delete({
      where: { id: chapterId },
    });
  }

  // Weekly Hours: Update week hours
  static async updateWeekHours(
    userId: string,
    academicId: string,
    weekId: string,
    hoursSpent: number,
  ) {
    const week = await prisma.academicWeek.findFirst({
      where: { id: weekId, academicId, academic: { month: { userId } } },
    });

    if (!week) {
      throw new Error("Weekly log record not found or unauthorized");
    }

    return await prisma.academicWeek.update({
      where: { id: weekId },
      data: { hoursSpent },
    });
  }
}
