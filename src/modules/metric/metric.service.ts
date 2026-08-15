import prisma from "../../lib/prisma.js";

export class MetricService {
  // Get all metrics for a specific month belonging to the authenticated user
  static async getMetricsByMonth(userId: string, monthId: string) {
    // Optional safeguard: verify the month belongs to the user
    const month = await prisma.month.findFirst({
      where: { id: monthId, userId },
    });

    if (!month) {
      throw new Error("Month not found or unauthorized access");
    }

    return await prisma.successMetric.findMany({
      where: { monthId },
      orderBy: { position: "asc" },
    });
  }

  // Create a new metric
  static async createMetric(
    userId: string,
    data: {
      monthId: string;
      name: string;
      value?: number;
      target?: number;
      unit?: string;
      position?: number;
    },
  ) {
    const month = await prisma.month.findFirst({
      where: { id: data.monthId, userId },
    });

    if (!month) {
      throw new Error("Month not found or unauthorized access");
    }

    return await prisma.successMetric.create({
      data: {
        monthId: data.monthId,
        name: data.name,
        value: data.value ?? 0,
        target: data.target ?? 0,
        unit: data.unit ?? null,
        position: data.position ?? 0,
      },
    });
  }

  // Update a metric
  static async updateMetric(
    userId: string,
    metricId: string,
    data: {
      name?: string;
      value?: number;
      target?: number;
      unit?: string;
      position?: number;
    },
  ) {
    // Verify ownership via month relation
    const metric = await prisma.successMetric.findFirst({
      where: {
        id: metricId,
        month: { userId },
      },
    });

    if (!metric) {
      throw new Error("Metric not found or unauthorized access");
    }

    return await prisma.successMetric.update({
      where: { id: metricId },
      data: {
        ...(data.name !== undefined && { name: data.name }),
        ...(data.value !== undefined && { value: Number(data.value) }),
        ...(data.target !== undefined && { target: Number(data.target) }),
        ...(data.unit !== undefined && { unit: data.unit }),
        ...(data.position !== undefined && { position: Number(data.position) }),
      },
    });
  }

  // Delete a metric
  static async deleteMetric(userId: string, metricId: string) {
    const metric = await prisma.successMetric.findFirst({
      where: {
        id: metricId,
        month: { userId },
      },
    });

    if (!metric) {
      throw new Error("Metric not found or unauthorized access");
    }

    return await prisma.successMetric.delete({
      where: { id: metricId },
    });
  }
}
