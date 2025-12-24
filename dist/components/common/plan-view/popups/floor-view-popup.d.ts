import { fabric } from 'fabric';
import React from 'react';
import type { PlanItemResultModel } from '../models/plan-item-result-model';
import { PlanCircleObject } from '../objects/plan-circle-object';
import { PlanPolygonObject } from '../objects/plan-polygon-object';
import { PlanRectangleObject } from '../objects/plan-rectangle-object';
export interface FloorViewPopupProps {
    canvas: fabric.Canvas;
    obj: PlanRectangleObject | PlanCircleObject | PlanPolygonObject;
    item: PlanItemResultModel;
    onClickOutside: () => void;
    onNavigate?: (path: string) => void;
    measurementSystem?: 'metric' | 'imperial';
}
declare const FloorViewPopup: React.ForwardRefExoticComponent<FloorViewPopupProps & React.RefAttributes<HTMLDivElement>>;
export default FloorViewPopup;
//# sourceMappingURL=floor-view-popup.d.ts.map