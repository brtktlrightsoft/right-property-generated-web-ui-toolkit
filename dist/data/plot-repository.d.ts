import type { MainModuleResult } from '@/domain/plot-models';
import type { AssetResult, PlanItemResultModel, PlanObjectResultModel } from 'right-property-generated-web-ui-toolkit';
import type { UiToolkitConfig } from '../context/UiToolkitContext';
export interface SitePlanResult {
    availablePlotCount: number;
    plan: PlanResult;
}
export interface PlotTableResult {
    availablePlotCount: number;
    currency: string;
    columns: PlotTableColumn[];
    plots: PlotTableRow;
    favouritePlots?: string[];
}
export interface PlotTableColumn {
    text: string;
    percentage: number;
    unit?: string;
    localeKey: string;
}
export type PlotTableRow = Record<string, (string | number | null)[]>;
export type PlanSubType = 'MasterPlan' | 'Site' | 'Building' | 'Floor';
export interface PlanResult {
    id: string;
    type?: string;
    subType: PlanSubType;
    name?: string;
    number?: string;
    parentName?: string;
    parentId?: number;
    backgroundAsset: AssetResult;
    backgroundColor: string;
    siblings?: PlotContainerSibling[];
    containers: SitePlanContainer[];
    items: PlanItemResultModel[];
    objects: SitePlanObject[];
}
export interface PlotContainerSibling {
    id: number;
    type?: string;
    name?: string;
    number?: string;
}
export interface PlanContainerResultModel {
    id: number;
    type: string;
    name: string;
    assetId: string;
    order: number;
}
export interface SitePlanItem {
    id: number;
    type: string;
    name: string;
    number: string;
    color: string;
    information?: string;
}
export interface SitePlanContainer extends PlanContainerResultModel {
    type: string;
    id: number;
    name: string;
    assetId: string;
    order: number;
}
export interface SitePlanObject extends PlanObjectResultModel {
    objectId: string;
    objectType: string;
    left: number;
    top: number;
    width: number;
    height: number;
    radius: number;
    fill: string;
    opacity: number;
    svg: string;
    containerType: string;
    containerId: number;
    itemType: string;
    itemId: string;
    points: [
        {
            id: string;
            x: number;
            y: number;
            order: number;
        }
    ];
}
export interface ImageResult {
    preSignedUrl: string;
}
export declare class PlotRepository {
    private config;
    configure(config: UiToolkitConfig): void;
    private getConfig;
    private getAuthHeader;
    private getBaseUrl;
    makeGET<T>(url: string): Promise<T>;
    makePOST(url: string, body: unknown): Promise<any>;
    fetchMain(): Promise<MainModuleResult>;
    login(_websiteAddress: string): Promise<MainModuleResult>;
    fetchSitePlan(): Promise<SitePlanResult>;
    fetchPlotsTableData(): Promise<PlotTableResult>;
    fetchImage(imageId: string, width: number): Promise<ImageResult>;
}
export declare const plotRepository: PlotRepository;
export declare function createPlotRepository(config: UiToolkitConfig): PlotRepository;
//# sourceMappingURL=plot-repository.d.ts.map