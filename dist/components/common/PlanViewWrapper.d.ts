import type { PlanObjectResultModel, PlanItemResultModel, AssetResult } from './plan-view';
export interface PlanViewWrapperProps {
    planId: string;
    objects: PlanObjectResultModel[] | string;
    items: PlanItemResultModel[] | string;
    background: AssetResult | string;
    color: string;
    elementId?: string;
    useHalfWidth?: boolean;
    showPrice?: boolean;
    measurementSystem?: 'metric' | 'imperial';
}
export declare function PlanViewWrapper(props: PlanViewWrapperProps & Record<string, unknown>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PlanViewWrapper.d.ts.map