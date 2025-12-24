import { fabric } from 'fabric';
import type { PlanObjectResultModel } from '../models/plan-object-result-model';
import { PlanCircleObject } from '../objects/plan-circle-object';
import { PlanRectangleObject } from '../objects/plan-rectangle-object';
import { PlanPolygonObject } from '../objects/plan-polygon-object';
import type { IPlanObject } from '../objects/plan-object';
export interface ObjectUpdateEventArgs {
    object: PlanRectangleObject | PlanCircleObject | PlanPolygonObject;
    by: 'form' | 'canvas';
}
export declare class PlanObjectController {
    private _planObjects;
    private _containerObjects;
    private _selectedObjects;
    get planObjects(): PlanObjectResultModel[];
    get containerObjects(): (PlanCircleObject | PlanRectangleObject | PlanPolygonObject)[];
    get selectedObject(): PlanCircleObject | PlanRectangleObject | PlanPolygonObject | null;
    get isRectangle(): boolean;
    get isCircle(): boolean;
    get isPolygon(): boolean;
    get isLine(): boolean;
    get selectedItemType(): "" | "Rectangle" | "Circle" | "Polygon" | "Vector";
    constructor(planObjects: PlanObjectResultModel[]);
    getPlanObjectByItemId(itemId: string): PlanObjectResultModel | undefined;
    isObjectSelected(id: string): boolean;
    onKeydownDelete(): void;
    deleteObjects(): void;
    initObject(o: PlanObjectResultModel, imageBoundary: fabric.Point): PlanCircleObject | PlanRectangleObject | PlanPolygonObject;
    initContainerObjects(imageBoundary: fabric.Point): void;
    startDrawingRectangle(model: IPlanObject): PlanRectangleObject;
    startDrawingCircle(model: IPlanObject): PlanCircleObject;
    finishDrawing(object: PlanRectangleObject | PlanCircleObject | PlanPolygonObject): void;
}
//# sourceMappingURL=plan-object-controller.d.ts.map