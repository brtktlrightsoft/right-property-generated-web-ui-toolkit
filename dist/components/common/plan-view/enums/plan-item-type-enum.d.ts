export declare const PlanItemTypeEnum: {
    readonly None: 0;
    readonly Room: 1;
    readonly Plot: 2;
    readonly PlotContainer: 3;
};
export type PlanItemTypeEnum = (typeof PlanItemTypeEnum)[keyof typeof PlanItemTypeEnum];
export declare const PlanItemTypeEnumNames: {
    readonly 0: "None";
    readonly 1: "Room";
    readonly 2: "Plot";
    readonly 3: "PlotContainer";
};
export declare function getPlanItemTypeEnum(name: string): PlanItemTypeEnum;
//# sourceMappingURL=plan-item-type-enum.d.ts.map