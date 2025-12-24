import type { PlanItemResultModel } from '../models/plan-item-result-model';
export declare class PlanItemController {
    private _items;
    get items(): PlanItemResultModel[];
    constructor(items: PlanItemResultModel[]);
    getItem(id: string): PlanItemResultModel | undefined;
}
//# sourceMappingURL=plan-item-controller.d.ts.map