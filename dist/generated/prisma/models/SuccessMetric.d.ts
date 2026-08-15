import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model SuccessMetric
 *
 */
export type SuccessMetricModel = runtime.Types.Result.DefaultSelection<Prisma.$SuccessMetricPayload>;
export type AggregateSuccessMetric = {
    _count: SuccessMetricCountAggregateOutputType | null;
    _avg: SuccessMetricAvgAggregateOutputType | null;
    _sum: SuccessMetricSumAggregateOutputType | null;
    _min: SuccessMetricMinAggregateOutputType | null;
    _max: SuccessMetricMaxAggregateOutputType | null;
};
export type SuccessMetricAvgAggregateOutputType = {
    value: number | null;
    target: number | null;
    position: number | null;
};
export type SuccessMetricSumAggregateOutputType = {
    value: number | null;
    target: number | null;
    position: number | null;
};
export type SuccessMetricMinAggregateOutputType = {
    id: string | null;
    monthId: string | null;
    name: string | null;
    value: number | null;
    target: number | null;
    unit: string | null;
    position: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SuccessMetricMaxAggregateOutputType = {
    id: string | null;
    monthId: string | null;
    name: string | null;
    value: number | null;
    target: number | null;
    unit: string | null;
    position: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SuccessMetricCountAggregateOutputType = {
    id: number;
    monthId: number;
    name: number;
    value: number;
    target: number;
    unit: number;
    position: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SuccessMetricAvgAggregateInputType = {
    value?: true;
    target?: true;
    position?: true;
};
export type SuccessMetricSumAggregateInputType = {
    value?: true;
    target?: true;
    position?: true;
};
export type SuccessMetricMinAggregateInputType = {
    id?: true;
    monthId?: true;
    name?: true;
    value?: true;
    target?: true;
    unit?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SuccessMetricMaxAggregateInputType = {
    id?: true;
    monthId?: true;
    name?: true;
    value?: true;
    target?: true;
    unit?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SuccessMetricCountAggregateInputType = {
    id?: true;
    monthId?: true;
    name?: true;
    value?: true;
    target?: true;
    unit?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SuccessMetricAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SuccessMetric to aggregate.
     */
    where?: Prisma.SuccessMetricWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SuccessMetrics to fetch.
     */
    orderBy?: Prisma.SuccessMetricOrderByWithRelationInput | Prisma.SuccessMetricOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SuccessMetricWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SuccessMetrics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SuccessMetrics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SuccessMetrics
    **/
    _count?: true | SuccessMetricCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SuccessMetricAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SuccessMetricSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SuccessMetricMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SuccessMetricMaxAggregateInputType;
};
export type GetSuccessMetricAggregateType<T extends SuccessMetricAggregateArgs> = {
    [P in keyof T & keyof AggregateSuccessMetric]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSuccessMetric[P]> : Prisma.GetScalarType<T[P], AggregateSuccessMetric[P]>;
};
export type SuccessMetricGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SuccessMetricWhereInput;
    orderBy?: Prisma.SuccessMetricOrderByWithAggregationInput | Prisma.SuccessMetricOrderByWithAggregationInput[];
    by: Prisma.SuccessMetricScalarFieldEnum[] | Prisma.SuccessMetricScalarFieldEnum;
    having?: Prisma.SuccessMetricScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SuccessMetricCountAggregateInputType | true;
    _avg?: SuccessMetricAvgAggregateInputType;
    _sum?: SuccessMetricSumAggregateInputType;
    _min?: SuccessMetricMinAggregateInputType;
    _max?: SuccessMetricMaxAggregateInputType;
};
export type SuccessMetricGroupByOutputType = {
    id: string;
    monthId: string;
    name: string;
    value: number;
    target: number;
    unit: string | null;
    position: number;
    createdAt: Date;
    updatedAt: Date;
    _count: SuccessMetricCountAggregateOutputType | null;
    _avg: SuccessMetricAvgAggregateOutputType | null;
    _sum: SuccessMetricSumAggregateOutputType | null;
    _min: SuccessMetricMinAggregateOutputType | null;
    _max: SuccessMetricMaxAggregateOutputType | null;
};
export type GetSuccessMetricGroupByPayload<T extends SuccessMetricGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SuccessMetricGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SuccessMetricGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SuccessMetricGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SuccessMetricGroupByOutputType[P]>;
}>>;
export type SuccessMetricWhereInput = {
    AND?: Prisma.SuccessMetricWhereInput | Prisma.SuccessMetricWhereInput[];
    OR?: Prisma.SuccessMetricWhereInput[];
    NOT?: Prisma.SuccessMetricWhereInput | Prisma.SuccessMetricWhereInput[];
    id?: Prisma.StringFilter<"SuccessMetric"> | string;
    monthId?: Prisma.StringFilter<"SuccessMetric"> | string;
    name?: Prisma.StringFilter<"SuccessMetric"> | string;
    value?: Prisma.FloatFilter<"SuccessMetric"> | number;
    target?: Prisma.FloatFilter<"SuccessMetric"> | number;
    unit?: Prisma.StringNullableFilter<"SuccessMetric"> | string | null;
    position?: Prisma.IntFilter<"SuccessMetric"> | number;
    createdAt?: Prisma.DateTimeFilter<"SuccessMetric"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SuccessMetric"> | Date | string;
    month?: Prisma.XOR<Prisma.MonthScalarRelationFilter, Prisma.MonthWhereInput>;
};
export type SuccessMetricOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    monthId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    unit?: Prisma.SortOrderInput | Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    month?: Prisma.MonthOrderByWithRelationInput;
};
export type SuccessMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SuccessMetricWhereInput | Prisma.SuccessMetricWhereInput[];
    OR?: Prisma.SuccessMetricWhereInput[];
    NOT?: Prisma.SuccessMetricWhereInput | Prisma.SuccessMetricWhereInput[];
    monthId?: Prisma.StringFilter<"SuccessMetric"> | string;
    name?: Prisma.StringFilter<"SuccessMetric"> | string;
    value?: Prisma.FloatFilter<"SuccessMetric"> | number;
    target?: Prisma.FloatFilter<"SuccessMetric"> | number;
    unit?: Prisma.StringNullableFilter<"SuccessMetric"> | string | null;
    position?: Prisma.IntFilter<"SuccessMetric"> | number;
    createdAt?: Prisma.DateTimeFilter<"SuccessMetric"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SuccessMetric"> | Date | string;
    month?: Prisma.XOR<Prisma.MonthScalarRelationFilter, Prisma.MonthWhereInput>;
}, "id">;
export type SuccessMetricOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    monthId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    unit?: Prisma.SortOrderInput | Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SuccessMetricCountOrderByAggregateInput;
    _avg?: Prisma.SuccessMetricAvgOrderByAggregateInput;
    _max?: Prisma.SuccessMetricMaxOrderByAggregateInput;
    _min?: Prisma.SuccessMetricMinOrderByAggregateInput;
    _sum?: Prisma.SuccessMetricSumOrderByAggregateInput;
};
export type SuccessMetricScalarWhereWithAggregatesInput = {
    AND?: Prisma.SuccessMetricScalarWhereWithAggregatesInput | Prisma.SuccessMetricScalarWhereWithAggregatesInput[];
    OR?: Prisma.SuccessMetricScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SuccessMetricScalarWhereWithAggregatesInput | Prisma.SuccessMetricScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SuccessMetric"> | string;
    monthId?: Prisma.StringWithAggregatesFilter<"SuccessMetric"> | string;
    name?: Prisma.StringWithAggregatesFilter<"SuccessMetric"> | string;
    value?: Prisma.FloatWithAggregatesFilter<"SuccessMetric"> | number;
    target?: Prisma.FloatWithAggregatesFilter<"SuccessMetric"> | number;
    unit?: Prisma.StringNullableWithAggregatesFilter<"SuccessMetric"> | string | null;
    position?: Prisma.IntWithAggregatesFilter<"SuccessMetric"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SuccessMetric"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SuccessMetric"> | Date | string;
};
export type SuccessMetricCreateInput = {
    id?: string;
    name: string;
    value?: number;
    target?: number;
    unit?: string | null;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    month: Prisma.MonthCreateNestedOneWithoutMetricsInput;
};
export type SuccessMetricUncheckedCreateInput = {
    id?: string;
    monthId: string;
    name: string;
    value?: number;
    target?: number;
    unit?: string | null;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SuccessMetricUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.FloatFieldUpdateOperationsInput | number;
    target?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    month?: Prisma.MonthUpdateOneRequiredWithoutMetricsNestedInput;
};
export type SuccessMetricUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    monthId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.FloatFieldUpdateOperationsInput | number;
    target?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuccessMetricCreateManyInput = {
    id?: string;
    monthId: string;
    name: string;
    value?: number;
    target?: number;
    unit?: string | null;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SuccessMetricUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.FloatFieldUpdateOperationsInput | number;
    target?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuccessMetricUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    monthId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.FloatFieldUpdateOperationsInput | number;
    target?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuccessMetricListRelationFilter = {
    every?: Prisma.SuccessMetricWhereInput;
    some?: Prisma.SuccessMetricWhereInput;
    none?: Prisma.SuccessMetricWhereInput;
};
export type SuccessMetricOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SuccessMetricCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monthId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SuccessMetricAvgOrderByAggregateInput = {
    value?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
};
export type SuccessMetricMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monthId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SuccessMetricMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monthId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SuccessMetricSumOrderByAggregateInput = {
    value?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
};
export type SuccessMetricCreateNestedManyWithoutMonthInput = {
    create?: Prisma.XOR<Prisma.SuccessMetricCreateWithoutMonthInput, Prisma.SuccessMetricUncheckedCreateWithoutMonthInput> | Prisma.SuccessMetricCreateWithoutMonthInput[] | Prisma.SuccessMetricUncheckedCreateWithoutMonthInput[];
    connectOrCreate?: Prisma.SuccessMetricCreateOrConnectWithoutMonthInput | Prisma.SuccessMetricCreateOrConnectWithoutMonthInput[];
    createMany?: Prisma.SuccessMetricCreateManyMonthInputEnvelope;
    connect?: Prisma.SuccessMetricWhereUniqueInput | Prisma.SuccessMetricWhereUniqueInput[];
};
export type SuccessMetricUncheckedCreateNestedManyWithoutMonthInput = {
    create?: Prisma.XOR<Prisma.SuccessMetricCreateWithoutMonthInput, Prisma.SuccessMetricUncheckedCreateWithoutMonthInput> | Prisma.SuccessMetricCreateWithoutMonthInput[] | Prisma.SuccessMetricUncheckedCreateWithoutMonthInput[];
    connectOrCreate?: Prisma.SuccessMetricCreateOrConnectWithoutMonthInput | Prisma.SuccessMetricCreateOrConnectWithoutMonthInput[];
    createMany?: Prisma.SuccessMetricCreateManyMonthInputEnvelope;
    connect?: Prisma.SuccessMetricWhereUniqueInput | Prisma.SuccessMetricWhereUniqueInput[];
};
export type SuccessMetricUpdateManyWithoutMonthNestedInput = {
    create?: Prisma.XOR<Prisma.SuccessMetricCreateWithoutMonthInput, Prisma.SuccessMetricUncheckedCreateWithoutMonthInput> | Prisma.SuccessMetricCreateWithoutMonthInput[] | Prisma.SuccessMetricUncheckedCreateWithoutMonthInput[];
    connectOrCreate?: Prisma.SuccessMetricCreateOrConnectWithoutMonthInput | Prisma.SuccessMetricCreateOrConnectWithoutMonthInput[];
    upsert?: Prisma.SuccessMetricUpsertWithWhereUniqueWithoutMonthInput | Prisma.SuccessMetricUpsertWithWhereUniqueWithoutMonthInput[];
    createMany?: Prisma.SuccessMetricCreateManyMonthInputEnvelope;
    set?: Prisma.SuccessMetricWhereUniqueInput | Prisma.SuccessMetricWhereUniqueInput[];
    disconnect?: Prisma.SuccessMetricWhereUniqueInput | Prisma.SuccessMetricWhereUniqueInput[];
    delete?: Prisma.SuccessMetricWhereUniqueInput | Prisma.SuccessMetricWhereUniqueInput[];
    connect?: Prisma.SuccessMetricWhereUniqueInput | Prisma.SuccessMetricWhereUniqueInput[];
    update?: Prisma.SuccessMetricUpdateWithWhereUniqueWithoutMonthInput | Prisma.SuccessMetricUpdateWithWhereUniqueWithoutMonthInput[];
    updateMany?: Prisma.SuccessMetricUpdateManyWithWhereWithoutMonthInput | Prisma.SuccessMetricUpdateManyWithWhereWithoutMonthInput[];
    deleteMany?: Prisma.SuccessMetricScalarWhereInput | Prisma.SuccessMetricScalarWhereInput[];
};
export type SuccessMetricUncheckedUpdateManyWithoutMonthNestedInput = {
    create?: Prisma.XOR<Prisma.SuccessMetricCreateWithoutMonthInput, Prisma.SuccessMetricUncheckedCreateWithoutMonthInput> | Prisma.SuccessMetricCreateWithoutMonthInput[] | Prisma.SuccessMetricUncheckedCreateWithoutMonthInput[];
    connectOrCreate?: Prisma.SuccessMetricCreateOrConnectWithoutMonthInput | Prisma.SuccessMetricCreateOrConnectWithoutMonthInput[];
    upsert?: Prisma.SuccessMetricUpsertWithWhereUniqueWithoutMonthInput | Prisma.SuccessMetricUpsertWithWhereUniqueWithoutMonthInput[];
    createMany?: Prisma.SuccessMetricCreateManyMonthInputEnvelope;
    set?: Prisma.SuccessMetricWhereUniqueInput | Prisma.SuccessMetricWhereUniqueInput[];
    disconnect?: Prisma.SuccessMetricWhereUniqueInput | Prisma.SuccessMetricWhereUniqueInput[];
    delete?: Prisma.SuccessMetricWhereUniqueInput | Prisma.SuccessMetricWhereUniqueInput[];
    connect?: Prisma.SuccessMetricWhereUniqueInput | Prisma.SuccessMetricWhereUniqueInput[];
    update?: Prisma.SuccessMetricUpdateWithWhereUniqueWithoutMonthInput | Prisma.SuccessMetricUpdateWithWhereUniqueWithoutMonthInput[];
    updateMany?: Prisma.SuccessMetricUpdateManyWithWhereWithoutMonthInput | Prisma.SuccessMetricUpdateManyWithWhereWithoutMonthInput[];
    deleteMany?: Prisma.SuccessMetricScalarWhereInput | Prisma.SuccessMetricScalarWhereInput[];
};
export type SuccessMetricCreateWithoutMonthInput = {
    id?: string;
    name: string;
    value?: number;
    target?: number;
    unit?: string | null;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SuccessMetricUncheckedCreateWithoutMonthInput = {
    id?: string;
    name: string;
    value?: number;
    target?: number;
    unit?: string | null;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SuccessMetricCreateOrConnectWithoutMonthInput = {
    where: Prisma.SuccessMetricWhereUniqueInput;
    create: Prisma.XOR<Prisma.SuccessMetricCreateWithoutMonthInput, Prisma.SuccessMetricUncheckedCreateWithoutMonthInput>;
};
export type SuccessMetricCreateManyMonthInputEnvelope = {
    data: Prisma.SuccessMetricCreateManyMonthInput | Prisma.SuccessMetricCreateManyMonthInput[];
    skipDuplicates?: boolean;
};
export type SuccessMetricUpsertWithWhereUniqueWithoutMonthInput = {
    where: Prisma.SuccessMetricWhereUniqueInput;
    update: Prisma.XOR<Prisma.SuccessMetricUpdateWithoutMonthInput, Prisma.SuccessMetricUncheckedUpdateWithoutMonthInput>;
    create: Prisma.XOR<Prisma.SuccessMetricCreateWithoutMonthInput, Prisma.SuccessMetricUncheckedCreateWithoutMonthInput>;
};
export type SuccessMetricUpdateWithWhereUniqueWithoutMonthInput = {
    where: Prisma.SuccessMetricWhereUniqueInput;
    data: Prisma.XOR<Prisma.SuccessMetricUpdateWithoutMonthInput, Prisma.SuccessMetricUncheckedUpdateWithoutMonthInput>;
};
export type SuccessMetricUpdateManyWithWhereWithoutMonthInput = {
    where: Prisma.SuccessMetricScalarWhereInput;
    data: Prisma.XOR<Prisma.SuccessMetricUpdateManyMutationInput, Prisma.SuccessMetricUncheckedUpdateManyWithoutMonthInput>;
};
export type SuccessMetricScalarWhereInput = {
    AND?: Prisma.SuccessMetricScalarWhereInput | Prisma.SuccessMetricScalarWhereInput[];
    OR?: Prisma.SuccessMetricScalarWhereInput[];
    NOT?: Prisma.SuccessMetricScalarWhereInput | Prisma.SuccessMetricScalarWhereInput[];
    id?: Prisma.StringFilter<"SuccessMetric"> | string;
    monthId?: Prisma.StringFilter<"SuccessMetric"> | string;
    name?: Prisma.StringFilter<"SuccessMetric"> | string;
    value?: Prisma.FloatFilter<"SuccessMetric"> | number;
    target?: Prisma.FloatFilter<"SuccessMetric"> | number;
    unit?: Prisma.StringNullableFilter<"SuccessMetric"> | string | null;
    position?: Prisma.IntFilter<"SuccessMetric"> | number;
    createdAt?: Prisma.DateTimeFilter<"SuccessMetric"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SuccessMetric"> | Date | string;
};
export type SuccessMetricCreateManyMonthInput = {
    id?: string;
    name: string;
    value?: number;
    target?: number;
    unit?: string | null;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SuccessMetricUpdateWithoutMonthInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.FloatFieldUpdateOperationsInput | number;
    target?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuccessMetricUncheckedUpdateWithoutMonthInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.FloatFieldUpdateOperationsInput | number;
    target?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuccessMetricUncheckedUpdateManyWithoutMonthInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.FloatFieldUpdateOperationsInput | number;
    target?: Prisma.FloatFieldUpdateOperationsInput | number;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SuccessMetricSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    monthId?: boolean;
    name?: boolean;
    value?: boolean;
    target?: boolean;
    unit?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    month?: boolean | Prisma.MonthDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["successMetric"]>;
export type SuccessMetricSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    monthId?: boolean;
    name?: boolean;
    value?: boolean;
    target?: boolean;
    unit?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    month?: boolean | Prisma.MonthDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["successMetric"]>;
export type SuccessMetricSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    monthId?: boolean;
    name?: boolean;
    value?: boolean;
    target?: boolean;
    unit?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    month?: boolean | Prisma.MonthDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["successMetric"]>;
export type SuccessMetricSelectScalar = {
    id?: boolean;
    monthId?: boolean;
    name?: boolean;
    value?: boolean;
    target?: boolean;
    unit?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SuccessMetricOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "monthId" | "name" | "value" | "target" | "unit" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["successMetric"]>;
export type SuccessMetricInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    month?: boolean | Prisma.MonthDefaultArgs<ExtArgs>;
};
export type SuccessMetricIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    month?: boolean | Prisma.MonthDefaultArgs<ExtArgs>;
};
export type SuccessMetricIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    month?: boolean | Prisma.MonthDefaultArgs<ExtArgs>;
};
export type $SuccessMetricPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SuccessMetric";
    objects: {
        month: Prisma.$MonthPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        monthId: string;
        name: string;
        value: number;
        target: number;
        unit: string | null;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["successMetric"]>;
    composites: {};
};
export type SuccessMetricGetPayload<S extends boolean | null | undefined | SuccessMetricDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SuccessMetricPayload, S>;
export type SuccessMetricCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SuccessMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SuccessMetricCountAggregateInputType | true;
};
export interface SuccessMetricDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SuccessMetric'];
        meta: {
            name: 'SuccessMetric';
        };
    };
    /**
     * Find zero or one SuccessMetric that matches the filter.
     * @param {SuccessMetricFindUniqueArgs} args - Arguments to find a SuccessMetric
     * @example
     * // Get one SuccessMetric
     * const successMetric = await prisma.successMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuccessMetricFindUniqueArgs>(args: Prisma.SelectSubset<T, SuccessMetricFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SuccessMetricClient<runtime.Types.Result.GetResult<Prisma.$SuccessMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SuccessMetric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuccessMetricFindUniqueOrThrowArgs} args - Arguments to find a SuccessMetric
     * @example
     * // Get one SuccessMetric
     * const successMetric = await prisma.successMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuccessMetricFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SuccessMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SuccessMetricClient<runtime.Types.Result.GetResult<Prisma.$SuccessMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SuccessMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessMetricFindFirstArgs} args - Arguments to find a SuccessMetric
     * @example
     * // Get one SuccessMetric
     * const successMetric = await prisma.successMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuccessMetricFindFirstArgs>(args?: Prisma.SelectSubset<T, SuccessMetricFindFirstArgs<ExtArgs>>): Prisma.Prisma__SuccessMetricClient<runtime.Types.Result.GetResult<Prisma.$SuccessMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SuccessMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessMetricFindFirstOrThrowArgs} args - Arguments to find a SuccessMetric
     * @example
     * // Get one SuccessMetric
     * const successMetric = await prisma.successMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuccessMetricFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SuccessMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SuccessMetricClient<runtime.Types.Result.GetResult<Prisma.$SuccessMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SuccessMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuccessMetrics
     * const successMetrics = await prisma.successMetric.findMany()
     *
     * // Get first 10 SuccessMetrics
     * const successMetrics = await prisma.successMetric.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const successMetricWithIdOnly = await prisma.successMetric.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SuccessMetricFindManyArgs>(args?: Prisma.SelectSubset<T, SuccessMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuccessMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SuccessMetric.
     * @param {SuccessMetricCreateArgs} args - Arguments to create a SuccessMetric.
     * @example
     * // Create one SuccessMetric
     * const SuccessMetric = await prisma.successMetric.create({
     *   data: {
     *     // ... data to create a SuccessMetric
     *   }
     * })
     *
     */
    create<T extends SuccessMetricCreateArgs>(args: Prisma.SelectSubset<T, SuccessMetricCreateArgs<ExtArgs>>): Prisma.Prisma__SuccessMetricClient<runtime.Types.Result.GetResult<Prisma.$SuccessMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SuccessMetrics.
     * @param {SuccessMetricCreateManyArgs} args - Arguments to create many SuccessMetrics.
     * @example
     * // Create many SuccessMetrics
     * const successMetric = await prisma.successMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SuccessMetricCreateManyArgs>(args?: Prisma.SelectSubset<T, SuccessMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SuccessMetrics and returns the data saved in the database.
     * @param {SuccessMetricCreateManyAndReturnArgs} args - Arguments to create many SuccessMetrics.
     * @example
     * // Create many SuccessMetrics
     * const successMetric = await prisma.successMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SuccessMetrics and only return the `id`
     * const successMetricWithIdOnly = await prisma.successMetric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SuccessMetricCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SuccessMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuccessMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SuccessMetric.
     * @param {SuccessMetricDeleteArgs} args - Arguments to delete one SuccessMetric.
     * @example
     * // Delete one SuccessMetric
     * const SuccessMetric = await prisma.successMetric.delete({
     *   where: {
     *     // ... filter to delete one SuccessMetric
     *   }
     * })
     *
     */
    delete<T extends SuccessMetricDeleteArgs>(args: Prisma.SelectSubset<T, SuccessMetricDeleteArgs<ExtArgs>>): Prisma.Prisma__SuccessMetricClient<runtime.Types.Result.GetResult<Prisma.$SuccessMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SuccessMetric.
     * @param {SuccessMetricUpdateArgs} args - Arguments to update one SuccessMetric.
     * @example
     * // Update one SuccessMetric
     * const successMetric = await prisma.successMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SuccessMetricUpdateArgs>(args: Prisma.SelectSubset<T, SuccessMetricUpdateArgs<ExtArgs>>): Prisma.Prisma__SuccessMetricClient<runtime.Types.Result.GetResult<Prisma.$SuccessMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SuccessMetrics.
     * @param {SuccessMetricDeleteManyArgs} args - Arguments to filter SuccessMetrics to delete.
     * @example
     * // Delete a few SuccessMetrics
     * const { count } = await prisma.successMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SuccessMetricDeleteManyArgs>(args?: Prisma.SelectSubset<T, SuccessMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SuccessMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuccessMetrics
     * const successMetric = await prisma.successMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SuccessMetricUpdateManyArgs>(args: Prisma.SelectSubset<T, SuccessMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SuccessMetrics and returns the data updated in the database.
     * @param {SuccessMetricUpdateManyAndReturnArgs} args - Arguments to update many SuccessMetrics.
     * @example
     * // Update many SuccessMetrics
     * const successMetric = await prisma.successMetric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SuccessMetrics and only return the `id`
     * const successMetricWithIdOnly = await prisma.successMetric.updateManyAndReturn({
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
    updateManyAndReturn<T extends SuccessMetricUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SuccessMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuccessMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SuccessMetric.
     * @param {SuccessMetricUpsertArgs} args - Arguments to update or create a SuccessMetric.
     * @example
     * // Update or create a SuccessMetric
     * const successMetric = await prisma.successMetric.upsert({
     *   create: {
     *     // ... data to create a SuccessMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuccessMetric we want to update
     *   }
     * })
     */
    upsert<T extends SuccessMetricUpsertArgs>(args: Prisma.SelectSubset<T, SuccessMetricUpsertArgs<ExtArgs>>): Prisma.Prisma__SuccessMetricClient<runtime.Types.Result.GetResult<Prisma.$SuccessMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SuccessMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessMetricCountArgs} args - Arguments to filter SuccessMetrics to count.
     * @example
     * // Count the number of SuccessMetrics
     * const count = await prisma.successMetric.count({
     *   where: {
     *     // ... the filter for the SuccessMetrics we want to count
     *   }
     * })
    **/
    count<T extends SuccessMetricCountArgs>(args?: Prisma.Subset<T, SuccessMetricCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SuccessMetricCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SuccessMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuccessMetricAggregateArgs>(args: Prisma.Subset<T, SuccessMetricAggregateArgs>): Prisma.PrismaPromise<GetSuccessMetricAggregateType<T>>;
    /**
     * Group by SuccessMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessMetricGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SuccessMetricGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SuccessMetricGroupByArgs['orderBy'];
    } : {
        orderBy?: SuccessMetricGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SuccessMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuccessMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SuccessMetric model
     */
    readonly fields: SuccessMetricFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SuccessMetric.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SuccessMetricClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    month<T extends Prisma.MonthDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MonthDefaultArgs<ExtArgs>>): Prisma.Prisma__MonthClient<runtime.Types.Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SuccessMetric model
 */
export interface SuccessMetricFieldRefs {
    readonly id: Prisma.FieldRef<"SuccessMetric", 'String'>;
    readonly monthId: Prisma.FieldRef<"SuccessMetric", 'String'>;
    readonly name: Prisma.FieldRef<"SuccessMetric", 'String'>;
    readonly value: Prisma.FieldRef<"SuccessMetric", 'Float'>;
    readonly target: Prisma.FieldRef<"SuccessMetric", 'Float'>;
    readonly unit: Prisma.FieldRef<"SuccessMetric", 'String'>;
    readonly position: Prisma.FieldRef<"SuccessMetric", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"SuccessMetric", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SuccessMetric", 'DateTime'>;
}
/**
 * SuccessMetric findUnique
 */
export type SuccessMetricFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessMetric
     */
    select?: Prisma.SuccessMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuccessMetric
     */
    omit?: Prisma.SuccessMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuccessMetricInclude<ExtArgs> | null;
    /**
     * Filter, which SuccessMetric to fetch.
     */
    where: Prisma.SuccessMetricWhereUniqueInput;
};
/**
 * SuccessMetric findUniqueOrThrow
 */
export type SuccessMetricFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessMetric
     */
    select?: Prisma.SuccessMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuccessMetric
     */
    omit?: Prisma.SuccessMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuccessMetricInclude<ExtArgs> | null;
    /**
     * Filter, which SuccessMetric to fetch.
     */
    where: Prisma.SuccessMetricWhereUniqueInput;
};
/**
 * SuccessMetric findFirst
 */
export type SuccessMetricFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessMetric
     */
    select?: Prisma.SuccessMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuccessMetric
     */
    omit?: Prisma.SuccessMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuccessMetricInclude<ExtArgs> | null;
    /**
     * Filter, which SuccessMetric to fetch.
     */
    where?: Prisma.SuccessMetricWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SuccessMetrics to fetch.
     */
    orderBy?: Prisma.SuccessMetricOrderByWithRelationInput | Prisma.SuccessMetricOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SuccessMetrics.
     */
    cursor?: Prisma.SuccessMetricWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SuccessMetrics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SuccessMetrics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SuccessMetrics.
     */
    distinct?: Prisma.SuccessMetricScalarFieldEnum | Prisma.SuccessMetricScalarFieldEnum[];
};
/**
 * SuccessMetric findFirstOrThrow
 */
export type SuccessMetricFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessMetric
     */
    select?: Prisma.SuccessMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuccessMetric
     */
    omit?: Prisma.SuccessMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuccessMetricInclude<ExtArgs> | null;
    /**
     * Filter, which SuccessMetric to fetch.
     */
    where?: Prisma.SuccessMetricWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SuccessMetrics to fetch.
     */
    orderBy?: Prisma.SuccessMetricOrderByWithRelationInput | Prisma.SuccessMetricOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SuccessMetrics.
     */
    cursor?: Prisma.SuccessMetricWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SuccessMetrics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SuccessMetrics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SuccessMetrics.
     */
    distinct?: Prisma.SuccessMetricScalarFieldEnum | Prisma.SuccessMetricScalarFieldEnum[];
};
/**
 * SuccessMetric findMany
 */
export type SuccessMetricFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessMetric
     */
    select?: Prisma.SuccessMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuccessMetric
     */
    omit?: Prisma.SuccessMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuccessMetricInclude<ExtArgs> | null;
    /**
     * Filter, which SuccessMetrics to fetch.
     */
    where?: Prisma.SuccessMetricWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SuccessMetrics to fetch.
     */
    orderBy?: Prisma.SuccessMetricOrderByWithRelationInput | Prisma.SuccessMetricOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SuccessMetrics.
     */
    cursor?: Prisma.SuccessMetricWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SuccessMetrics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SuccessMetrics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SuccessMetrics.
     */
    distinct?: Prisma.SuccessMetricScalarFieldEnum | Prisma.SuccessMetricScalarFieldEnum[];
};
/**
 * SuccessMetric create
 */
export type SuccessMetricCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessMetric
     */
    select?: Prisma.SuccessMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuccessMetric
     */
    omit?: Prisma.SuccessMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuccessMetricInclude<ExtArgs> | null;
    /**
     * The data needed to create a SuccessMetric.
     */
    data: Prisma.XOR<Prisma.SuccessMetricCreateInput, Prisma.SuccessMetricUncheckedCreateInput>;
};
/**
 * SuccessMetric createMany
 */
export type SuccessMetricCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuccessMetrics.
     */
    data: Prisma.SuccessMetricCreateManyInput | Prisma.SuccessMetricCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SuccessMetric createManyAndReturn
 */
export type SuccessMetricCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessMetric
     */
    select?: Prisma.SuccessMetricSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SuccessMetric
     */
    omit?: Prisma.SuccessMetricOmit<ExtArgs> | null;
    /**
     * The data used to create many SuccessMetrics.
     */
    data: Prisma.SuccessMetricCreateManyInput | Prisma.SuccessMetricCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuccessMetricIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SuccessMetric update
 */
export type SuccessMetricUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessMetric
     */
    select?: Prisma.SuccessMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuccessMetric
     */
    omit?: Prisma.SuccessMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuccessMetricInclude<ExtArgs> | null;
    /**
     * The data needed to update a SuccessMetric.
     */
    data: Prisma.XOR<Prisma.SuccessMetricUpdateInput, Prisma.SuccessMetricUncheckedUpdateInput>;
    /**
     * Choose, which SuccessMetric to update.
     */
    where: Prisma.SuccessMetricWhereUniqueInput;
};
/**
 * SuccessMetric updateMany
 */
export type SuccessMetricUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SuccessMetrics.
     */
    data: Prisma.XOR<Prisma.SuccessMetricUpdateManyMutationInput, Prisma.SuccessMetricUncheckedUpdateManyInput>;
    /**
     * Filter which SuccessMetrics to update
     */
    where?: Prisma.SuccessMetricWhereInput;
    /**
     * Limit how many SuccessMetrics to update.
     */
    limit?: number;
};
/**
 * SuccessMetric updateManyAndReturn
 */
export type SuccessMetricUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessMetric
     */
    select?: Prisma.SuccessMetricSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SuccessMetric
     */
    omit?: Prisma.SuccessMetricOmit<ExtArgs> | null;
    /**
     * The data used to update SuccessMetrics.
     */
    data: Prisma.XOR<Prisma.SuccessMetricUpdateManyMutationInput, Prisma.SuccessMetricUncheckedUpdateManyInput>;
    /**
     * Filter which SuccessMetrics to update
     */
    where?: Prisma.SuccessMetricWhereInput;
    /**
     * Limit how many SuccessMetrics to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuccessMetricIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SuccessMetric upsert
 */
export type SuccessMetricUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessMetric
     */
    select?: Prisma.SuccessMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuccessMetric
     */
    omit?: Prisma.SuccessMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuccessMetricInclude<ExtArgs> | null;
    /**
     * The filter to search for the SuccessMetric to update in case it exists.
     */
    where: Prisma.SuccessMetricWhereUniqueInput;
    /**
     * In case the SuccessMetric found by the `where` argument doesn't exist, create a new SuccessMetric with this data.
     */
    create: Prisma.XOR<Prisma.SuccessMetricCreateInput, Prisma.SuccessMetricUncheckedCreateInput>;
    /**
     * In case the SuccessMetric was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SuccessMetricUpdateInput, Prisma.SuccessMetricUncheckedUpdateInput>;
};
/**
 * SuccessMetric delete
 */
export type SuccessMetricDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessMetric
     */
    select?: Prisma.SuccessMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuccessMetric
     */
    omit?: Prisma.SuccessMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuccessMetricInclude<ExtArgs> | null;
    /**
     * Filter which SuccessMetric to delete.
     */
    where: Prisma.SuccessMetricWhereUniqueInput;
};
/**
 * SuccessMetric deleteMany
 */
export type SuccessMetricDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SuccessMetrics to delete
     */
    where?: Prisma.SuccessMetricWhereInput;
    /**
     * Limit how many SuccessMetrics to delete.
     */
    limit?: number;
};
/**
 * SuccessMetric without action
 */
export type SuccessMetricDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessMetric
     */
    select?: Prisma.SuccessMetricSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuccessMetric
     */
    omit?: Prisma.SuccessMetricOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuccessMetricInclude<ExtArgs> | null;
};
//# sourceMappingURL=SuccessMetric.d.ts.map