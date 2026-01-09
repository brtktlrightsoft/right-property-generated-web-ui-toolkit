import type { PlanItemResultModel } from "../models/plan-item-result-model";
import type { PlanCircleObject } from "../objects/plan-circle-object";
import type { PlanPolygonObject } from "../objects/plan-polygon-object";
import type { PlanRectangleObject } from "../objects/plan-rectangle-object";
export default function PlanViewPopup({ canvas, obj, item, onClickOutside, }: {
    canvas: fabric.Canvas;
    obj: PlanRectangleObject | PlanCircleObject | PlanPolygonObject;
    item: PlanItemResultModel;
    onClickOutside: () => void;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=plan-view-popup.d.ts.map