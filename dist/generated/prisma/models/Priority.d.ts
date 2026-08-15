import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Priority
 *
 */
export type PriorityModel = runtime.Types.Result.DefaultSelection<Prisma.$PriorityPayload>;
export type AggregatePriority = {
    _count: PriorityCountAggregateOutputType | null;
    _avg: PriorityAvgAggregateOutputType | null;
    _sum: PrioritySumAggregateOutputType | null;
    _min: PriorityMinAggregateOutputType | null;
    _max: PriorityMaxAggregateOutputType | null;
};
export type PriorityAvgAggregateOutputType = {
    target: number | null;
    progress: number | null;
    position: number | null;
};
export type PrioritySumAggregateOutputType = {
    target: number | null;
    progress: number | null;
    position: number | null;
};
export type PriorityMinAggregateOutputType = {
    id: string | null;
    monthId: string | null;
    title: string | null;
    description: string | null;
    target: number | null;
    progress: number | null;
    position: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PriorityMaxAggregateOutputType = {
    id: string | null;
    monthId: string | null;
    title: string | null;
    description: string | null;
    target: number | null;
    progress: number | null;
    position: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PriorityCountAggregateOutputType = {
    id: number;
    monthId: number;
    title: number;
    description: number;
    target: number;
    progress: number;
    position: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PriorityAvgAggregateInputType = {
    target?: true;
    progress?: true;
    position?: true;
};
export type PrioritySumAggregateInputType = {
    target?: true;
    progress?: true;
    position?: true;
};
export type PriorityMinAggregateInputType = {
    id?: true;
    monthId?: true;
    title?: true;
    description?: true;
    target?: true;
    progress?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PriorityMaxAggregateInputType = {
    id?: true;
    monthId?: true;
    title?: true;
    description?: true;
    target?: true;
    progress?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PriorityCountAggregateInputType = {
    id?: true;
    monthId?: true;
    title?: true;
    description?: true;
    target?: true;
    progress?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PriorityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Priority to aggregate.
     */
    where?: Prisma.PriorityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Priorities to fetch.
     */
    orderBy?: Prisma.PriorityOrderByWithRelationInput | Prisma.PriorityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PriorityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Priorities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Priorities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Priorities
    **/
    _count?: true | PriorityCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PriorityAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PrioritySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PriorityMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PriorityMaxAggregateInputType;
};
export type GetPriorityAggregateType<T extends PriorityAggregateArgs> = {
    [P in keyof T & keyof AggregatePriority]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePriority[P]> : Prisma.GetScalarType<T[P], AggregatePriority[P]>;
};
export type PriorityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PriorityWhereInput;
    orderBy?: Prisma.PriorityOrderByWithAggregationInput | Prisma.PriorityOrderByWithAggregationInput[];
    by: Prisma.PriorityScalarFieldEnum[] | Prisma.PriorityScalarFieldEnum;
    having?: Prisma.PriorityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PriorityCountAggregateInputType | true;
    _avg?: PriorityAvgAggregateInputType;
    _sum?: PrioritySumAggregateInputType;
    _min?: PriorityMinAggregateInputType;
    _max?: PriorityMaxAggregateInputType;
};
export type PriorityGroupByOutputType = {
    id: string;
    monthId: string;
    title: string;
    description: string | null;
    target: number;
    progress: number;
    position: number;
    createdAt: Date;
    updatedAt: Date;
    _count: PriorityCountAggregateOutputType | null;
    _avg: PriorityAvgAggregateOutputType | null;
    _sum: PrioritySumAggregateOutputType | null;
    _min: PriorityMinAggregateOutputType | null;
    _max: PriorityMaxAggregateOutputType | null;
};
export type GetPriorityGroupByPayload<T extends PriorityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PriorityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PriorityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PriorityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PriorityGroupByOutputType[P]>;
}>>;
export type PriorityWhereInput = {
    AND?: Prisma.PriorityWhereInput | Prisma.PriorityWhereInput[];
    OR?: Prisma.PriorityWhereInput[];
    NOT?: Prisma.PriorityWhereInput | Prisma.PriorityWhereInput[];
    id?: Prisma.StringFilter<"Priority"> | string;
    monthId?: Prisma.StringFilter<"Priority"> | string;
    title?: Prisma.StringFilter<"Priority"> | string;
    description?: Prisma.StringNullableFilter<"Priority"> | string | null;
    target?: Prisma.IntFilter<"Priority"> | number;
    progress?: Prisma.IntFilter<"Priority"> | number;
    position?: Prisma.IntFilter<"Priority"> | number;
    createdAt?: Prisma.DateTimeFilter<"Priority"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Priority"> | Date | string;
    month?: Prisma.XOR<Prisma.MonthScalarRelationFilter, Prisma.MonthWhereInput>;
    milestones?: Prisma.MilestoneListRelationFilter;
};
export type PriorityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    monthId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    target?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    month?: Prisma.MonthOrderByWithRelationInput;
    milestones?: Prisma.MilestoneOrderByRelationAggregateInput;
};
export type PriorityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PriorityWhereInput | Prisma.PriorityWhereInput[];
    OR?: Prisma.PriorityWhereInput[];
    NOT?: Prisma.PriorityWhereInput | Prisma.PriorityWhereInput[];
    monthId?: Prisma.StringFilter<"Priority"> | string;
    title?: Prisma.StringFilter<"Priority"> | string;
    description?: Prisma.StringNullableFilter<"Priority"> | string | null;
    target?: Prisma.IntFilter<"Priority"> | number;
    progress?: Prisma.IntFilter<"Priority"> | number;
    position?: Prisma.IntFilter<"Priority"> | number;
    createdAt?: Prisma.DateTimeFilter<"Priority"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Priority"> | Date | string;
    month?: Prisma.XOR<Prisma.MonthScalarRelationFilter, Prisma.MonthWhereInput>;
    milestones?: Prisma.MilestoneListRelationFilter;
}, "id">;
export type PriorityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    monthId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    target?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PriorityCountOrderByAggregateInput;
    _avg?: Prisma.PriorityAvgOrderByAggregateInput;
    _max?: Prisma.PriorityMaxOrderByAggregateInput;
    _min?: Prisma.PriorityMinOrderByAggregateInput;
    _sum?: Prisma.PrioritySumOrderByAggregateInput;
};
export type PriorityScalarWhereWithAggregatesInput = {
    AND?: Prisma.PriorityScalarWhereWithAggregatesInput | Prisma.PriorityScalarWhereWithAggregatesInput[];
    OR?: Prisma.PriorityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PriorityScalarWhereWithAggregatesInput | Prisma.PriorityScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Priority"> | string;
    monthId?: Prisma.StringWithAggregatesFilter<"Priority"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Priority"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Priority"> | string | null;
    target?: Prisma.IntWithAggregatesFilter<"Priority"> | number;
    progress?: Prisma.IntWithAggregatesFilter<"Priority"> | number;
    position?: Prisma.IntWithAggregatesFilter<"Priority"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Priority"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Priority"> | Date | string;
};
export type PriorityCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    target?: number;
    progress?: number;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    month: Prisma.MonthCreateNestedOneWithoutPrioritiesInput;
    milestones?: Prisma.MilestoneCreateNestedManyWithoutPriorityInput;
};
export type PriorityUncheckedCreateInput = {
    id?: string;
    monthId: string;
    title: string;
    description?: string | null;
    target?: number;
    progress?: number;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    milestones?: Prisma.MilestoneUncheckedCreateNestedManyWithoutPriorityInput;
};
export type PriorityUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    month?: Prisma.MonthUpdateOneRequiredWithoutPrioritiesNestedInput;
    milestones?: Prisma.MilestoneUpdateManyWithoutPriorityNestedInput;
};
export type PriorityUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    monthId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    milestones?: Prisma.MilestoneUncheckedUpdateManyWithoutPriorityNestedInput;
};
export type PriorityCreateManyInput = {
    id?: string;
    monthId: string;
    title: string;
    description?: string | null;
    target?: number;
    progress?: number;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PriorityUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriorityUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    monthId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriorityListRelationFilter = {
    every?: Prisma.PriorityWhereInput;
    some?: Prisma.PriorityWhereInput;
    none?: Prisma.PriorityWhereInput;
};
export type PriorityOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PriorityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monthId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PriorityAvgOrderByAggregateInput = {
    target?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
};
export type PriorityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monthId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PriorityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monthId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PrioritySumOrderByAggregateInput = {
    target?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
};
export type PriorityScalarRelationFilter = {
    is?: Prisma.PriorityWhereInput;
    isNot?: Prisma.PriorityWhereInput;
};
export type PriorityCreateNestedManyWithoutMonthInput = {
    create?: Prisma.XOR<Prisma.PriorityCreateWithoutMonthInput, Prisma.PriorityUncheckedCreateWithoutMonthInput> | Prisma.PriorityCreateWithoutMonthInput[] | Prisma.PriorityUncheckedCreateWithoutMonthInput[];
    connectOrCreate?: Prisma.PriorityCreateOrConnectWithoutMonthInput | Prisma.PriorityCreateOrConnectWithoutMonthInput[];
    createMany?: Prisma.PriorityCreateManyMonthInputEnvelope;
    connect?: Prisma.PriorityWhereUniqueInput | Prisma.PriorityWhereUniqueInput[];
};
export type PriorityUncheckedCreateNestedManyWithoutMonthInput = {
    create?: Prisma.XOR<Prisma.PriorityCreateWithoutMonthInput, Prisma.PriorityUncheckedCreateWithoutMonthInput> | Prisma.PriorityCreateWithoutMonthInput[] | Prisma.PriorityUncheckedCreateWithoutMonthInput[];
    connectOrCreate?: Prisma.PriorityCreateOrConnectWithoutMonthInput | Prisma.PriorityCreateOrConnectWithoutMonthInput[];
    createMany?: Prisma.PriorityCreateManyMonthInputEnvelope;
    connect?: Prisma.PriorityWhereUniqueInput | Prisma.PriorityWhereUniqueInput[];
};
export type PriorityUpdateManyWithoutMonthNestedInput = {
    create?: Prisma.XOR<Prisma.PriorityCreateWithoutMonthInput, Prisma.PriorityUncheckedCreateWithoutMonthInput> | Prisma.PriorityCreateWithoutMonthInput[] | Prisma.PriorityUncheckedCreateWithoutMonthInput[];
    connectOrCreate?: Prisma.PriorityCreateOrConnectWithoutMonthInput | Prisma.PriorityCreateOrConnectWithoutMonthInput[];
    upsert?: Prisma.PriorityUpsertWithWhereUniqueWithoutMonthInput | Prisma.PriorityUpsertWithWhereUniqueWithoutMonthInput[];
    createMany?: Prisma.PriorityCreateManyMonthInputEnvelope;
    set?: Prisma.PriorityWhereUniqueInput | Prisma.PriorityWhereUniqueInput[];
    disconnect?: Prisma.PriorityWhereUniqueInput | Prisma.PriorityWhereUniqueInput[];
    delete?: Prisma.PriorityWhereUniqueInput | Prisma.PriorityWhereUniqueInput[];
    connect?: Prisma.PriorityWhereUniqueInput | Prisma.PriorityWhereUniqueInput[];
    update?: Prisma.PriorityUpdateWithWhereUniqueWithoutMonthInput | Prisma.PriorityUpdateWithWhereUniqueWithoutMonthInput[];
    updateMany?: Prisma.PriorityUpdateManyWithWhereWithoutMonthInput | Prisma.PriorityUpdateManyWithWhereWithoutMonthInput[];
    deleteMany?: Prisma.PriorityScalarWhereInput | Prisma.PriorityScalarWhereInput[];
};
export type PriorityUncheckedUpdateManyWithoutMonthNestedInput = {
    create?: Prisma.XOR<Prisma.PriorityCreateWithoutMonthInput, Prisma.PriorityUncheckedCreateWithoutMonthInput> | Prisma.PriorityCreateWithoutMonthInput[] | Prisma.PriorityUncheckedCreateWithoutMonthInput[];
    connectOrCreate?: Prisma.PriorityCreateOrConnectWithoutMonthInput | Prisma.PriorityCreateOrConnectWithoutMonthInput[];
    upsert?: Prisma.PriorityUpsertWithWhereUniqueWithoutMonthInput | Prisma.PriorityUpsertWithWhereUniqueWithoutMonthInput[];
    createMany?: Prisma.PriorityCreateManyMonthInputEnvelope;
    set?: Prisma.PriorityWhereUniqueInput | Prisma.PriorityWhereUniqueInput[];
    disconnect?: Prisma.PriorityWhereUniqueInput | Prisma.PriorityWhereUniqueInput[];
    delete?: Prisma.PriorityWhereUniqueInput | Prisma.PriorityWhereUniqueInput[];
    connect?: Prisma.PriorityWhereUniqueInput | Prisma.PriorityWhereUniqueInput[];
    update?: Prisma.PriorityUpdateWithWhereUniqueWithoutMonthInput | Prisma.PriorityUpdateWithWhereUniqueWithoutMonthInput[];
    updateMany?: Prisma.PriorityUpdateManyWithWhereWithoutMonthInput | Prisma.PriorityUpdateManyWithWhereWithoutMonthInput[];
    deleteMany?: Prisma.PriorityScalarWhereInput | Prisma.PriorityScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type PriorityCreateNestedOneWithoutMilestonesInput = {
    create?: Prisma.XOR<Prisma.PriorityCreateWithoutMilestonesInput, Prisma.PriorityUncheckedCreateWithoutMilestonesInput>;
    connectOrCreate?: Prisma.PriorityCreateOrConnectWithoutMilestonesInput;
    connect?: Prisma.PriorityWhereUniqueInput;
};
export type PriorityUpdateOneRequiredWithoutMilestonesNestedInput = {
    create?: Prisma.XOR<Prisma.PriorityCreateWithoutMilestonesInput, Prisma.PriorityUncheckedCreateWithoutMilestonesInput>;
    connectOrCreate?: Prisma.PriorityCreateOrConnectWithoutMilestonesInput;
    upsert?: Prisma.PriorityUpsertWithoutMilestonesInput;
    connect?: Prisma.PriorityWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PriorityUpdateToOneWithWhereWithoutMilestonesInput, Prisma.PriorityUpdateWithoutMilestonesInput>, Prisma.PriorityUncheckedUpdateWithoutMilestonesInput>;
};
export type PriorityCreateWithoutMonthInput = {
    id?: string;
    title: string;
    description?: string | null;
    target?: number;
    progress?: number;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    milestones?: Prisma.MilestoneCreateNestedManyWithoutPriorityInput;
};
export type PriorityUncheckedCreateWithoutMonthInput = {
    id?: string;
    title: string;
    description?: string | null;
    target?: number;
    progress?: number;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    milestones?: Prisma.MilestoneUncheckedCreateNestedManyWithoutPriorityInput;
};
export type PriorityCreateOrConnectWithoutMonthInput = {
    where: Prisma.PriorityWhereUniqueInput;
    create: Prisma.XOR<Prisma.PriorityCreateWithoutMonthInput, Prisma.PriorityUncheckedCreateWithoutMonthInput>;
};
export type PriorityCreateManyMonthInputEnvelope = {
    data: Prisma.PriorityCreateManyMonthInput | Prisma.PriorityCreateManyMonthInput[];
    skipDuplicates?: boolean;
};
export type PriorityUpsertWithWhereUniqueWithoutMonthInput = {
    where: Prisma.PriorityWhereUniqueInput;
    update: Prisma.XOR<Prisma.PriorityUpdateWithoutMonthInput, Prisma.PriorityUncheckedUpdateWithoutMonthInput>;
    create: Prisma.XOR<Prisma.PriorityCreateWithoutMonthInput, Prisma.PriorityUncheckedCreateWithoutMonthInput>;
};
export type PriorityUpdateWithWhereUniqueWithoutMonthInput = {
    where: Prisma.PriorityWhereUniqueInput;
    data: Prisma.XOR<Prisma.PriorityUpdateWithoutMonthInput, Prisma.PriorityUncheckedUpdateWithoutMonthInput>;
};
export type PriorityUpdateManyWithWhereWithoutMonthInput = {
    where: Prisma.PriorityScalarWhereInput;
    data: Prisma.XOR<Prisma.PriorityUpdateManyMutationInput, Prisma.PriorityUncheckedUpdateManyWithoutMonthInput>;
};
export type PriorityScalarWhereInput = {
    AND?: Prisma.PriorityScalarWhereInput | Prisma.PriorityScalarWhereInput[];
    OR?: Prisma.PriorityScalarWhereInput[];
    NOT?: Prisma.PriorityScalarWhereInput | Prisma.PriorityScalarWhereInput[];
    id?: Prisma.StringFilter<"Priority"> | string;
    monthId?: Prisma.StringFilter<"Priority"> | string;
    title?: Prisma.StringFilter<"Priority"> | string;
    description?: Prisma.StringNullableFilter<"Priority"> | string | null;
    target?: Prisma.IntFilter<"Priority"> | number;
    progress?: Prisma.IntFilter<"Priority"> | number;
    position?: Prisma.IntFilter<"Priority"> | number;
    createdAt?: Prisma.DateTimeFilter<"Priority"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Priority"> | Date | string;
};
export type PriorityCreateWithoutMilestonesInput = {
    id?: string;
    title: string;
    description?: string | null;
    target?: number;
    progress?: number;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    month: Prisma.MonthCreateNestedOneWithoutPrioritiesInput;
};
export type PriorityUncheckedCreateWithoutMilestonesInput = {
    id?: string;
    monthId: string;
    title: string;
    description?: string | null;
    target?: number;
    progress?: number;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PriorityCreateOrConnectWithoutMilestonesInput = {
    where: Prisma.PriorityWhereUniqueInput;
    create: Prisma.XOR<Prisma.PriorityCreateWithoutMilestonesInput, Prisma.PriorityUncheckedCreateWithoutMilestonesInput>;
};
export type PriorityUpsertWithoutMilestonesInput = {
    update: Prisma.XOR<Prisma.PriorityUpdateWithoutMilestonesInput, Prisma.PriorityUncheckedUpdateWithoutMilestonesInput>;
    create: Prisma.XOR<Prisma.PriorityCreateWithoutMilestonesInput, Prisma.PriorityUncheckedCreateWithoutMilestonesInput>;
    where?: Prisma.PriorityWhereInput;
};
export type PriorityUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: Prisma.PriorityWhereInput;
    data: Prisma.XOR<Prisma.PriorityUpdateWithoutMilestonesInput, Prisma.PriorityUncheckedUpdateWithoutMilestonesInput>;
};
export type PriorityUpdateWithoutMilestonesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    month?: Prisma.MonthUpdateOneRequiredWithoutPrioritiesNestedInput;
};
export type PriorityUncheckedUpdateWithoutMilestonesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    monthId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriorityCreateManyMonthInput = {
    id?: string;
    title: string;
    description?: string | null;
    target?: number;
    progress?: number;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PriorityUpdateWithoutMonthInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    milestones?: Prisma.MilestoneUpdateManyWithoutPriorityNestedInput;
};
export type PriorityUncheckedUpdateWithoutMonthInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    milestones?: Prisma.MilestoneUncheckedUpdateManyWithoutPriorityNestedInput;
};
export type PriorityUncheckedUpdateManyWithoutMonthInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.IntFieldUpdateOperationsInput | number;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PriorityCountOutputType
 */
export type PriorityCountOutputType = {
    milestones: number;
};
export type PriorityCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    milestones?: boolean | PriorityCountOutputTypeCountMilestonesArgs;
};
/**
 * PriorityCountOutputType without action
 */
export type PriorityCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriorityCountOutputType
     */
    select?: Prisma.PriorityCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PriorityCountOutputType without action
 */
export type PriorityCountOutputTypeCountMilestonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MilestoneWhereInput;
};
export type PrioritySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    monthId?: boolean;
    title?: boolean;
    description?: boolean;
    target?: boolean;
    progress?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    month?: boolean | Prisma.MonthDefaultArgs<ExtArgs>;
    milestones?: boolean | Prisma.Priority$milestonesArgs<ExtArgs>;
    _count?: boolean | Prisma.PriorityCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["priority"]>;
export type PrioritySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    monthId?: boolean;
    title?: boolean;
    description?: boolean;
    target?: boolean;
    progress?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    month?: boolean | Prisma.MonthDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["priority"]>;
export type PrioritySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    monthId?: boolean;
    title?: boolean;
    description?: boolean;
    target?: boolean;
    progress?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    month?: boolean | Prisma.MonthDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["priority"]>;
export type PrioritySelectScalar = {
    id?: boolean;
    monthId?: boolean;
    title?: boolean;
    description?: boolean;
    target?: boolean;
    progress?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PriorityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "monthId" | "title" | "description" | "target" | "progress" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["priority"]>;
export type PriorityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    month?: boolean | Prisma.MonthDefaultArgs<ExtArgs>;
    milestones?: boolean | Prisma.Priority$milestonesArgs<ExtArgs>;
    _count?: boolean | Prisma.PriorityCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PriorityIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    month?: boolean | Prisma.MonthDefaultArgs<ExtArgs>;
};
export type PriorityIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    month?: boolean | Prisma.MonthDefaultArgs<ExtArgs>;
};
export type $PriorityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Priority";
    objects: {
        month: Prisma.$MonthPayload<ExtArgs>;
        milestones: Prisma.$MilestonePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        monthId: string;
        title: string;
        description: string | null;
        target: number;
        progress: number;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["priority"]>;
    composites: {};
};
export type PriorityGetPayload<S extends boolean | null | undefined | PriorityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PriorityPayload, S>;
export type PriorityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PriorityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PriorityCountAggregateInputType | true;
};
export interface PriorityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Priority'];
        meta: {
            name: 'Priority';
        };
    };
    /**
     * Find zero or one Priority that matches the filter.
     * @param {PriorityFindUniqueArgs} args - Arguments to find a Priority
     * @example
     * // Get one Priority
     * const priority = await prisma.priority.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriorityFindUniqueArgs>(args: Prisma.SelectSubset<T, PriorityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PriorityClient<runtime.Types.Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Priority that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriorityFindUniqueOrThrowArgs} args - Arguments to find a Priority
     * @example
     * // Get one Priority
     * const priority = await prisma.priority.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriorityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PriorityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PriorityClient<runtime.Types.Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Priority that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityFindFirstArgs} args - Arguments to find a Priority
     * @example
     * // Get one Priority
     * const priority = await prisma.priority.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriorityFindFirstArgs>(args?: Prisma.SelectSubset<T, PriorityFindFirstArgs<ExtArgs>>): Prisma.Prisma__PriorityClient<runtime.Types.Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Priority that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityFindFirstOrThrowArgs} args - Arguments to find a Priority
     * @example
     * // Get one Priority
     * const priority = await prisma.priority.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriorityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PriorityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PriorityClient<runtime.Types.Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Priorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Priorities
     * const priorities = await prisma.priority.findMany()
     *
     * // Get first 10 Priorities
     * const priorities = await prisma.priority.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const priorityWithIdOnly = await prisma.priority.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PriorityFindManyArgs>(args?: Prisma.SelectSubset<T, PriorityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Priority.
     * @param {PriorityCreateArgs} args - Arguments to create a Priority.
     * @example
     * // Create one Priority
     * const Priority = await prisma.priority.create({
     *   data: {
     *     // ... data to create a Priority
     *   }
     * })
     *
     */
    create<T extends PriorityCreateArgs>(args: Prisma.SelectSubset<T, PriorityCreateArgs<ExtArgs>>): Prisma.Prisma__PriorityClient<runtime.Types.Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Priorities.
     * @param {PriorityCreateManyArgs} args - Arguments to create many Priorities.
     * @example
     * // Create many Priorities
     * const priority = await prisma.priority.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PriorityCreateManyArgs>(args?: Prisma.SelectSubset<T, PriorityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Priorities and returns the data saved in the database.
     * @param {PriorityCreateManyAndReturnArgs} args - Arguments to create many Priorities.
     * @example
     * // Create many Priorities
     * const priority = await prisma.priority.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Priorities and only return the `id`
     * const priorityWithIdOnly = await prisma.priority.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PriorityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PriorityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Priority.
     * @param {PriorityDeleteArgs} args - Arguments to delete one Priority.
     * @example
     * // Delete one Priority
     * const Priority = await prisma.priority.delete({
     *   where: {
     *     // ... filter to delete one Priority
     *   }
     * })
     *
     */
    delete<T extends PriorityDeleteArgs>(args: Prisma.SelectSubset<T, PriorityDeleteArgs<ExtArgs>>): Prisma.Prisma__PriorityClient<runtime.Types.Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Priority.
     * @param {PriorityUpdateArgs} args - Arguments to update one Priority.
     * @example
     * // Update one Priority
     * const priority = await prisma.priority.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PriorityUpdateArgs>(args: Prisma.SelectSubset<T, PriorityUpdateArgs<ExtArgs>>): Prisma.Prisma__PriorityClient<runtime.Types.Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Priorities.
     * @param {PriorityDeleteManyArgs} args - Arguments to filter Priorities to delete.
     * @example
     * // Delete a few Priorities
     * const { count } = await prisma.priority.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PriorityDeleteManyArgs>(args?: Prisma.SelectSubset<T, PriorityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Priorities
     * const priority = await prisma.priority.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PriorityUpdateManyArgs>(args: Prisma.SelectSubset<T, PriorityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Priorities and returns the data updated in the database.
     * @param {PriorityUpdateManyAndReturnArgs} args - Arguments to update many Priorities.
     * @example
     * // Update many Priorities
     * const priority = await prisma.priority.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Priorities and only return the `id`
     * const priorityWithIdOnly = await prisma.priority.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PriorityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PriorityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Priority.
     * @param {PriorityUpsertArgs} args - Arguments to update or create a Priority.
     * @example
     * // Update or create a Priority
     * const priority = await prisma.priority.upsert({
     *   create: {
     *     // ... data to create a Priority
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Priority we want to update
     *   }
     * })
     */
    upsert<T extends PriorityUpsertArgs>(args: Prisma.SelectSubset<T, PriorityUpsertArgs<ExtArgs>>): Prisma.Prisma__PriorityClient<runtime.Types.Result.GetResult<Prisma.$PriorityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityCountArgs} args - Arguments to filter Priorities to count.
     * @example
     * // Count the number of Priorities
     * const count = await prisma.priority.count({
     *   where: {
     *     // ... the filter for the Priorities we want to count
     *   }
     * })
    **/
    count<T extends PriorityCountArgs>(args?: Prisma.Subset<T, PriorityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PriorityCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Priority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriorityAggregateArgs>(args: Prisma.Subset<T, PriorityAggregateArgs>): Prisma.PrismaPromise<GetPriorityAggregateType<T>>;
    /**
     * Group by Priority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriorityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends PriorityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PriorityGroupByArgs['orderBy'];
    } : {
        orderBy?: PriorityGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PriorityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriorityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Priority model
     */
    readonly fields: PriorityFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Priority.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PriorityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    month<T extends Prisma.MonthDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MonthDefaultArgs<ExtArgs>>): Prisma.Prisma__MonthClient<runtime.Types.Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    milestones<T extends Prisma.Priority$milestonesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Priority$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Priority model
 */
export interface PriorityFieldRefs {
    readonly id: Prisma.FieldRef<"Priority", 'String'>;
    readonly monthId: Prisma.FieldRef<"Priority", 'String'>;
    readonly title: Prisma.FieldRef<"Priority", 'String'>;
    readonly description: Prisma.FieldRef<"Priority", 'String'>;
    readonly target: Prisma.FieldRef<"Priority", 'Int'>;
    readonly progress: Prisma.FieldRef<"Priority", 'Int'>;
    readonly position: Prisma.FieldRef<"Priority", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Priority", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Priority", 'DateTime'>;
}
/**
 * Priority findUnique
 */
export type PriorityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: Prisma.PrioritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Priority
     */
    omit?: Prisma.PriorityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriorityInclude<ExtArgs> | null;
    /**
     * Filter, which Priority to fetch.
     */
    where: Prisma.PriorityWhereUniqueInput;
};
/**
 * Priority findUniqueOrThrow
 */
export type PriorityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: Prisma.PrioritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Priority
     */
    omit?: Prisma.PriorityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriorityInclude<ExtArgs> | null;
    /**
     * Filter, which Priority to fetch.
     */
    where: Prisma.PriorityWhereUniqueInput;
};
/**
 * Priority findFirst
 */
export type PriorityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: Prisma.PrioritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Priority
     */
    omit?: Prisma.PriorityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriorityInclude<ExtArgs> | null;
    /**
     * Filter, which Priority to fetch.
     */
    where?: Prisma.PriorityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Priorities to fetch.
     */
    orderBy?: Prisma.PriorityOrderByWithRelationInput | Prisma.PriorityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Priorities.
     */
    cursor?: Prisma.PriorityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Priorities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Priorities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Priorities.
     */
    distinct?: Prisma.PriorityScalarFieldEnum | Prisma.PriorityScalarFieldEnum[];
};
/**
 * Priority findFirstOrThrow
 */
export type PriorityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: Prisma.PrioritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Priority
     */
    omit?: Prisma.PriorityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriorityInclude<ExtArgs> | null;
    /**
     * Filter, which Priority to fetch.
     */
    where?: Prisma.PriorityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Priorities to fetch.
     */
    orderBy?: Prisma.PriorityOrderByWithRelationInput | Prisma.PriorityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Priorities.
     */
    cursor?: Prisma.PriorityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Priorities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Priorities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Priorities.
     */
    distinct?: Prisma.PriorityScalarFieldEnum | Prisma.PriorityScalarFieldEnum[];
};
/**
 * Priority findMany
 */
export type PriorityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: Prisma.PrioritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Priority
     */
    omit?: Prisma.PriorityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriorityInclude<ExtArgs> | null;
    /**
     * Filter, which Priorities to fetch.
     */
    where?: Prisma.PriorityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Priorities to fetch.
     */
    orderBy?: Prisma.PriorityOrderByWithRelationInput | Prisma.PriorityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Priorities.
     */
    cursor?: Prisma.PriorityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Priorities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Priorities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Priorities.
     */
    distinct?: Prisma.PriorityScalarFieldEnum | Prisma.PriorityScalarFieldEnum[];
};
/**
 * Priority create
 */
export type PriorityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: Prisma.PrioritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Priority
     */
    omit?: Prisma.PriorityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriorityInclude<ExtArgs> | null;
    /**
     * The data needed to create a Priority.
     */
    data: Prisma.XOR<Prisma.PriorityCreateInput, Prisma.PriorityUncheckedCreateInput>;
};
/**
 * Priority createMany
 */
export type PriorityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Priorities.
     */
    data: Prisma.PriorityCreateManyInput | Prisma.PriorityCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Priority createManyAndReturn
 */
export type PriorityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: Prisma.PrioritySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Priority
     */
    omit?: Prisma.PriorityOmit<ExtArgs> | null;
    /**
     * The data used to create many Priorities.
     */
    data: Prisma.PriorityCreateManyInput | Prisma.PriorityCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriorityIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Priority update
 */
export type PriorityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: Prisma.PrioritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Priority
     */
    omit?: Prisma.PriorityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriorityInclude<ExtArgs> | null;
    /**
     * The data needed to update a Priority.
     */
    data: Prisma.XOR<Prisma.PriorityUpdateInput, Prisma.PriorityUncheckedUpdateInput>;
    /**
     * Choose, which Priority to update.
     */
    where: Prisma.PriorityWhereUniqueInput;
};
/**
 * Priority updateMany
 */
export type PriorityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Priorities.
     */
    data: Prisma.XOR<Prisma.PriorityUpdateManyMutationInput, Prisma.PriorityUncheckedUpdateManyInput>;
    /**
     * Filter which Priorities to update
     */
    where?: Prisma.PriorityWhereInput;
    /**
     * Limit how many Priorities to update.
     */
    limit?: number;
};
/**
 * Priority updateManyAndReturn
 */
export type PriorityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: Prisma.PrioritySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Priority
     */
    omit?: Prisma.PriorityOmit<ExtArgs> | null;
    /**
     * The data used to update Priorities.
     */
    data: Prisma.XOR<Prisma.PriorityUpdateManyMutationInput, Prisma.PriorityUncheckedUpdateManyInput>;
    /**
     * Filter which Priorities to update
     */
    where?: Prisma.PriorityWhereInput;
    /**
     * Limit how many Priorities to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriorityIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Priority upsert
 */
export type PriorityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: Prisma.PrioritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Priority
     */
    omit?: Prisma.PriorityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriorityInclude<ExtArgs> | null;
    /**
     * The filter to search for the Priority to update in case it exists.
     */
    where: Prisma.PriorityWhereUniqueInput;
    /**
     * In case the Priority found by the `where` argument doesn't exist, create a new Priority with this data.
     */
    create: Prisma.XOR<Prisma.PriorityCreateInput, Prisma.PriorityUncheckedCreateInput>;
    /**
     * In case the Priority was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PriorityUpdateInput, Prisma.PriorityUncheckedUpdateInput>;
};
/**
 * Priority delete
 */
export type PriorityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: Prisma.PrioritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Priority
     */
    omit?: Prisma.PriorityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriorityInclude<ExtArgs> | null;
    /**
     * Filter which Priority to delete.
     */
    where: Prisma.PriorityWhereUniqueInput;
};
/**
 * Priority deleteMany
 */
export type PriorityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Priorities to delete
     */
    where?: Prisma.PriorityWhereInput;
    /**
     * Limit how many Priorities to delete.
     */
    limit?: number;
};
/**
 * Priority.milestones
 */
export type Priority$milestonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: Prisma.MilestoneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Milestone
     */
    omit?: Prisma.MilestoneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MilestoneInclude<ExtArgs> | null;
    where?: Prisma.MilestoneWhereInput;
    orderBy?: Prisma.MilestoneOrderByWithRelationInput | Prisma.MilestoneOrderByWithRelationInput[];
    cursor?: Prisma.MilestoneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MilestoneScalarFieldEnum | Prisma.MilestoneScalarFieldEnum[];
};
/**
 * Priority without action
 */
export type PriorityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Priority
     */
    select?: Prisma.PrioritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Priority
     */
    omit?: Prisma.PriorityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriorityInclude<ExtArgs> | null;
};
//# sourceMappingURL=Priority.d.ts.map