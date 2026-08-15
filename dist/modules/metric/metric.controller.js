import { MetricService } from "./metric.service.js";
export class MetricController {
    static async getMetricsByMonth(req, res, next) {
        try {
            const userId = req.user.userId;
            const monthId = req.params.monthId;
            const metrics = await MetricService.getMetricsByMonth(userId, monthId);
            res.status(200).json({ success: true, data: metrics });
        }
        catch (error) {
            next(error);
        }
    }
    static async createMetric(req, res, next) {
        try {
            const userId = req.user.userId;
            const { monthId, name, value, target, unit, position } = req.body;
            // Dynamically build payload to satisfy TS exactOptionalPropertyTypes
            const payload = {
                monthId: monthId,
                name: name,
            };
            if (value !== undefined)
                payload.value = Number(value);
            if (target !== undefined)
                payload.target = Number(target);
            if (unit !== undefined)
                payload.unit = unit;
            if (position !== undefined)
                payload.position = Number(position);
            const newMetric = await MetricService.createMetric(userId, payload);
            res.status(201).json({ success: true, data: newMetric });
        }
        catch (error) {
            next(error);
        }
    }
    static async updateMetric(req, res, next) {
        try {
            const userId = req.user.userId;
            const id = req.params.id;
            const { name, value, target, unit, position } = req.body;
            const payload = {};
            if (name !== undefined)
                payload.name = name;
            if (value !== undefined)
                payload.value = Number(value);
            if (target !== undefined)
                payload.target = Number(target);
            if (unit !== undefined)
                payload.unit = unit;
            if (position !== undefined)
                payload.position = Number(position);
            const updatedMetric = await MetricService.updateMetric(userId, id, payload);
            res.status(200).json({ success: true, data: updatedMetric });
        }
        catch (error) {
            next(error);
        }
    }
    static async deleteMetric(req, res, next) {
        try {
            const userId = req.user.userId;
            const id = req.params.id;
            await MetricService.deleteMetric(userId, id);
            res
                .status(200)
                .json({ success: true, message: "Metric deleted successfully" });
        }
        catch (error) {
            next(error);
        }
    }
}
//# sourceMappingURL=metric.controller.js.map