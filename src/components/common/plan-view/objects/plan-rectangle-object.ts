import { fabric } from 'fabric';
import { v4 as uuidv4 } from 'uuid';
import type { IPlanObject } from './plan-object';
import { PlanItemTypeEnum, PlanItemTypeEnumNames } from '../enums/plan-item-type-enum';
import { PlanObjectTypeEnum, PlanObjectTypeEnumNames } from '../enums/plan-object-type-enum';
import type { PlanItemResultModel } from '../models/plan-item-result-model';
import { PlanLabelObject } from './plan-label-object';

export class PlanRectangleObject extends fabric.Rect implements IPlanObject {
  private readonly _objectId = uuidv4();

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
    return PlanObjectTypeEnumNames[PlanObjectTypeEnum.Rectangle];
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
  private _pointer: fabric.IPoint;
  radius?: number | undefined;
  points?: fabric.Point[] | undefined;
  label: PlanLabelObject;

  constructor(model: IPlanObject) {
    super({
      objectCaching: false,
      left: model.left,
      top: model.top,
      width: model.width ?? 1,
      height: model.height ?? 1,
      originX: 'center',
      originY: 'center',
      selectable: false,
      hasControls: false,
      evented: false,
      hasBorders: true,
      strokeWidth: 0.2,
      stroke: '#000000',
      fill: model.fill,
      opacity: model.opacity ?? 0.6,
    });

    if (model.objectId) {
      (this as any)._objectId = model.objectId;
    }

    this.containerType = model.containerType;
    this.containerId = model.containerId;
    this.itemType = model.itemType;
    this.itemId = model.itemId;
    this.label = new PlanLabelObject(
      this.objectType,
      model.fill ?? '0x000000',
      model.left ?? 0,
      model.top ?? 0,
      0,
      0
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
      left: this.left!,
      top: this.top!,
      width: this.width! * 0.75,
      height: this.height! / 2,
      visible: false,
    });
    this._pointer = new fabric.Point(model.left!, model.top!);
  }

  finishDrawing() {
    this.selectable = false;
    this.evented = true;
    this.hasControls = true;
    this.lockRotation = true;
    this.hoverCursor = 'pointer';
    this.text.visible = true;
  }

  redraw(pointer: fabric.IPoint) {
    const w = Math.abs(pointer.x - this._pointer.x),
      h = Math.abs(pointer.y - this._pointer.y);

    if (!w || !h) {
      return false;
    }

    const centerX = (pointer.x + this._pointer.x) / 2,
      centerY = (pointer.y + this._pointer.y) / 2;

    this.set('left', centerX).set('top', centerY).set('width', w).set('height', h);

    this.text.set('width', w).set('left', centerX).set('top', centerY);
  }

  duplicate() {
    const clone = new PlanRectangleObject({
      objectId: '',
      objectType: PlanObjectTypeEnumNames[PlanObjectTypeEnum.Rectangle],
      containerType: this.containerType,
      containerId: this.containerId,
      itemType: PlanItemTypeEnumNames[PlanItemTypeEnum.None],
      itemId: '',
      left: this.left! + this.width!,
      top: this.top,
      width: this.width,
      height: this.height,
      fill: this.fill,
      label: this.label,
    });
    clone.finishDrawing();
    return clone;
  }

  assign(item: PlanItemResultModel) {
    if (item) {
      this.itemType = item.type;
      this.itemId = item.id;
      this.itemName = item.number ?? '';
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
  }

  resize() {
    const scaledWidth = this.getScaledWidth();

    this.text
      .set('left', this.left!)
      .set('top', this.top!)
      .set('width', scaledWidth * 0.75)
      .setCoords();
  }

  modify() {
    this.set('width', this.getScaledWidth())
      .set('height', this.getScaledHeight())
      .set('scaleX', 1)
      .set('scaleY', 1)
      .setCoords();
  }

  private setText(text: string) {
    this.label.setLabel(text);
  }

  changeColor(fill?: string | fabric.Pattern | fabric.Gradient) {
    if (!fill) return;
    this.set('fill', fill);
  }
}

