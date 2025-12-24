import { fabric } from 'fabric';
import { PlanLabelObject } from './plan-label-object';
export interface IPlanObject {
    objectId: string;
    objectType: string;
    containerId: number;
    containerType: string;
    itemId: string;
    itemType: string;
    itemInformation?: string;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    radius?: number;
    points?: fabric.Point[];
    fill?: string | fabric.Pattern | fabric.Gradient;
    opacity?: number;
    label: PlanLabelObject | null;
}
//# sourceMappingURL=plan-object.d.ts.map