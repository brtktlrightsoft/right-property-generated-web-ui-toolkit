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
    },
  ];
}
export interface ImageResult {
  preSignedUrl: string;
}
export class PlotRepository {
  private config: UiToolkitConfig | null = null;

  public configure(config: UiToolkitConfig) {
    this.config = config;
  }

  private getConfig(): UiToolkitConfig {
    if (!this.config) {
      throw new Error(
        'PlotRepository is not configured. Either use UiToolkitProvider or call plotRepository.configure()'
      );
    }
    return this.config;
  }

  private getAuthHeader(): string {
    const { accessToken } = this.getConfig();
    return accessToken.startsWith('Bearer ') ? accessToken : `Bearer ${accessToken}`;
  }

  private getBaseUrl(): string {
    const { apiUrl } = this.getConfig();
    return apiUrl.endsWith('/') ? apiUrl.slice(0, -1) : apiUrl;
  }

  async makeGET<T>(url: string) {
    const response = await fetch(`${this.getBaseUrl()}/${url}`, {
      headers: {
        Authorization: this.getAuthHeader(),
      },
    });
    return response.json() as Promise<T>;
  }

  async makePOST(url: string, body: unknown) {
    const response = await fetch(`${this.getBaseUrl()}/${url}`, {
      method: 'POST',
      headers: {
        Authorization: this.getAuthHeader(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response.json();
  }

  async fetchMain() {
    return this.makeGET<MainModuleResult>('web/main');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(_websiteAddress: string) {
    return this.makeGET<MainModuleResult>('web/main');
  }

  async fetchSitePlan() {
    return this.makeGET<SitePlanResult>(`web/availability/siteplan`);
  }

  async fetchPlotsTableData() {
    return this.makeGET<PlotTableResult>('web/availability/plots');
  }

  async fetchImage(imageId: string, width: number) {
    return this.makeGET<ImageResult>(`asset/presignedurl/${imageId}?width=${width}&isThumbnail=false`);
  }
}

export const plotRepository = new PlotRepository();

export function createPlotRepository(config: UiToolkitConfig): PlotRepository {
  const repo = new PlotRepository();
  repo.configure(config);
  return repo;
}
