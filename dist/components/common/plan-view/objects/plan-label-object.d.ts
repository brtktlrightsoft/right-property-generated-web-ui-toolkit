import { fabric } from 'fabric';
export declare class PlanLabelObject extends fabric.Group {
    private readonly _rectangle;
    private readonly _text;
    private readonly PADDING_RIGHT_LEFT;
    private readonly PADDING_TOP_BOTTOM;
    get label(): string | undefined;
    constructor(label: string, color: string | fabric.Pattern | fabric.Gradient, left: number, top: number, containerWidth: number, containerHeight: number, opacity?: number, fontSize?: number);
    setLabel(label: string): void;
    addStroke(): void;
    setColor(color: string | fabric.Pattern | fabric.Gradient): void;
    hideBackground(): void;
    setOpacity(opacity: number): void;
}
//# sourceMappingURL=plan-label-object.d.ts.map