import { fabric } from 'fabric';

export class PlanLabelObject extends fabric.Group {
  private readonly _rectangle: fabric.Rect;
  private readonly _text: fabric.Text;
  private readonly PADDING_RIGHT_LEFT = 10;
  private readonly PADDING_TOP_BOTTOM = 4;

  get label() {
    return this._text.text;
  }

  constructor(
    label: string,
    color: string | fabric.Pattern | fabric.Gradient,
    left: number,
    top: number,
    containerWidth: number,
    containerHeight: number,
    opacity?: number,
    fontSize: number = 16
  ) {
    super([], {
      left: left,
      top: top,
      selectable: false,
      hasControls: false,
      evented: false,
      lockRotation: true,
    });

    this._text = new fabric.Text(label, {
      left: containerWidth / 2 + left,
      top: containerHeight / 2 + top,
      fontSize: fontSize,
      lineHeight: 16,
      fontFamily: 'Inter',
      originX: 'center',
      originY: 'center',
      textAlign: 'center',
      hasControls: false,
      selectable: false,
      lockRotation: true,
      fill: 'white',
      fontWeight: 'bolder',
      opacity: opacity ?? 1,
    });

    this._rectangle = new fabric.Rect({
      left: containerWidth / 2 + left,
      top: containerHeight / 2 + top,
      originX: 'center',
      originY: 'center',
      width: (this._text.width ?? 0) + 200,
      height: (this._text.height ?? 0) + this.PADDING_TOP_BOTTOM * 2,
      selectable: false,
      hasControls: false,
      evented: false,
      hasBorders: false,
      lockRotation: true,
      fill: color,
      rx: 12,
      ry: 12,
      opacity: opacity ?? 1,
    });
    this.addWithUpdate(this._rectangle);

    this.addWithUpdate(this._text);
  }

  public setLabel(label: string) {
    try {
      this._text.set('text', label);
      this._rectangle.set('width', (this._text.width ?? 0) + this.PADDING_RIGHT_LEFT * 2);
    } catch (error) {
      // Handle error silently
    }
  }

  public addStroke() {
    this._text.set('stroke', 'black');
    this._text.set('strokeWidth', 15);
    this._text.set('paintFirst', 'stroke');
  }

  public setColor(color: string | fabric.Pattern | fabric.Gradient) {
    this._rectangle.set('fill', color);
  }

  public hideBackground() {
    this._rectangle.set('opacity', 0);
  }

  public setOpacity(opacity: number) {
    this._rectangle.set('opacity', opacity);
    this._text.set('opacity', opacity);
  }
}

