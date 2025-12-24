export interface PlanItemResultModel {
    id: string;
    type: 'Plot' | 'Container' | 'Room';
    name: string;
    number: string;
    color?: string;
    informations?: string[];
    plotInfo?: PlotInfo;
    roomInfo?: RoomInfo;
    plotContainerInfo?: PlotContainerInfo;
}
interface RoomInfo {
    roomName: string;
    areaMetric?: number;
    areaImperial?: number;
    widthMetric?: number;
    heightMetric?: number;
    widthImperial?: number;
    heightImperial?: number;
}
interface PlotInfo {
    name: string;
    number: number;
    typeName: string;
    description: string;
    price: number;
    metricArea: number;
    imperialArea: number;
    bedrooms: number;
    bathrooms: number;
    statusName: string;
    storey: number;
}
interface PlotContainerInfo {
    name: string;
    plotCount: number;
    priceMin: number;
    priceMax: number;
    bedroomsMin: number;
    bedroomsMax: number;
    areaMin: number;
    areaMax: number;
    areaUnit: string;
    currencyCode: string;
}
export {};
//# sourceMappingURL=plan-item-result-model.d.ts.map