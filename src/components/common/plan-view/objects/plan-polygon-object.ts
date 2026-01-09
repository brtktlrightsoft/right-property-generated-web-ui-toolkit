import { fabric } from 'fabric';
import { v4 as uuid } from 'uuid';
import type { IPlanObject } from './plan-object';
import { PlanItemTypeEnum, PlanItemTypeEnumNames } from '../enums/plan-item-type-enum';
import { PlanObjectTypeEnum, PlanObjectTypeEnumNames } from '../enums/plan-object-type-enum';
import type { PlanItemResultModel } from '../models/plan-item-result-model';
import { PlanLabelObject } from './plan-label-object';

export class PlanPolygonObject extends fabric.Polygon implements IPlanObject {
  private readonly _objectId = uuid();

  containerId = 0;
  containerType: string;

  itemId = '';
  itemType: string = PlanItemTypeEnumNames[PlanItemTypeEnum.None];
  itemName = '';
  itemInformation?: string | undefined;

  get objectId() {
    return this._objectId;
  }

  get objectType() {
    return PlanObjectTypeEnumNames[PlanObjectTypeEnum.Polygon];
  }

  get objectName() {
    return this.itemName ? this.itemName : `New Shape`;
  }

  get icon() {
    if (this.itemId) {
      return 'assets/icons/link.svg';
    }
    return 'assets/icons/link-broken.svg';
  }

  public text: fabric.Text;
  radius?: number | undefined;
  label: PlanLabelObject;

  constructor(model: IPlanObject) {
    let points = model.points || [];
    let left = model.left ?? 0;
    let top = model.top ?? 0;
    let width = model.width ?? 0;
    let height = model.height ?? 0;

    if (points.length > 0) {
      const xCoords = points.map((p) => p.x);
      const yCoords = points.map((p) => p.y);
      const minX = Math.min(...xCoords);
      const maxX = Math.max(...xCoords);
      const minY = Math.min(...yCoords);
      const maxY = Math.max(...yCoords);

      width = maxX - minX;
      height = maxY - minY;
      left = minX;
      top = minY;

      const centerX = (minX + maxX) / 2;
      const centerY = (minY + maxY) / 2;

      points = points.map((p) => new fabric.Point(p.x - centerX, p.y - centerY));

      left = centerX;
      top = centerY;
    }

    super(points, {
      left: left,
      top: top,
      width: width,
      height: height,
      opacity: model.opacity ?? 0.6,
      fill: model.fill,
      hoverCursor: 'default',
      selectable: false,
      hasControls: false,
      evented: false,
      originX: 'center',
      originY: 'center',
    });

    if (model.objectId) {
      (this as any)._objectId = model.objectId;
    }

    this.containerType = model.containerType;
    this.containerId = model.containerId;
    this.itemType = model.itemType;
    this.itemId = model.itemId;
    const labelLeft = left - width / 2;
    const labelTop = top - height / 2;
    this.label = new PlanLabelObject(
      this.objectType,
      model.fill ?? '0x000000',
      labelLeft,
      labelTop,
      width,
      height
    );
    this.text = new fabric.Text(this.objectType, {
      fontSize: 15,
      fontFamily: 'Arial',
      originX: 'center',
      originY: 'center',
      textAlign: 'center',
      hasControls: false,
      selectable: false,
      evented: false,
      left: left,
      top: top,
      width: width,
      height: height / 2,
      visible: false,
    });
  }

  finishDrawing() {
    this.selectable = false;
    this.evented = true;
    this.hasControls = false;
    this.text.visible = true;
  }

  duplicate() {
    const absolutePoints = this.points!.map((p) => new fabric.Point(p.x + (this.left ?? 0), p.y + (this.top ?? 0)));

    const arrayOfX = absolutePoints.map((p) => p.x);
    const minX = Math.min(...arrayOfX);
    const maxX = Math.max(...arrayOfX);
    const width = maxX - minX;

    const clonePoints = absolutePoints.map((p) => new fabric.Point(p.x + width, p.y));

    const clone = new PlanPolygonObject({
      objectId: '',
      objectType: PlanObjectTypeEnumNames[PlanObjectTypeEnum.Polygon],
      containerType: this.containerType,
      containerId: this.containerId,
      itemType: PlanItemTypeEnumNames[PlanItemTypeEnum.None],
      itemId: '',
      points: clonePoints,
      fill: this.fill,
      opacity: this.opacity,
      label: null,
    });

    clone.finishDrawing();
    return clone;
  }

  assign(item: PlanItemResultModel) {
    if (item) {
      this.itemType = item.type;
      this.itemId = item.id;
      this.itemName = item.number ? `${item.number}` : item.name;
      this.text.visible = true;
      this.itemInformation = item.informations?.join('\r\n');
      this.setControlVisible('assignControl', false);
      this.setControlVisible('unassignControl', true);
      this.changeColor(item.color);
    } else {
      this.itemType = PlanItemTypeEnumNames[PlanItemTypeEnum.None];
      this.itemId = '';
      this.itemName = '';
      this.setControlVisible('unassignControl', false);
      this.setControlVisible('assignControl', true);
    }

    this.setText(this.itemId ? this.itemName : this.objectType);
  }

  move() {
    this.setCoords();
    this.text.set('left', this.left!).set('top', this.top!).setCoords();

    const labelLeft = this.left! - this.width! / 2;
    const labelTop = this.top! - this.height! / 2;
    this.label.set('left', labelLeft);
    this.label.set('top', labelTop);
    this.label.setCoords();
  }

  private setText(text: string) {
    this.label.setLabel(text);
  }

  changeColor(fill?: string | fabric.Pattern | fabric.Gradient) {
    if (!fill) return;
    this.set('fill', fill);
  }

  resize() {
    const scaledWidth = this.getScaledWidth();
    const scaledHeight = this.getScaledHeight();

    this.text.set('left', this.left!).set('top', this.top!).set('width', scaledWidth).setCoords();

    const labelLeft = this.left! - scaledWidth / 2;
    const labelTop = this.top! - scaledHeight / 2;
    this.label.set('left', labelLeft);
    this.label.set('top', labelTop);
    this.label.setCoords();
  }

  modify() {
    const scaledWidth = this.getScaledWidth(),
      scaledHeight = this.getScaledHeight(),
      dx = scaledWidth - this.width!,
      dy = scaledHeight - this.height!;

    this.calcPoints(this.points!, dx, dy, scaledWidth / this.width!, scaledHeight / this.height!);

    this.setCoords()
      .set('width', scaledWidth)
      .set('height', scaledHeight)
      .set('scaleX', 1)
      .set('scaleY', 1);

    const labelLeft = this.left! - scaledWidth / 2;
    const labelTop = this.top! - scaledHeight / 2;
    this.label.set('left', labelLeft);
    this.label.set('top', labelTop);
    this.label.setCoords();
  }

  toPlanObject(imageBoundary: fabric.Point) {
    const absolutePoints = this.points!.map((p) => new fabric.Point(p.x + (this.left ?? 0), p.y + (this.top ?? 0)));

    const xCoords = absolutePoints.map((p) => p.x);
    const yCoords = absolutePoints.map((p) => p.y);
    const minX = Math.min(...xCoords);
    const maxX = Math.max(...xCoords);
    const minY = Math.min(...yCoords);
    const maxY = Math.max(...yCoords);

    const width = maxX - minX;
    const height = maxY - minY;
    const left = minX;
    const top = minY;

    return {
      objectId: this.objectId,
      objectType: this.objectType,
      containerId: this.containerId,
      containerType: this.containerType,
      itemId: this.itemId,
      itemType: this.itemType,
      left: left / imageBoundary.x,
      top: top / imageBoundary.y,
      width: width / imageBoundary.x,
      height: height / imageBoundary.y,
      radius: 0,
      points: absolutePoints.map((p, order) => ({
        id: uuid(),
        order: order,
        x: p.x / imageBoundary.x,
        y: p.y / imageBoundary.y,
      })),
      fill: this.fill,
      opacity: this.opacity,
      svg: this.toSVG(),
    };
  }

  private calcPoints(points: Array<fabric.Point>, dx: number, dy: number, scaleX: number, scaleY: number) {
    const minX = Math.min(...points.map((p) => p.x)),
      minXIndexes = points.map((p, i) => (p.x == minX ? i : -1)).filter((i) => i != -1),
      minXIndex = Math.max(...minXIndexes);

    const xOffsets: number[] = [];

    for (let i = minXIndex; i < minXIndex + points.length; i++) {
      const currentIndex = i % points.length,
        currentPoint = points[currentIndex],
        nextIndex = (currentIndex + 1) % points.length,
        nextPoint = points[nextIndex];
      xOffsets.push(nextPoint.x - currentPoint.x);
    }

    for (let i = minXIndex; i < minXIndex + points.length; i++) {
      const currentIndex = i % points.length,
        currentPoint = points[currentIndex],
        prevIndex = (currentIndex + points.length - 1) % points.length,
        prevPoint = points[prevIndex];
      if (currentIndex == minXIndex) {
        currentPoint.x -= dx / 2;
      } else {
        currentPoint.x = prevPoint.x + xOffsets[i - minXIndex - 1] * scaleX;
      }
    }

    const minY = Math.min(...points.map((p) => p.y)),
      minYIndexes = points.map((p, i) => (p.y == minY ? i : -1)).filter((i) => i != -1),
      minYIndex = Math.min(...minYIndexes);

    const yOffsets: number[] = [];

    for (let i = minYIndex; i < minYIndex + points.length; i++) {
      const currentIndex = i % points.length,
        currentPoint = points[currentIndex],
        nextIndex = (currentIndex + 1) % points.length,
        nextPoint = points[nextIndex];
      yOffsets.push(nextPoint.y - currentPoint.y);
    }

    for (let i = minYIndex; i < minYIndex + points.length; i++) {
      const currentIndex = i % points.length,
        currentPoint = points[currentIndex],
        prevIndex = (currentIndex + points.length - 1) % points.length,
        prevPoint = points[prevIndex];
      if (currentIndex == minYIndex) {
        currentPoint.y -= dy / 2;
      } else {
        currentPoint.y = prevPoint.y + yOffsets[i - minYIndex - 1] * scaleY;
      }
    }
  }
}

