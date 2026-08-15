import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: 'User';
    readonly Month: 'Month';
    readonly Priority: 'Priority';
    readonly Milestone: 'Milestone';
    readonly Task: 'Task';
    readonly DailyCheck: 'DailyCheck';
    readonly Streak: 'Streak';
    readonly Academic: 'Academic';
    readonly AcademicChapter: 'AcademicChapter';
    readonly AcademicWeek: 'AcademicWeek';
    readonly SuccessMetric: 'SuccessMetric';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly email: 'email';
    readonly password: 'password';
    readonly age: 'age';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const MonthScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly monthKey: 'monthKey';
    readonly year: 'year';
    readonly month: 'month';
    readonly status: 'status';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type MonthScalarFieldEnum = (typeof MonthScalarFieldEnum)[keyof typeof MonthScalarFieldEnum];
export declare const PriorityScalarFieldEnum: {
    readonly id: 'id';
    readonly monthId: 'monthId';
    readonly title: 'title';
    readonly description: 'description';
    readonly target: 'target';
    readonly progress: 'progress';
    readonly position: 'position';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type PriorityScalarFieldEnum = (typeof PriorityScalarFieldEnum)[keyof typeof PriorityScalarFieldEnum];
export declare const MilestoneScalarFieldEnum: {
    readonly id: 'id';
    readonly priorityId: 'priorityId';
    readonly title: 'title';
    readonly completed: 'completed';
    readonly position: 'position';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum];
export declare const TaskScalarFieldEnum: {
    readonly id: 'id';
    readonly monthId: 'monthId';
    readonly title: 'title';
    readonly category: 'category';
    readonly position: 'position';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];
export declare const DailyCheckScalarFieldEnum: {
    readonly id: 'id';
    readonly taskId: 'taskId';
    readonly date: 'date';
    readonly completed: 'completed';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type DailyCheckScalarFieldEnum = (typeof DailyCheckScalarFieldEnum)[keyof typeof DailyCheckScalarFieldEnum];
export declare const StreakScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly date: 'date';
    readonly completed: 'completed';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type StreakScalarFieldEnum = (typeof StreakScalarFieldEnum)[keyof typeof StreakScalarFieldEnum];
export declare const AcademicScalarFieldEnum: {
    readonly id: 'id';
    readonly monthId: 'monthId';
    readonly subject: 'subject';
    readonly targetHours: 'targetHours';
    readonly position: 'position';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type AcademicScalarFieldEnum = (typeof AcademicScalarFieldEnum)[keyof typeof AcademicScalarFieldEnum];
export declare const AcademicChapterScalarFieldEnum: {
    readonly id: 'id';
    readonly academicId: 'academicId';
    readonly title: 'title';
    readonly isCompleted: 'isCompleted';
    readonly position: 'position';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type AcademicChapterScalarFieldEnum = (typeof AcademicChapterScalarFieldEnum)[keyof typeof AcademicChapterScalarFieldEnum];
export declare const AcademicWeekScalarFieldEnum: {
    readonly id: 'id';
    readonly academicId: 'academicId';
    readonly weekNumber: 'weekNumber';
    readonly hoursSpent: 'hoursSpent';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type AcademicWeekScalarFieldEnum = (typeof AcademicWeekScalarFieldEnum)[keyof typeof AcademicWeekScalarFieldEnum];
export declare const SuccessMetricScalarFieldEnum: {
    readonly id: 'id';
    readonly monthId: 'monthId';
    readonly name: 'name';
    readonly value: 'value';
    readonly target: 'target';
    readonly unit: 'unit';
    readonly position: 'position';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type SuccessMetricScalarFieldEnum = (typeof SuccessMetricScalarFieldEnum)[keyof typeof SuccessMetricScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map