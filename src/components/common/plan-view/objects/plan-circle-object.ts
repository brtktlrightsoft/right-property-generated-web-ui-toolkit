import { fabric } from 'fabric';
import { v4 as uuid } from 'uuid';
import type { IPlanObject } from './plan-object';
import { PlanItemTypeEnum, PlanItemTypeEnumNames } from '../enums/plan-item-type-enum';
import { PlanObjectTypeEnum, PlanObjectTypeEnumNames } from '../enums/plan-object-type-enum';
import type { PlanItemResultModel } from '../models/plan-item-result-model';
import { PlanLabelObject } from './plan-label-object';

export class PlanCircleObject extends fabric.Circle implements IPlanObject {
  private readonly _objectId = uuid();

  containerId = 0;
  containerType: string;

  itemId = '';
  itemType: string = PlanItemTypeEnumNames[PlanItemTypeEnum.None];
  itemName = '';
  itemInformation?: string | undefined;
  public label: PlanLabelObject;

  get objectId() {
    return this._objectId;
  }

  get objectType() {
    return PlanObjectTypeEnumNames[PlanObjectTypeEnum.Circle];
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

  constructor(model: IPlanObject) {
    super({
      left: model.left,
      top: model.top,
      radius: Math.min(model.width ?? 0, model.height ?? 0) / 2,
      selectable: false,
      hasControls: false,
      originX: 'center',
      originY: 'center',
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
      left: this.left,
      top: this.top,
      width: this.width,
      height: (this.height ?? 0) / 2,
      visible: false,
    });
  }

  finishDrawing() {
    this.setControlsVisibility({
      bl: true,
      br: true,
      mb: false,
      ml: false,
      mr: false,
      mt: false,
      tl: true,
      tr: true,
      mtr: false,
    });

    this.selectable = false;
    this.evented = true;
    this.hasControls = true;
    this.centeredScaling = true;
    this.hoverCursor = 'pointer';
    this.text.visible = true;
    this.label.visible = true;
    this.setCoords();
  }

  redraw(pointer: fabric.IPoint) {
    const left = this.left;
    const top = this.top;

    this.set('radius', Math.max(Math.abs(pointer.x - (left ?? 0)), Math.abs(pointer.y - (top ?? 0)))).setCoords();

    this.text.set('left', this.left).set('top', this.top).set('width', this.width);
  }

  duplicate() {
    const clone = new PlanCircleObject({
      objectId: '',
      objectType: PlanObjectTypeEnumNames[PlanObjectTypeEnum.Circle],
      containerType: this.containerType,
      containerId: this.containerId,
      itemType: PlanItemTypeEnumNames[PlanItemTypeEnum.None],
      itemId: '',
      left: (this.left ?? 0) + (this.width ?? 0),
      top: this.top,
      fill: this.fill,
      radius: this.radius,
      label: this.label,
    });
    clone.finishDrawing();
    return clone;
  }

  assign(item: PlanItemResultModel) {
    if (item) {
      this.itemType = item.type;
      this.itemId = item.id;
      this.itemName = item.number ?? item.name;
      this.itemInformation = item.informations?.join('\r\n') ?? '';
      this.text.visible = true;
      this.label.visible = true;
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
    this.setText(this.itemName ?? '');
  }

  move() {
    this.setCoords();
    this.text.set('left', this.left).set('top', this.top).setCoords();
  }

  resize() {
    this.text.set('left', this.left).set('top', this.top).set('width', (this.radius ?? 0) * (this.scaleX ?? 1)).setCoords();
  }

  modify() {
    this.setCoords()
      .set('radius', (this.radius ?? 0) * (this.scaleX ?? 1))
      .set('scaleX', 1)
      .set('scaleY', 1);
  }

  private setText(text: string) {
    this.label.setLabel(text);
  }

  changeColor(fill?: string | fabric.Pattern | fabric.Gradient) {
    if (!fill) return;
    this.set('fill', fill);
    this.label.setColor(fill);
  }
}

