import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DailyCheck
 *
 */
export type DailyCheckModel = runtime.Types.Result.DefaultSelection<Prisma.$DailyCheckPayload>;
export type AggregateDailyCheck = {
    _count: DailyCheckCountAggregateOutputType | null;
    _min: DailyCheckMinAggregateOutputType | null;
    _max: DailyCheckMaxAggregateOutputType | null;
};
export type DailyCheckMinAggregateOutputType = {
    id: string | null;
    taskId: string | null;
    date: string | null;
    completed: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DailyCheckMaxAggregateOutputType = {
    id: string | null;
    taskId: string | null;
    date: string | null;
    completed: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DailyCheckCountAggregateOutputType = {
    id: number;
    taskId: number;
    date: number;
    completed: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DailyCheckMinAggregateInputType = {
    id?: true;
    taskId?: true;
    date?: true;
    completed?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DailyCheckMaxAggregateInputType = {
    id?: true;
    taskId?: true;
    date?: true;
    completed?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DailyCheckCountAggregateInputType = {
    id?: true;
    taskId?: true;
    date?: true;
    completed?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DailyCheckAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DailyCheck to aggregate.
     */
    where?: Prisma.DailyCheckWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DailyChecks to fetch.
     */
    orderBy?: Prisma.DailyCheckOrderByWithRelationInput | Prisma.DailyCheckOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DailyCheckWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DailyChecks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DailyChecks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DailyChecks
    **/
    _count?: true | DailyCheckCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DailyCheckMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DailyCheckMaxAggregateInputType;
};
export type GetDailyCheckAggregateType<T extends DailyCheckAggregateArgs> = {
    [P in keyof T & keyof AggregateDailyCheck]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDailyCheck[P]> : Prisma.GetScalarType<T[P], AggregateDailyCheck[P]>;
};
export type DailyCheckGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DailyCheckWhereInput;
    orderBy?: Prisma.DailyCheckOrderByWithAggregationInput | Prisma.DailyCheckOrderByWithAggregationInput[];
    by: Prisma.DailyCheckScalarFieldEnum[] | Prisma.DailyCheckScalarFieldEnum;
    having?: Prisma.DailyCheckScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DailyCheckCountAggregateInputType | true;
    _min?: DailyCheckMinAggregateInputType;
    _max?: DailyCheckMaxAggregateInputType;
};
export type DailyCheckGroupByOutputType = {
    id: string;
    taskId: string;
    date: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: DailyCheckCountAggregateOutputType | null;
    _min: DailyCheckMinAggregateOutputType | null;
    _max: DailyCheckMaxAggregateOutputType | null;
};
export type GetDailyCheckGroupByPayload<T extends DailyCheckGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DailyCheckGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DailyCheckGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DailyCheckGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DailyCheckGroupByOutputType[P]>;
}>>;
export type DailyCheckWhereInput = {
    AND?: Prisma.DailyCheckWhereInput | Prisma.DailyCheckWhereInput[];
    OR?: Prisma.DailyCheckWhereInput[];
    NOT?: Prisma.DailyCheckWhereInput | Prisma.DailyCheckWhereInput[];
    id?: Prisma.StringFilter<"DailyCheck"> | string;
    taskId?: Prisma.StringFilter<"DailyCheck"> | string;
    date?: Prisma.StringFilter<"DailyCheck"> | string;
    completed?: Prisma.BoolFilter<"DailyCheck"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"DailyCheck"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DailyCheck"> | Date | string;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
};
export type DailyCheckOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    task?: Prisma.TaskOrderByWithRelationInput;
};
export type DailyCheckWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    taskId_date?: Prisma.DailyCheckTaskIdDateCompoundUniqueInput;
    AND?: Prisma.DailyCheckWhereInput | Prisma.DailyCheckWhereInput[];
    OR?: Prisma.DailyCheckWhereInput[];
    NOT?: Prisma.DailyCheckWhereInput | Prisma.DailyCheckWhereInput[];
    taskId?: Prisma.StringFilter<"DailyCheck"> | string;
    date?: Prisma.StringFilter<"DailyCheck"> | string;
    completed?: Prisma.BoolFilter<"DailyCheck"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"DailyCheck"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DailyCheck"> | Date | string;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
}, "id" | "taskId_date">;
export type DailyCheckOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DailyCheckCountOrderByAggregateInput;
    _max?: Prisma.DailyCheckMaxOrderByAggregateInput;
    _min?: Prisma.DailyCheckMinOrderByAggregateInput;
};
export type DailyCheckScalarWhereWithAggregatesInput = {
    AND?: Prisma.DailyCheckScalarWhereWithAggregatesInput | Prisma.DailyCheckScalarWhereWithAggregatesInput[];
    OR?: Prisma.DailyCheckScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DailyCheckScalarWhereWithAggregatesInput | Prisma.DailyCheckScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DailyCheck"> | string;
    taskId?: Prisma.StringWithAggregatesFilter<"DailyCheck"> | string;
    date?: Prisma.StringWithAggregatesFilter<"DailyCheck"> | string;
    completed?: Prisma.BoolWithAggregatesFilter<"DailyCheck"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DailyCheck"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DailyCheck"> | Date | string;
};
export type DailyCheckCreateInput = {
    id?: string;
    date: string;
    completed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    task: Prisma.TaskCreateNestedOneWithoutDailyChecksInput;
};
export type DailyCheckUncheckedCreateInput = {
    id?: string;
    taskId: string;
    date: string;
    completed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DailyCheckUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    task?: Prisma.TaskUpdateOneRequiredWithoutDailyChecksNestedInput;
};
export type DailyCheckUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DailyCheckCreateManyInput = {
    id?: string;
    taskId: string;
    date: string;
    completed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DailyCheckUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DailyCheckUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DailyCheckListRelationFilter = {
    every?: Prisma.DailyCheckWhereInput;
    some?: Prisma.DailyCheckWhereInput;
    none?: Prisma.DailyCheckWhereInput;
};
export type DailyCheckOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DailyCheckTaskIdDateCompoundUniqueInput = {
    taskId: string;
    date: string;
};
export type DailyCheckCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DailyCheckMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DailyCheckMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DailyCheckCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.DailyCheckCreateWithoutTaskInput, Prisma.DailyCheckUncheckedCreateWithoutTaskInput> | Prisma.DailyCheckCreateWithoutTaskInput[] | Prisma.DailyCheckUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.DailyCheckCreateOrConnectWithoutTaskInput | Prisma.DailyCheckCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.DailyCheckCreateManyTaskInputEnvelope;
    connect?: Prisma.DailyCheckWhereUniqueInput | Prisma.DailyCheckWhereUniqueInput[];
};
export type DailyCheckUncheckedCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.DailyCheckCreateWithoutTaskInput, Prisma.DailyCheckUncheckedCreateWithoutTaskInput> | Prisma.DailyCheckCreateWithoutTaskInput[] | Prisma.DailyCheckUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.DailyCheckCreateOrConnectWithoutTaskInput | Prisma.DailyCheckCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.DailyCheckCreateManyTaskInputEnvelope;
    connect?: Prisma.DailyCheckWhereUniqueInput | Prisma.DailyCheckWhereUniqueInput[];
};
export type DailyCheckUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.DailyCheckCreateWithoutTaskInput, Prisma.DailyCheckUncheckedCreateWithoutTaskInput> | Prisma.DailyCheckCreateWithoutTaskInput[] | Prisma.DailyCheckUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.DailyCheckCreateOrConnectWithoutTaskInput | Prisma.DailyCheckCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.DailyCheckUpsertWithWhereUniqueWithoutTaskInput | Prisma.DailyCheckUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.DailyCheckCreateManyTaskInputEnvelope;
    set?: Prisma.DailyCheckWhereUniqueInput | Prisma.DailyCheckWhereUniqueInput[];
    disconnect?: Prisma.DailyCheckWhereUniqueInput | Prisma.DailyCheckWhereUniqueInput[];
    delete?: Prisma.DailyCheckWhereUniqueInput | Prisma.DailyCheckWhereUniqueInput[];
    connect?: Prisma.DailyCheckWhereUniqueInput | Prisma.DailyCheckWhereUniqueInput[];
    update?: Prisma.DailyCheckUpdateWithWhereUniqueWithoutTaskInput | Prisma.DailyCheckUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.DailyCheckUpdateManyWithWhereWithoutTaskInput | Prisma.DailyCheckUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.DailyCheckScalarWhereInput | Prisma.DailyCheckScalarWhereInput[];
};
export type DailyCheckUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.DailyCheckCreateWithoutTaskInput, Prisma.DailyCheckUncheckedCreateWithoutTaskInput> | Prisma.DailyCheckCreateWithoutTaskInput[] | Prisma.DailyCheckUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.DailyCheckCreateOrConnectWithoutTaskInput | Prisma.DailyCheckCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.DailyCheckUpsertWithWhereUniqueWithoutTaskInput | Prisma.DailyCheckUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.DailyCheckCreateManyTaskInputEnvelope;
    set?: Prisma.DailyCheckWhereUniqueInput | Prisma.DailyCheckWhereUniqueInput[];
    disconnect?: Prisma.DailyCheckWhereUniqueInput | Prisma.DailyCheckWhereUniqueInput[];
    delete?: Prisma.DailyCheckWhereUniqueInput | Prisma.DailyCheckWhereUniqueInput[];
    connect?: Prisma.DailyCheckWhereUniqueInput | Prisma.DailyCheckWhereUniqueInput[];
    update?: Prisma.DailyCheckUpdateWithWhereUniqueWithoutTaskInput | Prisma.DailyCheckUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.DailyCheckUpdateManyWithWhereWithoutTaskInput | Prisma.DailyCheckUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.DailyCheckScalarWhereInput | Prisma.DailyCheckScalarWhereInput[];
};
export type DailyCheckCreateWithoutTaskInput = {
    id?: string;
    date: string;
    completed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DailyCheckUncheckedCreateWithoutTaskInput = {
    id?: string;
    date: string;
    completed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DailyCheckCreateOrConnectWithoutTaskInput = {
    where: Prisma.DailyCheckWhereUniqueInput;
    create: Prisma.XOR<Prisma.DailyCheckCreateWithoutTaskInput, Prisma.DailyCheckUncheckedCreateWithoutTaskInput>;
};
export type DailyCheckCreateManyTaskInputEnvelope = {
    data: Prisma.DailyCheckCreateManyTaskInput | Prisma.DailyCheckCreateManyTaskInput[];
    skipDuplicates?: boolean;
};
export type DailyCheckUpsertWithWhereUniqueWithoutTaskInput = {
    where: Prisma.DailyCheckWhereUniqueInput;
    update: Prisma.XOR<Prisma.DailyCheckUpdateWithoutTaskInput, Prisma.DailyCheckUncheckedUpdateWithoutTaskInput>;
    create: Prisma.XOR<Prisma.DailyCheckCreateWithoutTaskInput, Prisma.DailyCheckUncheckedCreateWithoutTaskInput>;
};
export type DailyCheckUpdateWithWhereUniqueWithoutTaskInput = {
    where: Prisma.DailyCheckWhereUniqueInput;
    data: Prisma.XOR<Prisma.DailyCheckUpdateWithoutTaskInput, Prisma.DailyCheckUncheckedUpdateWithoutTaskInput>;
};
export type DailyCheckUpdateManyWithWhereWithoutTaskInput = {
    where: Prisma.DailyCheckScalarWhereInput;
    data: Prisma.XOR<Prisma.DailyCheckUpdateManyMutationInput, Prisma.DailyCheckUncheckedUpdateManyWithoutTaskInput>;
};
export type DailyCheckScalarWhereInput = {
    AND?: Prisma.DailyCheckScalarWhereInput | Prisma.DailyCheckScalarWhereInput[];
    OR?: Prisma.DailyCheckScalarWhereInput[];
    NOT?: Prisma.DailyCheckScalarWhereInput | Prisma.DailyCheckScalarWhereInput[];
    id?: Prisma.StringFilter<"DailyCheck"> | string;
    taskId?: Prisma.StringFilter<"DailyCheck"> | string;
    date?: Prisma.StringFilter<"DailyCheck"> | string;
    completed?: Prisma.BoolFilter<"DailyCheck"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"DailyCheck"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DailyCheck"> | Date | string;
};
export type DailyCheckCreateManyTaskInput = {
    id?: string;
    date: string;
    completed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DailyCheckUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DailyCheckUncheckedUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DailyCheckUncheckedUpdateManyWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DailyCheckSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taskId?: boolean;
    date?: boolean;
    completed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dailyCheck"]>;
export type DailyCheckSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taskId?: boolean;
    date?: boolean;
    completed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dailyCheck"]>;
export type DailyCheckSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taskId?: boolean;
    date?: boolean;
    completed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dailyCheck"]>;
export type DailyCheckSelectScalar = {
    id?: boolean;
    taskId?: boolean;
    date?: boolean;
    completed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DailyCheckOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "taskId" | "date" | "completed" | "createdAt" | "updatedAt", ExtArgs["result"]["dailyCheck"]>;
export type DailyCheckInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type DailyCheckIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type DailyCheckIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type $DailyCheckPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DailyCheck";
    objects: {
        task: Prisma.$TaskPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        taskId: string;
        date: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["dailyCheck"]>;
    composites: {};
};
export type DailyCheckGetPayload<S extends boolean | null | undefined | DailyCheckDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DailyCheckPayload, S>;
export type DailyCheckCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DailyCheckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DailyCheckCountAggregateInputType | true;
};
export interface DailyCheckDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DailyCheck'];
        meta: {
            name: 'DailyCheck';
        };
    };
    /**
     * Find zero or one DailyCheck that matches the filter.
     * @param {DailyCheckFindUniqueArgs} args - Arguments to find a DailyCheck
     * @example
     * // Get one DailyCheck
     * const dailyCheck = await prisma.dailyCheck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyCheckFindUniqueArgs>(args: Prisma.SelectSubset<T, DailyCheckFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DailyCheckClient<runtime.Types.Result.GetResult<Prisma.$DailyCheckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DailyCheck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyCheckFindUniqueOrThrowArgs} args - Arguments to find a DailyCheck
     * @example
     * // Get one DailyCheck
     * const dailyCheck = await prisma.dailyCheck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyCheckFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DailyCheckFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DailyCheckClient<runtime.Types.Result.GetResult<Prisma.$DailyCheckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DailyCheck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCheckFindFirstArgs} args - Arguments to find a DailyCheck
     * @example
     * // Get one DailyCheck
     * const dailyCheck = await prisma.dailyCheck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyCheckFindFirstArgs>(args?: Prisma.SelectSubset<T, DailyCheckFindFirstArgs<ExtArgs>>): Prisma.Prisma__DailyCheckClient<runtime.Types.Result.GetResult<Prisma.$DailyCheckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DailyCheck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCheckFindFirstOrThrowArgs} args - Arguments to find a DailyCheck
     * @example
     * // Get one DailyCheck
     * const dailyCheck = await prisma.dailyCheck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyCheckFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DailyCheckFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DailyCheckClient<runtime.Types.Result.GetResult<Prisma.$DailyCheckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DailyChecks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCheckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyChecks
     * const dailyChecks = await prisma.dailyCheck.findMany()
     *
     * // Get first 10 DailyChecks
     * const dailyChecks = await prisma.dailyCheck.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dailyCheckWithIdOnly = await prisma.dailyCheck.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DailyCheckFindManyArgs>(args?: Prisma.SelectSubset<T, DailyCheckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DailyCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DailyCheck.
     * @param {DailyCheckCreateArgs} args - Arguments to create a DailyCheck.
     * @example
     * // Create one DailyCheck
     * const DailyCheck = await prisma.dailyCheck.create({
     *   data: {
     *     // ... data to create a DailyCheck
     *   }
     * })
     *
     */
    create<T extends DailyCheckCreateArgs>(args: Prisma.SelectSubset<T, DailyCheckCreateArgs<ExtArgs>>): Prisma.Prisma__DailyCheckClient<runtime.Types.Result.GetResult<Prisma.$DailyCheckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DailyChecks.
     * @param {DailyCheckCreateManyArgs} args - Arguments to create many DailyChecks.
     * @example
     * // Create many DailyChecks
     * const dailyCheck = await prisma.dailyCheck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DailyCheckCreateManyArgs>(args?: Prisma.SelectSubset<T, DailyCheckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DailyChecks and returns the data saved in the database.
     * @param {DailyCheckCreateManyAndReturnArgs} args - Arguments to create many DailyChecks.
     * @example
     * // Create many DailyChecks
     * const dailyCheck = await prisma.dailyCheck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DailyChecks and only return the `id`
     * const dailyCheckWithIdOnly = await prisma.dailyCheck.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DailyCheckCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DailyCheckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DailyCheckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DailyCheck.
     * @param {DailyCheckDeleteArgs} args - Arguments to delete one DailyCheck.
     * @example
     * // Delete one DailyCheck
     * const DailyCheck = await prisma.dailyCheck.delete({
     *   where: {
     *     // ... filter to delete one DailyCheck
     *   }
     * })
     *
     */
    delete<T extends DailyCheckDeleteArgs>(args: Prisma.SelectSubset<T, DailyCheckDeleteArgs<ExtArgs>>): Prisma.Prisma__DailyCheckClient<runtime.Types.Result.GetResult<Prisma.$DailyCheckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DailyCheck.
     * @param {DailyCheckUpdateArgs} args - Arguments to update one DailyCheck.
     * @example
     * // Update one DailyCheck
     * const dailyCheck = await prisma.dailyCheck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DailyCheckUpdateArgs>(args: Prisma.SelectSubset<T, DailyCheckUpdateArgs<ExtArgs>>): Prisma.Prisma__DailyCheckClient<runtime.Types.Result.GetResult<Prisma.$DailyCheckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DailyChecks.
     * @param {DailyCheckDeleteManyArgs} args - Arguments to filter DailyChecks to delete.
     * @example
     * // Delete a few DailyChecks
     * const { count } = await prisma.dailyCheck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DailyCheckDeleteManyArgs>(args?: Prisma.SelectSubset<T, DailyCheckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DailyChecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCheckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyChecks
     * const dailyCheck = await prisma.dailyCheck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DailyCheckUpdateManyArgs>(args: Prisma.SelectSubset<T, DailyCheckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DailyChecks and returns the data updated in the database.
     * @param {DailyCheckUpdateManyAndReturnArgs} args - Arguments to update many DailyChecks.
     * @example
     * // Update many DailyChecks
     * const dailyCheck = await prisma.dailyCheck.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DailyChecks and only return the `id`
     * const dailyCheckWithIdOnly = await prisma.dailyCheck.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyCheckUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DailyCheckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DailyCheckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DailyCheck.
     * @param {DailyCheckUpsertArgs} args - Arguments to update or create a DailyCheck.
     * @example
     * // Update or create a DailyCheck
     * const dailyCheck = await prisma.dailyCheck.upsert({
     *   create: {
     *     // ... data to create a DailyCheck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyCheck we want to update
     *   }
     * })
     */
    upsert<T extends DailyCheckUpsertArgs>(args: Prisma.SelectSubset<T, DailyCheckUpsertArgs<ExtArgs>>): Prisma.Prisma__DailyCheckClient<runtime.Types.Result.GetResult<Prisma.$DailyCheckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DailyChecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCheckCountArgs} args - Arguments to filter DailyChecks to count.
     * @example
     * // Count the number of DailyChecks
     * const count = await prisma.dailyCheck.count({
     *   where: {
     *     // ... the filter for the DailyChecks we want to count
     *   }
     * })
    **/
    count<T extends DailyCheckCountArgs>(args?: Prisma.Subset<T, DailyCheckCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DailyCheckCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DailyCheck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCheckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyCheckAggregateArgs>(args: Prisma.Subset<T, DailyCheckAggregateArgs>): Prisma.PrismaPromise<GetDailyCheckAggregateType<T>>;
    /**
     * Group by DailyCheck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCheckGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DailyCheckGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DailyCheckGroupByArgs['orderBy'];
    } : {
        orderBy?: DailyCheckGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DailyCheckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyCheckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DailyCheck model
     */
    readonly fields: DailyCheckFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DailyCheck.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DailyCheckClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    task<T extends Prisma.TaskDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaskDefaultArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the DailyCheck model
 */
export interface DailyCheckFieldRefs {
    readonly id: Prisma.FieldRef<"DailyCheck", 'String'>;
    readonly taskId: Prisma.FieldRef<"DailyCheck", 'String'>;
    readonly date: Prisma.FieldRef<"DailyCheck", 'String'>;
    readonly completed: Prisma.FieldRef<"DailyCheck", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"DailyCheck", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DailyCheck", 'DateTime'>;
}
/**
 * DailyCheck findUnique
 */
export type DailyCheckFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCheck
     */
    select?: Prisma.DailyCheckSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyCheck
     */
    omit?: Prisma.DailyCheckOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DailyCheckInclude<ExtArgs> | null;
    /**
     * Filter, which DailyCheck to fetch.
     */
    where: Prisma.DailyCheckWhereUniqueInput;
};
/**
 * DailyCheck findUniqueOrThrow
 */
export type DailyCheckFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCheck
     */
    select?: Prisma.DailyCheckSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyCheck
     */
    omit?: Prisma.DailyCheckOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DailyCheckInclude<ExtArgs> | null;
    /**
     * Filter, which DailyCheck to fetch.
     */
    where: Prisma.DailyCheckWhereUniqueInput;
};
/**
 * DailyCheck findFirst
 */
export type DailyCheckFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCheck
     */
    select?: Prisma.DailyCheckSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyCheck
     */
    omit?: Prisma.DailyCheckOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DailyCheckInclude<ExtArgs> | null;
    /**
     * Filter, which DailyCheck to fetch.
     */
    where?: Prisma.DailyCheckWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DailyChecks to fetch.
     */
    orderBy?: Prisma.DailyCheckOrderByWithRelationInput | Prisma.DailyCheckOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DailyChecks.
     */
    cursor?: Prisma.DailyCheckWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DailyChecks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DailyChecks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DailyChecks.
     */
    distinct?: Prisma.DailyCheckScalarFieldEnum | Prisma.DailyCheckScalarFieldEnum[];
};
/**
 * DailyCheck findFirstOrThrow
 */
export type DailyCheckFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCheck
     */
    select?: Prisma.DailyCheckSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyCheck
     */
    omit?: Prisma.DailyCheckOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DailyCheckInclude<ExtArgs> | null;
    /**
     * Filter, which DailyCheck to fetch.
     */
    where?: Prisma.DailyCheckWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DailyChecks to fetch.
     */
    orderBy?: Prisma.DailyCheckOrderByWithRelationInput | Prisma.DailyCheckOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DailyChecks.
     */
    cursor?: Prisma.DailyCheckWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DailyChecks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DailyChecks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DailyChecks.
     */
    distinct?: Prisma.DailyCheckScalarFieldEnum | Prisma.DailyCheckScalarFieldEnum[];
};
/**
 * DailyCheck findMany
 */
export type DailyCheckFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCheck
     */
    select?: Prisma.DailyCheckSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyCheck
     */
    omit?: Prisma.DailyCheckOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DailyCheckInclude<ExtArgs> | null;
    /**
     * Filter, which DailyChecks to fetch.
     */
    where?: Prisma.DailyCheckWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DailyChecks to fetch.
     */
    orderBy?: Prisma.DailyCheckOrderByWithRelationInput | Prisma.DailyCheckOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DailyChecks.
     */
    cursor?: Prisma.DailyCheckWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DailyChecks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DailyChecks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DailyChecks.
     */
    distinct?: Prisma.DailyCheckScalarFieldEnum | Prisma.DailyCheckScalarFieldEnum[];
};
/**
 * DailyCheck create
 */
export type DailyCheckCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCheck
     */
    select?: Prisma.DailyCheckSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyCheck
     */
    omit?: Prisma.DailyCheckOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DailyCheckInclude<ExtArgs> | null;
    /**
     * The data needed to create a DailyCheck.
     */
    data: Prisma.XOR<Prisma.DailyCheckCreateInput, Prisma.DailyCheckUncheckedCreateInput>;
};
/**
 * DailyCheck createMany
 */
export type DailyCheckCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyChecks.
     */
    data: Prisma.DailyCheckCreateManyInput | Prisma.DailyCheckCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DailyCheck createManyAndReturn
 */
export type DailyCheckCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCheck
     */
    select?: Prisma.DailyCheckSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyCheck
     */
    omit?: Prisma.DailyCheckOmit<ExtArgs> | null;
    /**
     * The data used to create many DailyChecks.
     */
    data: Prisma.DailyCheckCreateManyInput | Prisma.DailyCheckCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DailyCheckIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * DailyCheck update
 */
export type DailyCheckUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCheck
     */
    select?: Prisma.DailyCheckSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyCheck
     */
    omit?: Prisma.DailyCheckOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DailyCheckInclude<ExtArgs> | null;
    /**
     * The data needed to update a DailyCheck.
     */
    data: Prisma.XOR<Prisma.DailyCheckUpdateInput, Prisma.DailyCheckUncheckedUpdateInput>;
    /**
     * Choose, which DailyCheck to update.
     */
    where: Prisma.DailyCheckWhereUniqueInput;
};
/**
 * DailyCheck updateMany
 */
export type DailyCheckUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyChecks.
     */
    data: Prisma.XOR<Prisma.DailyCheckUpdateManyMutationInput, Prisma.DailyCheckUncheckedUpdateManyInput>;
    /**
     * Filter which DailyChecks to update
     */
    where?: Prisma.DailyCheckWhereInput;
    /**
     * Limit how many DailyChecks to update.
     */
    limit?: number;
};
/**
 * DailyCheck updateManyAndReturn
 */
export type DailyCheckUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCheck
     */
    select?: Prisma.DailyCheckSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyCheck
     */
    omit?: Prisma.DailyCheckOmit<ExtArgs> | null;
    /**
     * The data used to update DailyChecks.
     */
    data: Prisma.XOR<Prisma.DailyCheckUpdateManyMutationInput, Prisma.DailyCheckUncheckedUpdateManyInput>;
    /**
     * Filter which DailyChecks to update
     */
    where?: Prisma.DailyCheckWhereInput;
    /**
     * Limit how many DailyChecks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DailyCheckIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * DailyCheck upsert
 */
export type DailyCheckUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCheck
     */
    select?: Prisma.DailyCheckSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyCheck
     */
    omit?: Prisma.DailyCheckOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DailyCheckInclude<ExtArgs> | null;
    /**
     * The filter to search for the DailyCheck to update in case it exists.
     */
    where: Prisma.DailyCheckWhereUniqueInput;
    /**
     * In case the DailyCheck found by the `where` argument doesn't exist, create a new DailyCheck with this data.
     */
    create: Prisma.XOR<Prisma.DailyCheckCreateInput, Prisma.DailyCheckUncheckedCreateInput>;
    /**
     * In case the DailyCheck was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DailyCheckUpdateInput, Prisma.DailyCheckUncheckedUpdateInput>;
};
/**
 * DailyCheck delete
 */
export type DailyCheckDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCheck
     */
    select?: Prisma.DailyCheckSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyCheck
     */
    omit?: Prisma.DailyCheckOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DailyCheckInclude<ExtArgs> | null;
    /**
     * Filter which DailyCheck to delete.
     */
    where: Prisma.DailyCheckWhereUniqueInput;
};
/**
 * DailyCheck deleteMany
 */
export type DailyCheckDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DailyChecks to delete
     */
    where?: Prisma.DailyCheckWhereInput;
    /**
     * Limit how many DailyChecks to delete.
     */
    limit?: number;
};
/**
 * DailyCheck without action
 */
export type DailyCheckDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCheck
     */
    select?: Prisma.DailyCheckSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DailyCheck
     */
    omit?: Prisma.DailyCheckOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DailyCheckInclude<ExtArgs> | null;
};
//# sourceMappingURL=DailyCheck.d.ts.map