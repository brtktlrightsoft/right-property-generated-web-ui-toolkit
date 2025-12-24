import { fabric } from 'fabric';
import type { PlanObjectResultModel } from '../models/plan-object-result-model';
import { PlanCircleObject } from '../objects/plan-circle-object';
import { PlanRectangleObject } from '../objects/plan-rectangle-object';
import { PlanPolygonObject } from '../objects/plan-polygon-object';
import { PlanLineObject } from '../objects/plan-line-object';
import type { IPlanObject } from '../objects/plan-object';
import { PlanObjectTypeEnum, PlanObjectTypeEnumNames } from '../enums/plan-object-type-enum';

export interface ObjectUpdateEventArgs {
  object: PlanRectangleObject | PlanCircleObject | PlanPolygonObject;
  by: 'form' | 'canvas';
}

export class PlanObjectController {
  private _planObjects: Array<PlanObjectResultModel> = [];
  private _containerObjects: Array<PlanRectangleObject | PlanCircleObject | PlanPolygonObject> = [];
  private _selectedObjects: Array<PlanRectangleObject | PlanCircleObject | PlanPolygonObject> = [];

  get planObjects() {
    return this._planObjects;
  }

  get containerObjects() {
    return this._containerObjects;
  }

  get selectedObject() {
    if (this._selectedObjects.length == 1) {
      return this._selectedObjects[0];
    }
    return null;
  }

  get isRectangle() {
    if (!this.selectedObject) return false;
    return this.selectedObject instanceof PlanRectangleObject;
  }

  get isCircle() {
    if (!this.selectedObject) return false;
    return this.selectedObject instanceof PlanCircleObject;
  }

  get isPolygon() {
    if (!this.selectedObject) return false;
    return this.selectedObject instanceof PlanPolygonObject;
  }

  get isLine() {
    if (!this.selectedObject) return false;
    return this.selectedObject instanceof PlanLineObject;
  }

  get selectedItemType() {
    if (this.isRectangle) return 'Rectangle';
    if (this.isCircle) return 'Circle';
    if (this.isPolygon) return 'Polygon';
    if (this.isLine) return 'Vector';
    return '';
  }

  constructor(planObjects: PlanObjectResultModel[]) {
    this._planObjects = planObjects;
  }

  getPlanObjectByItemId(itemId: string) {
    const object = this.planObjects.find((i) => i.itemId == itemId);
    return object;
  }

  isObjectSelected(id: string) {
    if (!this.selectedObject) {
      return false;
    }
    return this.selectedObject.objectId === id;
  }

  onKeydownDelete() {
    this.deleteObjects();
  }

  deleteObjects() {
    if (!this._selectedObjects || !this._selectedObjects.length) {
      return;
    }

    this._selectedObjects.forEach((o) => {
      const index = this.containerObjects.findIndex((i) => i.objectId === o.objectId);
      this.containerObjects.splice(index, 1);
    });
  }

  initObject(o: PlanObjectResultModel, imageBoundary: fabric.Point) {
    const defaultRadius = Math.min(o.width ?? 0, o.height ?? 0) / 2;
    const options: IPlanObject = {
      objectId: o.objectId,
      objectType: o.objectType,
      containerId: o.containerId,
      containerType: o.containerType,
      itemId: o.itemId,
      itemType: o.itemType,
      left: imageBoundary.x * o.left,
      top: imageBoundary.y * o.top,
      width: o.width! * imageBoundary.x,
      height: o.height! * imageBoundary.y,
      radius: (o.radius ?? defaultRadius) * imageBoundary.x,
      points: o.points ? o.points.map((p) => new fabric.Point(imageBoundary.x * p.x, imageBoundary.y * p.y)) : [],
      fill: o.fill,
      opacity: o.opacity,
      label: null,
    };

    if (o.objectType === PlanObjectTypeEnumNames[PlanObjectTypeEnum.Rectangle]) {
      const rectangle = new PlanRectangleObject(options);
      rectangle.finishDrawing();
      this.containerObjects.push(rectangle);
      return rectangle;
    } else if (o.objectType === PlanObjectTypeEnumNames[PlanObjectTypeEnum.Polygon]) {
      const polygon = new PlanPolygonObject(options);
      polygon.finishDrawing();
      this.containerObjects.push(polygon);
      return polygon;
    } else {
      const circle = new PlanCircleObject(options);
      circle.finishDrawing();
      this.containerObjects.push(circle);
      return circle;
    }
  }

  initContainerObjects(imageBoundary: fabric.Point) {
    this._containerObjects = this.planObjects.map((o) => this.initObject(o, imageBoundary)).filter((o) => o != null);
  }

  startDrawingRectangle(model: IPlanObject) {
    return new PlanRectangleObject(model);
  }

  startDrawingCircle(model: IPlanObject) {
    return new PlanCircleObject(model);
  }

  finishDrawing(object: PlanRectangleObject | PlanCircleObject | PlanPolygonObject) {
    this.containerObjects.push(object);
  }
}

