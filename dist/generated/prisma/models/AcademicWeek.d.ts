import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AcademicWeek
 *
 */
export type AcademicWeekModel = runtime.Types.Result.DefaultSelection<Prisma.$AcademicWeekPayload>;
export type AggregateAcademicWeek = {
    _count: AcademicWeekCountAggregateOutputType | null;
    _avg: AcademicWeekAvgAggregateOutputType | null;
    _sum: AcademicWeekSumAggregateOutputType | null;
    _min: AcademicWeekMinAggregateOutputType | null;
    _max: AcademicWeekMaxAggregateOutputType | null;
};
export type AcademicWeekAvgAggregateOutputType = {
    weekNumber: number | null;
    hoursSpent: number | null;
};
export type AcademicWeekSumAggregateOutputType = {
    weekNumber: number | null;
    hoursSpent: number | null;
};
export type AcademicWeekMinAggregateOutputType = {
    id: string | null;
    academicId: string | null;
    weekNumber: number | null;
    hoursSpent: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AcademicWeekMaxAggregateOutputType = {
    id: string | null;
    academicId: string | null;
    weekNumber: number | null;
    hoursSpent: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AcademicWeekCountAggregateOutputType = {
    id: number;
    academicId: number;
    weekNumber: number;
    hoursSpent: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AcademicWeekAvgAggregateInputType = {
    weekNumber?: true;
    hoursSpent?: true;
};
export type AcademicWeekSumAggregateInputType = {
    weekNumber?: true;
    hoursSpent?: true;
};
export type AcademicWeekMinAggregateInputType = {
    id?: true;
    academicId?: true;
    weekNumber?: true;
    hoursSpent?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AcademicWeekMaxAggregateInputType = {
    id?: true;
    academicId?: true;
    weekNumber?: true;
    hoursSpent?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AcademicWeekCountAggregateInputType = {
    id?: true;
    academicId?: true;
    weekNumber?: true;
    hoursSpent?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AcademicWeekAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicWeek to aggregate.
     */
    where?: Prisma.AcademicWeekWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AcademicWeeks to fetch.
     */
    orderBy?: Prisma.AcademicWeekOrderByWithRelationInput | Prisma.AcademicWeekOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AcademicWeekWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AcademicWeeks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AcademicWeeks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AcademicWeeks
    **/
    _count?: true | AcademicWeekCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AcademicWeekAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AcademicWeekSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AcademicWeekMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AcademicWeekMaxAggregateInputType;
};
export type GetAcademicWeekAggregateType<T extends AcademicWeekAggregateArgs> = {
    [P in keyof T & keyof AggregateAcademicWeek]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAcademicWeek[P]> : Prisma.GetScalarType<T[P], AggregateAcademicWeek[P]>;
};
export type AcademicWeekGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AcademicWeekWhereInput;
    orderBy?: Prisma.AcademicWeekOrderByWithAggregationInput | Prisma.AcademicWeekOrderByWithAggregationInput[];
    by: Prisma.AcademicWeekScalarFieldEnum[] | Prisma.AcademicWeekScalarFieldEnum;
    having?: Prisma.AcademicWeekScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AcademicWeekCountAggregateInputType | true;
    _avg?: AcademicWeekAvgAggregateInputType;
    _sum?: AcademicWeekSumAggregateInputType;
    _min?: AcademicWeekMinAggregateInputType;
    _max?: AcademicWeekMaxAggregateInputType;
};
export type AcademicWeekGroupByOutputType = {
    id: string;
    academicId: string;
    weekNumber: number;
    hoursSpent: number;
    createdAt: Date;
    updatedAt: Date;
    _count: AcademicWeekCountAggregateOutputType | null;
    _avg: AcademicWeekAvgAggregateOutputType | null;
    _sum: AcademicWeekSumAggregateOutputType | null;
    _min: AcademicWeekMinAggregateOutputType | null;
    _max: AcademicWeekMaxAggregateOutputType | null;
};
export type GetAcademicWeekGroupByPayload<T extends AcademicWeekGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AcademicWeekGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AcademicWeekGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AcademicWeekGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AcademicWeekGroupByOutputType[P]>;
}>>;
export type AcademicWeekWhereInput = {
    AND?: Prisma.AcademicWeekWhereInput | Prisma.AcademicWeekWhereInput[];
    OR?: Prisma.AcademicWeekWhereInput[];
    NOT?: Prisma.AcademicWeekWhereInput | Prisma.AcademicWeekWhereInput[];
    id?: Prisma.StringFilter<"AcademicWeek"> | string;
    academicId?: Prisma.StringFilter<"AcademicWeek"> | string;
    weekNumber?: Prisma.IntFilter<"AcademicWeek"> | number;
    hoursSpent?: Prisma.FloatFilter<"AcademicWeek"> | number;
    createdAt?: Prisma.DateTimeFilter<"AcademicWeek"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AcademicWeek"> | Date | string;
    academic?: Prisma.XOR<Prisma.AcademicScalarRelationFilter, Prisma.AcademicWhereInput>;
};
export type AcademicWeekOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    academicId?: Prisma.SortOrder;
    weekNumber?: Prisma.SortOrder;
    hoursSpent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    academic?: Prisma.AcademicOrderByWithRelationInput;
};
export type AcademicWeekWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    academicId_weekNumber?: Prisma.AcademicWeekAcademicIdWeekNumberCompoundUniqueInput;
    AND?: Prisma.AcademicWeekWhereInput | Prisma.AcademicWeekWhereInput[];
    OR?: Prisma.AcademicWeekWhereInput[];
    NOT?: Prisma.AcademicWeekWhereInput | Prisma.AcademicWeekWhereInput[];
    academicId?: Prisma.StringFilter<"AcademicWeek"> | string;
    weekNumber?: Prisma.IntFilter<"AcademicWeek"> | number;
    hoursSpent?: Prisma.FloatFilter<"AcademicWeek"> | number;
    createdAt?: Prisma.DateTimeFilter<"AcademicWeek"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AcademicWeek"> | Date | string;
    academic?: Prisma.XOR<Prisma.AcademicScalarRelationFilter, Prisma.AcademicWhereInput>;
}, "id" | "academicId_weekNumber">;
export type AcademicWeekOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    academicId?: Prisma.SortOrder;
    weekNumber?: Prisma.SortOrder;
    hoursSpent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AcademicWeekCountOrderByAggregateInput;
    _avg?: Prisma.AcademicWeekAvgOrderByAggregateInput;
    _max?: Prisma.AcademicWeekMaxOrderByAggregateInput;
    _min?: Prisma.AcademicWeekMinOrderByAggregateInput;
    _sum?: Prisma.AcademicWeekSumOrderByAggregateInput;
};
export type AcademicWeekScalarWhereWithAggregatesInput = {
    AND?: Prisma.AcademicWeekScalarWhereWithAggregatesInput | Prisma.AcademicWeekScalarWhereWithAggregatesInput[];
    OR?: Prisma.AcademicWeekScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AcademicWeekScalarWhereWithAggregatesInput | Prisma.AcademicWeekScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AcademicWeek"> | string;
    academicId?: Prisma.StringWithAggregatesFilter<"AcademicWeek"> | string;
    weekNumber?: Prisma.IntWithAggregatesFilter<"AcademicWeek"> | number;
    hoursSpent?: Prisma.FloatWithAggregatesFilter<"AcademicWeek"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AcademicWeek"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AcademicWeek"> | Date | string;
};
export type AcademicWeekCreateInput = {
    id?: string;
    weekNumber: number;
    hoursSpent?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    academic: Prisma.AcademicCreateNestedOneWithoutWeeklyLogsInput;
};
export type AcademicWeekUncheckedCreateInput = {
    id?: string;
    academicId: string;
    weekNumber: number;
    hoursSpent?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AcademicWeekUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weekNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    hoursSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    academic?: Prisma.AcademicUpdateOneRequiredWithoutWeeklyLogsNestedInput;
};
export type AcademicWeekUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicId?: Prisma.StringFieldUpdateOperationsInput | string;
    weekNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    hoursSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcademicWeekCreateManyInput = {
    id?: string;
    academicId: string;
    weekNumber: number;
    hoursSpent?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AcademicWeekUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weekNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    hoursSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcademicWeekUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicId?: Prisma.StringFieldUpdateOperationsInput | string;
    weekNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    hoursSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcademicWeekListRelationFilter = {
    every?: Prisma.AcademicWeekWhereInput;
    some?: Prisma.AcademicWeekWhereInput;
    none?: Prisma.AcademicWeekWhereInput;
};
export type AcademicWeekOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AcademicWeekAcademicIdWeekNumberCompoundUniqueInput = {
    academicId: string;
    weekNumber: number;
};
export type AcademicWeekCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    academicId?: Prisma.SortOrder;
    weekNumber?: Prisma.SortOrder;
    hoursSpent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AcademicWeekAvgOrderByAggregateInput = {
    weekNumber?: Prisma.SortOrder;
    hoursSpent?: Prisma.SortOrder;
};
export type AcademicWeekMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    academicId?: Prisma.SortOrder;
    weekNumber?: Prisma.SortOrder;
    hoursSpent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AcademicWeekMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    academicId?: Prisma.SortOrder;
    weekNumber?: Prisma.SortOrder;
    hoursSpent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AcademicWeekSumOrderByAggregateInput = {
    weekNumber?: Prisma.SortOrder;
    hoursSpent?: Prisma.SortOrder;
};
export type AcademicWeekCreateNestedManyWithoutAcademicInput = {
    create?: Prisma.XOR<Prisma.AcademicWeekCreateWithoutAcademicInput, Prisma.AcademicWeekUncheckedCreateWithoutAcademicInput> | Prisma.AcademicWeekCreateWithoutAcademicInput[] | Prisma.AcademicWeekUncheckedCreateWithoutAcademicInput[];
    connectOrCreate?: Prisma.AcademicWeekCreateOrConnectWithoutAcademicInput | Prisma.AcademicWeekCreateOrConnectWithoutAcademicInput[];
    createMany?: Prisma.AcademicWeekCreateManyAcademicInputEnvelope;
    connect?: Prisma.AcademicWeekWhereUniqueInput | Prisma.AcademicWeekWhereUniqueInput[];
};
export type AcademicWeekUncheckedCreateNestedManyWithoutAcademicInput = {
    create?: Prisma.XOR<Prisma.AcademicWeekCreateWithoutAcademicInput, Prisma.AcademicWeekUncheckedCreateWithoutAcademicInput> | Prisma.AcademicWeekCreateWithoutAcademicInput[] | Prisma.AcademicWeekUncheckedCreateWithoutAcademicInput[];
    connectOrCreate?: Prisma.AcademicWeekCreateOrConnectWithoutAcademicInput | Prisma.AcademicWeekCreateOrConnectWithoutAcademicInput[];
    createMany?: Prisma.AcademicWeekCreateManyAcademicInputEnvelope;
    connect?: Prisma.AcademicWeekWhereUniqueInput | Prisma.AcademicWeekWhereUniqueInput[];
};
export type AcademicWeekUpdateManyWithoutAcademicNestedInput = {
    create?: Prisma.XOR<Prisma.AcademicWeekCreateWithoutAcademicInput, Prisma.AcademicWeekUncheckedCreateWithoutAcademicInput> | Prisma.AcademicWeekCreateWithoutAcademicInput[] | Prisma.AcademicWeekUncheckedCreateWithoutAcademicInput[];
    connectOrCreate?: Prisma.AcademicWeekCreateOrConnectWithoutAcademicInput | Prisma.AcademicWeekCreateOrConnectWithoutAcademicInput[];
    upsert?: Prisma.AcademicWeekUpsertWithWhereUniqueWithoutAcademicInput | Prisma.AcademicWeekUpsertWithWhereUniqueWithoutAcademicInput[];
    createMany?: Prisma.AcademicWeekCreateManyAcademicInputEnvelope;
    set?: Prisma.AcademicWeekWhereUniqueInput | Prisma.AcademicWeekWhereUniqueInput[];
    disconnect?: Prisma.AcademicWeekWhereUniqueInput | Prisma.AcademicWeekWhereUniqueInput[];
    delete?: Prisma.AcademicWeekWhereUniqueInput | Prisma.AcademicWeekWhereUniqueInput[];
    connect?: Prisma.AcademicWeekWhereUniqueInput | Prisma.AcademicWeekWhereUniqueInput[];
    update?: Prisma.AcademicWeekUpdateWithWhereUniqueWithoutAcademicInput | Prisma.AcademicWeekUpdateWithWhereUniqueWithoutAcademicInput[];
    updateMany?: Prisma.AcademicWeekUpdateManyWithWhereWithoutAcademicInput | Prisma.AcademicWeekUpdateManyWithWhereWithoutAcademicInput[];
    deleteMany?: Prisma.AcademicWeekScalarWhereInput | Prisma.AcademicWeekScalarWhereInput[];
};
export type AcademicWeekUncheckedUpdateManyWithoutAcademicNestedInput = {
    create?: Prisma.XOR<Prisma.AcademicWeekCreateWithoutAcademicInput, Prisma.AcademicWeekUncheckedCreateWithoutAcademicInput> | Prisma.AcademicWeekCreateWithoutAcademicInput[] | Prisma.AcademicWeekUncheckedCreateWithoutAcademicInput[];
    connectOrCreate?: Prisma.AcademicWeekCreateOrConnectWithoutAcademicInput | Prisma.AcademicWeekCreateOrConnectWithoutAcademicInput[];
    upsert?: Prisma.AcademicWeekUpsertWithWhereUniqueWithoutAcademicInput | Prisma.AcademicWeekUpsertWithWhereUniqueWithoutAcademicInput[];
    createMany?: Prisma.AcademicWeekCreateManyAcademicInputEnvelope;
    set?: Prisma.AcademicWeekWhereUniqueInput | Prisma.AcademicWeekWhereUniqueInput[];
    disconnect?: Prisma.AcademicWeekWhereUniqueInput | Prisma.AcademicWeekWhereUniqueInput[];
    delete?: Prisma.AcademicWeekWhereUniqueInput | Prisma.AcademicWeekWhereUniqueInput[];
    connect?: Prisma.AcademicWeekWhereUniqueInput | Prisma.AcademicWeekWhereUniqueInput[];
    update?: Prisma.AcademicWeekUpdateWithWhereUniqueWithoutAcademicInput | Prisma.AcademicWeekUpdateWithWhereUniqueWithoutAcademicInput[];
    updateMany?: Prisma.AcademicWeekUpdateManyWithWhereWithoutAcademicInput | Prisma.AcademicWeekUpdateManyWithWhereWithoutAcademicInput[];
    deleteMany?: Prisma.AcademicWeekScalarWhereInput | Prisma.AcademicWeekScalarWhereInput[];
};
export type AcademicWeekCreateWithoutAcademicInput = {
    id?: string;
    weekNumber: number;
    hoursSpent?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AcademicWeekUncheckedCreateWithoutAcademicInput = {
    id?: string;
    weekNumber: number;
    hoursSpent?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AcademicWeekCreateOrConnectWithoutAcademicInput = {
    where: Prisma.AcademicWeekWhereUniqueInput;
    create: Prisma.XOR<Prisma.AcademicWeekCreateWithoutAcademicInput, Prisma.AcademicWeekUncheckedCreateWithoutAcademicInput>;
};
export type AcademicWeekCreateManyAcademicInputEnvelope = {
    data: Prisma.AcademicWeekCreateManyAcademicInput | Prisma.AcademicWeekCreateManyAcademicInput[];
    skipDuplicates?: boolean;
};
export type AcademicWeekUpsertWithWhereUniqueWithoutAcademicInput = {
    where: Prisma.AcademicWeekWhereUniqueInput;
    update: Prisma.XOR<Prisma.AcademicWeekUpdateWithoutAcademicInput, Prisma.AcademicWeekUncheckedUpdateWithoutAcademicInput>;
    create: Prisma.XOR<Prisma.AcademicWeekCreateWithoutAcademicInput, Prisma.AcademicWeekUncheckedCreateWithoutAcademicInput>;
};
export type AcademicWeekUpdateWithWhereUniqueWithoutAcademicInput = {
    where: Prisma.AcademicWeekWhereUniqueInput;
    data: Prisma.XOR<Prisma.AcademicWeekUpdateWithoutAcademicInput, Prisma.AcademicWeekUncheckedUpdateWithoutAcademicInput>;
};
export type AcademicWeekUpdateManyWithWhereWithoutAcademicInput = {
    where: Prisma.AcademicWeekScalarWhereInput;
    data: Prisma.XOR<Prisma.AcademicWeekUpdateManyMutationInput, Prisma.AcademicWeekUncheckedUpdateManyWithoutAcademicInput>;
};
export type AcademicWeekScalarWhereInput = {
    AND?: Prisma.AcademicWeekScalarWhereInput | Prisma.AcademicWeekScalarWhereInput[];
    OR?: Prisma.AcademicWeekScalarWhereInput[];
    NOT?: Prisma.AcademicWeekScalarWhereInput | Prisma.AcademicWeekScalarWhereInput[];
    id?: Prisma.StringFilter<"AcademicWeek"> | string;
    academicId?: Prisma.StringFilter<"AcademicWeek"> | string;
    weekNumber?: Prisma.IntFilter<"AcademicWeek"> | number;
    hoursSpent?: Prisma.FloatFilter<"AcademicWeek"> | number;
    createdAt?: Prisma.DateTimeFilter<"AcademicWeek"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AcademicWeek"> | Date | string;
};
export type AcademicWeekCreateManyAcademicInput = {
    id?: string;
    weekNumber: number;
    hoursSpent?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AcademicWeekUpdateWithoutAcademicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weekNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    hoursSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcademicWeekUncheckedUpdateWithoutAcademicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weekNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    hoursSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcademicWeekUncheckedUpdateManyWithoutAcademicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weekNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    hoursSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcademicWeekSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    academicId?: boolean;
    weekNumber?: boolean;
    hoursSpent?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    academic?: boolean | Prisma.AcademicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["academicWeek"]>;
export type AcademicWeekSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    academicId?: boolean;
    weekNumber?: boolean;
    hoursSpent?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    academic?: boolean | Prisma.AcademicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["academicWeek"]>;
export type AcademicWeekSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    academicId?: boolean;
    weekNumber?: boolean;
    hoursSpent?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    academic?: boolean | Prisma.AcademicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["academicWeek"]>;
export type AcademicWeekSelectScalar = {
    id?: boolean;
    academicId?: boolean;
    weekNumber?: boolean;
    hoursSpent?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AcademicWeekOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "academicId" | "weekNumber" | "hoursSpent" | "createdAt" | "updatedAt", ExtArgs["result"]["academicWeek"]>;
export type AcademicWeekInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    academic?: boolean | Prisma.AcademicDefaultArgs<ExtArgs>;
};
export type AcademicWeekIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    academic?: boolean | Prisma.AcademicDefaultArgs<ExtArgs>;
};
export type AcademicWeekIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    academic?: boolean | Prisma.AcademicDefaultArgs<ExtArgs>;
};
export type $AcademicWeekPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AcademicWeek";
    objects: {
        academic: Prisma.$AcademicPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        academicId: string;
        weekNumber: number;
        hoursSpent: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["academicWeek"]>;
    composites: {};
};
export type AcademicWeekGetPayload<S extends boolean | null | undefined | AcademicWeekDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AcademicWeekPayload, S>;
export type AcademicWeekCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AcademicWeekFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AcademicWeekCountAggregateInputType | true;
};
export interface AcademicWeekDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AcademicWeek'];
        meta: {
            name: 'AcademicWeek';
        };
    };
    /**
     * Find zero or one AcademicWeek that matches the filter.
     * @param {AcademicWeekFindUniqueArgs} args - Arguments to find a AcademicWeek
     * @example
     * // Get one AcademicWeek
     * const academicWeek = await prisma.academicWeek.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcademicWeekFindUniqueArgs>(args: Prisma.SelectSubset<T, AcademicWeekFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AcademicWeekClient<runtime.Types.Result.GetResult<Prisma.$AcademicWeekPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AcademicWeek that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcademicWeekFindUniqueOrThrowArgs} args - Arguments to find a AcademicWeek
     * @example
     * // Get one AcademicWeek
     * const academicWeek = await prisma.academicWeek.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcademicWeekFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AcademicWeekFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AcademicWeekClient<runtime.Types.Result.GetResult<Prisma.$AcademicWeekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AcademicWeek that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicWeekFindFirstArgs} args - Arguments to find a AcademicWeek
     * @example
     * // Get one AcademicWeek
     * const academicWeek = await prisma.academicWeek.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcademicWeekFindFirstArgs>(args?: Prisma.SelectSubset<T, AcademicWeekFindFirstArgs<ExtArgs>>): Prisma.Prisma__AcademicWeekClient<runtime.Types.Result.GetResult<Prisma.$AcademicWeekPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AcademicWeek that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicWeekFindFirstOrThrowArgs} args - Arguments to find a AcademicWeek
     * @example
     * // Get one AcademicWeek
     * const academicWeek = await prisma.academicWeek.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcademicWeekFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AcademicWeekFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AcademicWeekClient<runtime.Types.Result.GetResult<Prisma.$AcademicWeekPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AcademicWeeks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicWeekFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcademicWeeks
     * const academicWeeks = await prisma.academicWeek.findMany()
     *
     * // Get first 10 AcademicWeeks
     * const academicWeeks = await prisma.academicWeek.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const academicWeekWithIdOnly = await prisma.academicWeek.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AcademicWeekFindManyArgs>(args?: Prisma.SelectSubset<T, AcademicWeekFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcademicWeekPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AcademicWeek.
     * @param {AcademicWeekCreateArgs} args - Arguments to create a AcademicWeek.
     * @example
     * // Create one AcademicWeek
     * const AcademicWeek = await prisma.academicWeek.create({
     *   data: {
     *     // ... data to create a AcademicWeek
     *   }
     * })
     *
     */
    create<T extends AcademicWeekCreateArgs>(args: Prisma.SelectSubset<T, AcademicWeekCreateArgs<ExtArgs>>): Prisma.Prisma__AcademicWeekClient<runtime.Types.Result.GetResult<Prisma.$AcademicWeekPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AcademicWeeks.
     * @param {AcademicWeekCreateManyArgs} args - Arguments to create many AcademicWeeks.
     * @example
     * // Create many AcademicWeeks
     * const academicWeek = await prisma.academicWeek.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AcademicWeekCreateManyArgs>(args?: Prisma.SelectSubset<T, AcademicWeekCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AcademicWeeks and returns the data saved in the database.
     * @param {AcademicWeekCreateManyAndReturnArgs} args - Arguments to create many AcademicWeeks.
     * @example
     * // Create many AcademicWeeks
     * const academicWeek = await prisma.academicWeek.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AcademicWeeks and only return the `id`
     * const academicWeekWithIdOnly = await prisma.academicWeek.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AcademicWeekCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AcademicWeekCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcademicWeekPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AcademicWeek.
     * @param {AcademicWeekDeleteArgs} args - Arguments to delete one AcademicWeek.
     * @example
     * // Delete one AcademicWeek
     * const AcademicWeek = await prisma.academicWeek.delete({
     *   where: {
     *     // ... filter to delete one AcademicWeek
     *   }
     * })
     *
     */
    delete<T extends AcademicWeekDeleteArgs>(args: Prisma.SelectSubset<T, AcademicWeekDeleteArgs<ExtArgs>>): Prisma.Prisma__AcademicWeekClient<runtime.Types.Result.GetResult<Prisma.$AcademicWeekPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AcademicWeek.
     * @param {AcademicWeekUpdateArgs} args - Arguments to update one AcademicWeek.
     * @example
     * // Update one AcademicWeek
     * const academicWeek = await prisma.academicWeek.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AcademicWeekUpdateArgs>(args: Prisma.SelectSubset<T, AcademicWeekUpdateArgs<ExtArgs>>): Prisma.Prisma__AcademicWeekClient<runtime.Types.Result.GetResult<Prisma.$AcademicWeekPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AcademicWeeks.
     * @param {AcademicWeekDeleteManyArgs} args - Arguments to filter AcademicWeeks to delete.
     * @example
     * // Delete a few AcademicWeeks
     * const { count } = await prisma.academicWeek.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AcademicWeekDeleteManyArgs>(args?: Prisma.SelectSubset<T, AcademicWeekDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AcademicWeeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicWeekUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcademicWeeks
     * const academicWeek = await prisma.academicWeek.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AcademicWeekUpdateManyArgs>(args: Prisma.SelectSubset<T, AcademicWeekUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AcademicWeeks and returns the data updated in the database.
     * @param {AcademicWeekUpdateManyAndReturnArgs} args - Arguments to update many AcademicWeeks.
     * @example
     * // Update many AcademicWeeks
     * const academicWeek = await prisma.academicWeek.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AcademicWeeks and only return the `id`
     * const academicWeekWithIdOnly = await prisma.academicWeek.updateManyAndReturn({
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
    updateManyAndReturn<T extends AcademicWeekUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AcademicWeekUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcademicWeekPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AcademicWeek.
     * @param {AcademicWeekUpsertArgs} args - Arguments to update or create a AcademicWeek.
     * @example
     * // Update or create a AcademicWeek
     * const academicWeek = await prisma.academicWeek.upsert({
     *   create: {
     *     // ... data to create a AcademicWeek
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcademicWeek we want to update
     *   }
     * })
     */
    upsert<T extends AcademicWeekUpsertArgs>(args: Prisma.SelectSubset<T, AcademicWeekUpsertArgs<ExtArgs>>): Prisma.Prisma__AcademicWeekClient<runtime.Types.Result.GetResult<Prisma.$AcademicWeekPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AcademicWeeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicWeekCountArgs} args - Arguments to filter AcademicWeeks to count.
     * @example
     * // Count the number of AcademicWeeks
     * const count = await prisma.academicWeek.count({
     *   where: {
     *     // ... the filter for the AcademicWeeks we want to count
     *   }
     * })
    **/
    count<T extends AcademicWeekCountArgs>(args?: Prisma.Subset<T, AcademicWeekCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AcademicWeekCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AcademicWeek.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicWeekAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcademicWeekAggregateArgs>(args: Prisma.Subset<T, AcademicWeekAggregateArgs>): Prisma.PrismaPromise<GetAcademicWeekAggregateType<T>>;
    /**
     * Group by AcademicWeek.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicWeekGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AcademicWeekGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AcademicWeekGroupByArgs['orderBy'];
    } : {
        orderBy?: AcademicWeekGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AcademicWeekGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicWeekGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AcademicWeek model
     */
    readonly fields: AcademicWeekFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AcademicWeek.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AcademicWeekClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    academic<T extends Prisma.AcademicDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcademicDefaultArgs<ExtArgs>>): Prisma.Prisma__AcademicClient<runtime.Types.Result.GetResult<Prisma.$AcademicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the AcademicWeek model
 */
export interface AcademicWeekFieldRefs {
    readonly id: Prisma.FieldRef<"AcademicWeek", 'String'>;
    readonly academicId: Prisma.FieldRef<"AcademicWeek", 'String'>;
    readonly weekNumber: Prisma.FieldRef<"AcademicWeek", 'Int'>;
    readonly hoursSpent: Prisma.FieldRef<"AcademicWeek", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"AcademicWeek", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AcademicWeek", 'DateTime'>;
}
/**
 * AcademicWeek findUnique
 */
export type AcademicWeekFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicWeek
     */
    select?: Prisma.AcademicWeekSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AcademicWeek
     */
    omit?: Prisma.AcademicWeekOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcademicWeekInclude<ExtArgs> | null;
    /**
     * Filter, which AcademicWeek to fetch.
     */
    where: Prisma.AcademicWeekWhereUniqueInput;
};
/**
 * AcademicWeek findUniqueOrThrow
 */
export type AcademicWeekFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicWeek
     */
    select?: Prisma.AcademicWeekSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AcademicWeek
     */
    omit?: Prisma.AcademicWeekOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcademicWeekInclude<ExtArgs> | null;
    /**
     * Filter, which AcademicWeek to fetch.
     */
    where: Prisma.AcademicWeekWhereUniqueInput;
};
/**
 * AcademicWeek findFirst
 */
export type AcademicWeekFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicWeek
     */
    select?: Prisma.AcademicWeekSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AcademicWeek
     */
    omit?: Prisma.AcademicWeekOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcademicWeekInclude<ExtArgs> | null;
    /**
     * Filter, which AcademicWeek to fetch.
     */
    where?: Prisma.AcademicWeekWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AcademicWeeks to fetch.
     */
    orderBy?: Prisma.AcademicWeekOrderByWithRelationInput | Prisma.AcademicWeekOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AcademicWeeks.
     */
    cursor?: Prisma.AcademicWeekWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AcademicWeeks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AcademicWeeks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AcademicWeeks.
     */
    distinct?: Prisma.AcademicWeekScalarFieldEnum | Prisma.AcademicWeekScalarFieldEnum[];
};
/**
 * AcademicWeek findFirstOrThrow
 */
export type AcademicWeekFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicWeek
     */
    select?: Prisma.AcademicWeekSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AcademicWeek
     */
    omit?: Prisma.AcademicWeekOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcademicWeekInclude<ExtArgs> | null;
    /**
     * Filter, which AcademicWeek to fetch.
     */
    where?: Prisma.AcademicWeekWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AcademicWeeks to fetch.
     */
    orderBy?: Prisma.AcademicWeekOrderByWithRelationInput | Prisma.AcademicWeekOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AcademicWeeks.
     */
    cursor?: Prisma.AcademicWeekWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AcademicWeeks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AcademicWeeks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AcademicWeeks.
     */
    distinct?: Prisma.AcademicWeekScalarFieldEnum | Prisma.AcademicWeekScalarFieldEnum[];
};
/**
 * AcademicWeek findMany
 */
export type AcademicWeekFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicWeek
     */
    select?: Prisma.AcademicWeekSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AcademicWeek
     */
    omit?: Prisma.AcademicWeekOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcademicWeekInclude<ExtArgs> | null;
    /**
     * Filter, which AcademicWeeks to fetch.
     */
    where?: Prisma.AcademicWeekWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AcademicWeeks to fetch.
     */
    orderBy?: Prisma.AcademicWeekOrderByWithRelationInput | Prisma.AcademicWeekOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AcademicWeeks.
     */
    cursor?: Prisma.AcademicWeekWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AcademicWeeks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AcademicWeeks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AcademicWeeks.
     */
    distinct?: Prisma.AcademicWeekScalarFieldEnum | Prisma.AcademicWeekScalarFieldEnum[];
};
/**
 * AcademicWeek create
 */
export type AcademicWeekCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicWeek
     */
    select?: Prisma.AcademicWeekSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AcademicWeek
     */
    omit?: Prisma.AcademicWeekOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcademicWeekInclude<ExtArgs> | null;
    /**
     * The data needed to create a AcademicWeek.
     */
    data: Prisma.XOR<Prisma.AcademicWeekCreateInput, Prisma.AcademicWeekUncheckedCreateInput>;
};
/**
 * AcademicWeek createMany
 */
export type AcademicWeekCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcademicWeeks.
     */
    data: Prisma.AcademicWeekCreateManyInput | Prisma.AcademicWeekCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AcademicWeek createManyAndReturn
 */
export type AcademicWeekCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicWeek
     */
    select?: Prisma.AcademicWeekSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AcademicWeek
     */
    omit?: Prisma.AcademicWeekOmit<ExtArgs> | null;
    /**
     * The data used to create many AcademicWeeks.
     */
    data: Prisma.AcademicWeekCreateManyInput | Prisma.AcademicWeekCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcademicWeekIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AcademicWeek update
 */
export type AcademicWeekUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicWeek
     */
    select?: Prisma.AcademicWeekSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AcademicWeek
     */
    omit?: Prisma.AcademicWeekOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcademicWeekInclude<ExtArgs> | null;
    /**
     * The data needed to update a AcademicWeek.
     */
    data: Prisma.XOR<Prisma.AcademicWeekUpdateInput, Prisma.AcademicWeekUncheckedUpdateInput>;
    /**
     * Choose, which AcademicWeek to update.
     */
    where: Prisma.AcademicWeekWhereUniqueInput;
};
/**
 * AcademicWeek updateMany
 */
export type AcademicWeekUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AcademicWeeks.
     */
    data: Prisma.XOR<Prisma.AcademicWeekUpdateManyMutationInput, Prisma.AcademicWeekUncheckedUpdateManyInput>;
    /**
     * Filter which AcademicWeeks to update
     */
    where?: Prisma.AcademicWeekWhereInput;
    /**
     * Limit how many AcademicWeeks to update.
     */
    limit?: number;
};
/**
 * AcademicWeek updateManyAndReturn
 */
export type AcademicWeekUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicWeek
     */
    select?: Prisma.AcademicWeekSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AcademicWeek
     */
    omit?: Prisma.AcademicWeekOmit<ExtArgs> | null;
    /**
     * The data used to update AcademicWeeks.
     */
    data: Prisma.XOR<Prisma.AcademicWeekUpdateManyMutationInput, Prisma.AcademicWeekUncheckedUpdateManyInput>;
    /**
     * Filter which AcademicWeeks to update
     */
    where?: Prisma.AcademicWeekWhereInput;
    /**
     * Limit how many AcademicWeeks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcademicWeekIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AcademicWeek upsert
 */
export type AcademicWeekUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicWeek
     */
    select?: Prisma.AcademicWeekSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AcademicWeek
     */
    omit?: Prisma.AcademicWeekOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcademicWeekInclude<ExtArgs> | null;
    /**
     * The filter to search for the AcademicWeek to update in case it exists.
     */
    where: Prisma.AcademicWeekWhereUniqueInput;
    /**
     * In case the AcademicWeek found by the `where` argument doesn't exist, create a new AcademicWeek with this data.
     */
    create: Prisma.XOR<Prisma.AcademicWeekCreateInput, Prisma.AcademicWeekUncheckedCreateInput>;
    /**
     * In case the AcademicWeek was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AcademicWeekUpdateInput, Prisma.AcademicWeekUncheckedUpdateInput>;
};
/**
 * AcademicWeek delete
 */
export type AcademicWeekDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicWeek
     */
    select?: Prisma.AcademicWeekSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AcademicWeek
     */
    omit?: Prisma.AcademicWeekOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcademicWeekInclude<ExtArgs> | null;
    /**
     * Filter which AcademicWeek to delete.
     */
    where: Prisma.AcademicWeekWhereUniqueInput;
};
/**
 * AcademicWeek deleteMany
 */
export type AcademicWeekDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicWeeks to delete
     */
    where?: Prisma.AcademicWeekWhereInput;
    /**
     * Limit how many AcademicWeeks to delete.
     */
    limit?: number;
};
/**
 * AcademicWeek without action
 */
export type AcademicWeekDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicWeek
     */
    select?: Prisma.AcademicWeekSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AcademicWeek
     */
    omit?: Prisma.AcademicWeekOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcademicWeekInclude<ExtArgs> | null;
};
//# sourceMappingURL=AcademicWeek.d.ts.map