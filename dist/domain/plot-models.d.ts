interface AppLanguageOption {
    id: string;
    text: string;
}
export interface PlotThumbResult {
    id: string;
    plotTypeId: number;
    plotNumber?: string;
    plotName?: string;
    price: number;
    coverImageAssetId?: string;
    plotStatus?: string;
}
export interface PlotStatusDto {
    id: number;
    name: string;
    color: string;
    inUse: boolean;
}
export interface MainModuleResult {
    clientName?: string;
    projectName?: string;
    projectDescription?: string;
    pageContent?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    availablePlotCount: number;
    currency?: string;
    measurementSystem?: string;
    country?: string;
    city?: string;
    district?: string;
    address?: string;
    googleAnalyticsMeasurementId: string;
    showPrice: boolean;
    language: string;
    languages: AppLanguageOption[];
    availablePlots: PlotThumbResult[];
    plotStatusList: PlotStatusDto[];
}
export {};
//# sourceMappingURL=plot-models.d.ts.map