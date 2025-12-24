import type { fabric } from 'fabric';
import type { PlanObjectPointResultModel } from './plan-object-point-result-model';
export interface PlanObjectResultModel {
    objectId: string;
    objectType: string;
    left: number;
    top: number;
    width?: number;
    height?: number;
    radius?: number;
    points?: PlanObjectPointResultModel[];
    fill: string | fabric.Pattern | fabric.Gradient;
    opacity: number;
    svg: string;
    containerType: string;
    containerId: number;
    itemType: string;
    itemId: string;
}
//# sourceMappingURL=plan-object-result-model.d.ts.map