import { fabric } from 'fabric';
import { v4 as uuidv4 } from 'uuid';

export class PlanLineObject extends fabric.Line {
  private readonly _id: string = uuidv4();
  public canvas: fabric.Canvas;

  get id() {
    return this._id;
  }

  constructor(canvas: fabric.Canvas, pointer1: fabric.IPoint, pointer2: fabric.IPoint) {
    super([pointer1.x, pointer1.y, pointer2.x, pointer2.y], {
      strokeWidth: 0.2,
      stroke: '#000000',
      selectable: false,
      hasControls: false,
      evented: false,
      hasBorders: false,
    });
    this.canvas = canvas;
    this.selectable = false;
    this.canvas.add(this);
  }

  redraw(pointer: fabric.IPoint) {
    this.set('x2', pointer.x);
    this.set('y2', pointer.y);
  }
}

