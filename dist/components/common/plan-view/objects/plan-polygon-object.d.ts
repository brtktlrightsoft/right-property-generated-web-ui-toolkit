import { fabric } from 'fabric';
import type { IPlanObject } from './plan-object';
import type { PlanItemResultModel } from '../models/plan-item-result-model';
import { PlanLabelObject } from './plan-label-object';
export declare class PlanPolygonObject extends fabric.Polygon implements IPlanObject {
    private readonly _objectId;
    containerId: number;
    containerType: string;
    itemId: string;
    itemType: string;
    itemName: string;
    itemInformation?: string | undefined;
    get objectId(): string;
    get objectType(): "Polygon";
    get objectName(): string;
    get icon(): "assets/icons/link.svg" | "assets/icons/link-broken.svg";
    text: fabric.Text;
    radius?: number | undefined;
    label: PlanLabelObject;
    constructor(model: IPlanObject);
    finishDrawing(): void;
    duplicate(): PlanPolygonObject;
    assign(item: PlanItemResultModel): void;
    move(): void;
    private setText;
    changeColor(fill?: string | fabric.Pattern | fabric.Gradient): void;
    resize(): void;
    modify(): void;
    toPlanObject(imageBoundary: fabric.Point): {
        objectId: string;
        objectType: "Polygon";
        containerId: number;
        containerType: string;
        itemId: string;
        itemType: string;
        left: number;
        top: number;
        width: number;
        height: number;
        radius: number;
        points: {
            id: string;
            order: number;
            x: number;
            y: number;
        }[];
        fill: string | fabric.Pattern | fabric.Gradient | undefined;
        opacity: number | undefined;
        svg: string;
    };
    private calcPoints;
}
//# sourceMappingURL=plan-polygon-object.d.ts.map