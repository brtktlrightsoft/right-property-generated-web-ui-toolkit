export interface WebSiteModuleResult {
  isEnabled: boolean;
  address: string;
  navigationId: string;
  instagram: string;
  twitter: string;
  facebook: string;
  pageContent: string;
  showPrice: boolean;
  getDraftChanges: boolean;
  googleAnalyticsMeasurementId: string;
  hostName: string;
  template: string;
  templateConfigurations:
    | {
        template: string;
        language: string;
        hero: string;
        body: string;
      }[]
    | null;
}
