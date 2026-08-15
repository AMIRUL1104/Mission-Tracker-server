export declare class MetricService {
    static getMetricsByMonth(userId: string, monthId: string): Promise<{
        id: string;
        monthId: string;
        name: string;
        value: number;
        target: number;
        unit: string | null;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    static createMetric(userId: string, data: {
        monthId: string;
        name: string;
        value?: number;
        target?: number;
        unit?: string;
        position?: number;
    }): Promise<{
        id: string;
        monthId: string;
        name: string;
        value: number;
        target: number;
        unit: string | null;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static updateMetric(userId: string, metricId: string, data: {
        name?: string;
        value?: number;
        target?: number;
        unit?: string;
        position?: number;
    }): Promise<{
        id: string;
        monthId: string;
        name: string;
        value: number;
        target: number;
        unit: string | null;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static deleteMetric(userId: string, metricId: string): Promise<{
        id: string;
        monthId: string;
        name: string;
        value: number;
        target: number;
        unit: string | null;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
//# sourceMappingURL=metric.service.d.ts.map