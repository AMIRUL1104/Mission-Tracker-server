export declare class AcademicService {
    static getAcademicsByMonth(userId: string, monthId: string): Promise<({
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
    })[]>;
    static createAcademic(userId: string, data: {
        monthId: string;
        subject: string;
        targetHours?: number;
    }): Promise<{
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
    }>;
    static updateAcademic(userId: string, academicId: string, data: {
        subject?: string;
        targetHours?: number;
    }): Promise<{
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
    }>;
    static deleteAcademic(userId: string, academicId: string): Promise<{
        id: string;
        monthId: string;
        subject: string;
        targetHours: number;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static addChapter(userId: string, academicId: string, title: string): Promise<{
        id: string;
        academicId: string;
        title: string;
        isCompleted: boolean;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static updateChapter(userId: string, chapterId: string, data: {
        title?: string;
        isCompleted?: boolean;
    }): Promise<{
        id: string;
        academicId: string;
        title: string;
        isCompleted: boolean;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static deleteChapter(userId: string, chapterId: string): Promise<{
        id: string;
        academicId: string;
        title: string;
        isCompleted: boolean;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static updateWeekHours(userId: string, academicId: string, weekId: string, hoursSpent: number): Promise<{
        id: string;
        academicId: string;
        weekNumber: number;
        hoursSpent: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
//# sourceMappingURL=academic.service.d.ts.map