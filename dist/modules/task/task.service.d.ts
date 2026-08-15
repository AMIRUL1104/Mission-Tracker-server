export declare class TaskService {
    static getTasksByMonth(userId: string, monthId: string): Promise<({
        dailyChecks: {
            id: string;
            taskId: string;
            date: string;
            completed: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        monthId: string;
        title: string;
        category: string | null;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    static createTask(userId: string, data: {
        monthId: string;
        title: string;
        category?: string;
    }): Promise<{
        dailyChecks: {
            id: string;
            taskId: string;
            date: string;
            completed: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        monthId: string;
        title: string;
        category: string | null;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static deleteTask(userId: string, taskId: string): Promise<{
        id: string;
        monthId: string;
        title: string;
        category: string | null;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static toggleDailyCheck(userId: string, data: {
        taskId: string;
        date: string;
        completed: boolean;
    }): Promise<{
        id: string;
        taskId: string;
        date: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    private static syncStreakAutomation;
}
//# sourceMappingURL=task.service.d.ts.map