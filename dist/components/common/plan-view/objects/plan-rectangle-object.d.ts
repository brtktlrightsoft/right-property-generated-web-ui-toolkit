import { fabric } from 'fabric';
import type { IPlanObject } from './plan-object';
import type { PlanItemResultModel } from '../models/plan-item-result-model';
import { PlanLabelObject } from './plan-label-object';
export declare class PlanRectangleObject extends fabric.Rect implements IPlanObject {
    private readonly _objectId;
    containerId: number;
    containerType: string;
    itemId: string;
    itemType: string;
    itemName: string;
    itemInformation?: string | undefined;
    get objectId(): string;
    get objectType(): "Rectangle";
    get objectName(): string;
    get icon(): "assets/icons/link.svg" | "assets/icons/link-broken.svg";
    text: fabric.Text;
    private _pointer;
    radius?: number | undefined;
    points?: fabric.Point[] | undefined;
    label: PlanLabelObject;
    constructor(model: IPlanObject);
    finishDrawing(): void;
    redraw(pointer: fabric.IPoint): false | undefined;
    duplicate(): PlanRectangleObject;
    assign(item: PlanItemResultModel): void;
    move(): void;
    resize(): void;
    modify(): void;
    private setText;
    changeColor(fill?: string | fabric.Pattern | fabric.Gradient): void;
}
//# sourceMappingURL=plan-rectangle-object.d.ts.map