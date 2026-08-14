import prisma from "../../lib/prisma.js";

export class PriorityService {
  // ১. নির্দিষ্ট মাসের সব Priorities ও Milestones নিয়ে আসা
  static async getPrioritiesByMonth(userId: string, monthId: string) {
    return await prisma.priority.findMany({
      where: {
        monthId,
        month: { userId }, // Security: User ownership verification
      },
      include: {
        milestones: {
          orderBy: { createdAt: "asc" },
        },
      },
      orderBy: { createdAt: "asc" },
    });
  }

  // ২. নতুন Priority তৈরি করা
  static async createPriority(
    userId: string,
    data: { monthId: string; title: string; description?: string },
  ) {
    // Check if month belongs to the user
    const month = await prisma.month.findFirst({
      where: { id: data.monthId, userId },
    });

    if (!month) throw new Error("Month not found or unauthorized");

    return await prisma.priority.create({
      data: {
        monthId: data.monthId,
        title: data.title,
        // description undefined হলে null পাস হবে, যা Prisma সহজে গ্রহণ করে
        description: data.description ?? null,
      },
      include: { milestones: true },
    });
  }

  // ৩. Priority আপডেট করা
  static async updatePriority(
    userId: string,
    priorityId: string,
    data: { title?: string; description?: string },
  ) {
    return await prisma.priority.updateMany({
      where: {
        id: priorityId,
        month: { userId },
      },
      data,
    });
  }

  // ৪. Priority ডিলিট করা
  static async deletePriority(userId: string, priorityId: string) {
    return await prisma.priority.deleteMany({
      where: {
        id: priorityId,
        month: { userId },
      },
    });
  }

  // ---------------- MILESTONE LOGIC ----------------

  // ৫. Milestone যোগ করা
  static async addMilestone(userId: string, priorityId: string, title: string) {
    // Ownership check
    const priority = await prisma.priority.findFirst({
      where: { id: priorityId, month: { userId } },
    });

    if (!priority) throw new Error("Priority not found or unauthorized");

    const newMilestone = await prisma.milestone.create({
      data: { priorityId, title },
    });

    // Milestone যোগ করার পর Priority Progress রিক্যালকুলেট করা
    await this.recalculateProgress(priorityId);

    return newMilestone;
  }

  // ৬. Milestone Toggle (Check/Uncheck) করা
  static async toggleMilestone(
    userId: string,
    milestoneId: string,
    completed: boolean,
  ) {
    const milestone = await prisma.milestone.findFirst({
      where: { id: milestoneId, priority: { month: { userId } } },
    });

    if (!milestone) throw new Error("Milestone not found or unauthorized");

    const updated = await prisma.milestone.update({
      where: { id: milestoneId },
      data: { completed },
    });

    // Toggle করার পর Progress রিক্যালকুলেট করা
    await this.recalculateProgress(milestone.priorityId);

    return updated;
  }

  // ৭. Milestone ডিলিট করা
  static async deleteMilestone(userId: string, milestoneId: string) {
    const milestone = await prisma.milestone.findFirst({
      where: { id: milestoneId, priority: { month: { userId } } },
    });

    if (!milestone) throw new Error("Milestone not found or unauthorized");

    await prisma.milestone.delete({ where: { id: milestoneId } });

    // Progress রিক্যালকুলেট করা
    await this.recalculateProgress(milestone.priorityId);

    return true;
  }

  // 🔄 Helper Function: Progress (%) অটো ক্যালকুলেট করার জন্য
  private static async recalculateProgress(priorityId: string) {
    const milestones = await prisma.milestone.findMany({
      where: { priorityId },
    });

    if (milestones.length === 0) {
      await prisma.priority.update({
        where: { id: priorityId },
        data: { progress: 0 },
      });
      return;
    }

    const completedCount = milestones.filter((m) => m.completed).length;
    const progressPercentage = Math.round(
      (completedCount / milestones.length) * 100,
    );

    await prisma.priority.update({
      where: { id: priorityId },
      data: { progress: progressPercentage },
    });
  }
}
