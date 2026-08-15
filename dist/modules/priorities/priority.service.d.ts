export declare class PriorityService {
    static getPrioritiesByMonth(userId: string, monthId: string): Promise<({
        milestones: {
            id: string;
            priorityId: string;
            title: string;
            completed: boolean;
            position: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        monthId: string;
        title: string;
        description: string | null;
        target: number;
        progress: number;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    static createPriority(userId: string, data: {
        monthId: string;
        title: string;
        description?: string;
    }): Promise<{
        milestones: {
            id: string;
            priorityId: string;
            title: string;
            completed: boolean;
            position: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        monthId: string;
        title: string;
        description: string | null;
        target: number;
        progress: number;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static updatePriority(userId: string, priorityId: string, data: {
        title?: string;
        description?: string;
    }): Promise<import("../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
    static deletePriority(userId: string, priorityId: string): Promise<import("../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
    static addMilestone(userId: string, priorityId: string, title: string): Promise<{
        id: string;
        priorityId: string;
        title: string;
        completed: boolean;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static toggleMilestone(userId: string, milestoneId: string, completed: boolean): Promise<{
        id: string;
        priorityId: string;
        title: string;
        completed: boolean;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static deleteMilestone(userId: string, milestoneId: string): Promise<boolean>;
    private static recalculateProgress;
}
//# sourceMappingURL=priority.service.d.ts.map