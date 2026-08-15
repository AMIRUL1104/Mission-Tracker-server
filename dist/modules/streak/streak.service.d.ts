export declare class StreakService {
    static toggleStreak(userId: string, date: string, completed?: boolean): Promise<import("../../generated/prisma/internal/prismaNamespace.js").BatchPayload | {
        id: string;
        userId: string;
        date: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static getStreakStats(userId: string, monthKey?: string): Promise<{
        currentStreak: number;
        bestStreak: number;
        totalCompletedDays: number;
        monthStreaks: string[];
    }>;
}
//# sourceMappingURL=streak.service.d.ts.map