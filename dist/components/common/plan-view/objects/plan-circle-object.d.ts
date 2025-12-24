import { fabric } from 'fabric';
import type { IPlanObject } from './plan-object';
import type { PlanItemResultModel } from '../models/plan-item-result-model';
import { PlanLabelObject } from './plan-label-object';
export declare class PlanCircleObject extends fabric.Circle implements IPlanObject {
    private readonly _objectId;
    containerId: number;
    containerType: string;
    itemId: string;
    itemType: string;
    itemName: string;
    itemInformation?: string | undefined;
    label: PlanLabelObject;
    get objectId(): string;
    get objectType(): "Circle";
    get objectName(): string;
    get icon(): "assets/icons/link.svg" | "assets/icons/link-broken.svg";
    text: fabric.Text;
    constructor(model: IPlanObject);
    finishDrawing(): void;
    redraw(pointer: fabric.IPoint): void;
    duplicate(): PlanCircleObject;
    assign(item: PlanItemResultModel): void;
    move(): void;
    resize(): void;
    modify(): void;
    private setText;
    changeColor(fill?: string | fabric.Pattern | fabric.Gradient): void;
}
//# sourceMappingURL=plan-circle-object.d.ts.map