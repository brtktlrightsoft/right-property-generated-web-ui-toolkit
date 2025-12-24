import type { PlanObjectResultModel } from './models/plan-object-result-model';
import type { PlanItemResultModel } from './models/plan-item-result-model';
import { CanvasSubject } from './domain/canvas-subject';
import type { AssetResult } from './domain/asset-result';
export interface PlanViewProps {
    planId: string;
    objects: PlanObjectResultModel[];
    items: PlanItemResultModel[];
    background: AssetResult;
    color: string;
    canvasSubject?: CanvasSubject;
    elementId?: string;
    useHalfWidth?: boolean;
    onNavigate?: (path: string) => void;
    formatCurrency?: (amount: number) => string;
    formatArea?: (area: number) => string;
    t?: (key: string) => string;
    showPrice?: boolean;
    measurementSystem?: 'metric' | 'imperial';
}
export default function PlanView({ planId, objects, items, background, color, canvasSubject, elementId, useHalfWidth, onNavigate, formatCurrency, formatArea, t, showPrice, measurementSystem, }: PlanViewProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PlanView.d.ts.map