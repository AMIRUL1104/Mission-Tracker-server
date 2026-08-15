export declare class MonthService {
    static getUserMonths(userId: string): Promise<{
        id: string;
        userId: string;
        monthKey: string;
        year: number;
        month: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    static getOrCreateMonth(userId: string, year: number, month: number): Promise<{
        id: string;
        userId: string;
        monthKey: string;
        year: number;
        month: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static createMonth(userId: string, year: number, month: number): Promise<{
        id: string;
        userId: string;
        monthKey: string;
        year: number;
        month: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static deleteMonth(userId: string, monthId: string): Promise<import("../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
}
//# sourceMappingURL=month.service.d.ts.map