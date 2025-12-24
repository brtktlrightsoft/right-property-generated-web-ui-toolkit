import { fabric } from 'fabric';
export declare class PlanLineObject extends fabric.Line {
    private readonly _id;
    canvas: fabric.Canvas;
    get id(): string;
    constructor(canvas: fabric.Canvas, pointer1: fabric.IPoint, pointer2: fabric.IPoint);
    redraw(pointer: fabric.IPoint): void;
}
//# sourceMappingURL=plan-line-object.d.ts.map