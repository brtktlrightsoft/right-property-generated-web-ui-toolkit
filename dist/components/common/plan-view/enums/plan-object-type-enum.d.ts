export declare const PlanObjectTypeEnum: {
    readonly None: 0;
    readonly Rectangle: 1;
    readonly Circle: 2;
    readonly Polygon: 3;
};
export type PlanObjectTypeEnum = (typeof PlanObjectTypeEnum)[keyof typeof PlanObjectTypeEnum];
export declare function getPlanObjectTypeName(value: PlanObjectTypeEnum): string;
export declare const PlanObjectTypeEnumNames: {
    readonly 0: "None";
    readonly 1: "Rectangle";
    readonly 2: "Circle";
    readonly 3: "Polygon";
};
//# sourceMappingURL=plan-object-type-enum.d.ts.map