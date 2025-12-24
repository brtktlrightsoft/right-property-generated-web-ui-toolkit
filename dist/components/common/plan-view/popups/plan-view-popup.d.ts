import { fabric } from 'fabric';
import type { PlanItemResultModel } from '../models/plan-item-result-model';
import { PlanCircleObject } from '../objects/plan-circle-object';
import { PlanPolygonObject } from '../objects/plan-polygon-object';
import { PlanRectangleObject } from '../objects/plan-rectangle-object';
export interface PlanViewPopupProps {
    canvas: fabric.Canvas;
    obj: PlanRectangleObject | PlanCircleObject | PlanPolygonObject;
    item: PlanItemResultModel;
    onClickOutside: () => void;
    onNavigate?: (path: string) => void;
    formatCurrency?: (amount: number) => string;
    formatArea?: (area: number) => string;
    t?: (key: string) => string;
    showPrice?: boolean;
}
export default function PlanViewPopup({ canvas, obj, item, onClickOutside, onNavigate, formatCurrency, formatArea, t, showPrice, }: PlanViewPopupProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=plan-view-popup.d.ts.map