export declare class OverviewService {
    static getOverviewDataFromDB(userId: string, monthId: string): Promise<{
        month: ({
            academics: ({
                chapters: {
                    id: string;
                    academicId: string;
                    title: string;
                    isCompleted: boolean;
                    position: number;
                    createdAt: Date;
                    updatedAt: Date;
                }[];
                weeklyLogs: {
                    id: string;
                    academicId: string;
                    weekNumber: number;
                    hoursSpent: number;
                    createdAt: Date;
                    updatedAt: Date;
                }[];
            } & {
                id: string;
                monthId: string;
                subject: string;
                targetHours: number;
                position: number;
                createdAt: Date;
                updatedAt: Date;
            })[];
            metrics: {
                id: string;
                monthId: string;
                name: string;
                value: number;
                target: number;
                unit: string | null;
                position: number;
                createdAt: Date;
                updatedAt: Date;
            }[];
            priorities: ({
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
            })[];
            tasks: ({
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
            })[];
        } & {
            id: string;
            userId: string;
            monthKey: string;
            year: number;
            month: number;
            status: string;
            createdAt: Date;
            updatedAt: Date;
        }) | null;
        streaks: {
            id: string;
            userId: string;
            date: string;
            completed: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
}
//# sourceMappingURL=overview.service.d.ts.map