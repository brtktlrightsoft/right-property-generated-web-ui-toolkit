// Separate entry point for plan-view components
// This prevents fabric from loading when importing the main package
export * from './components/common/plan-view';
export * from './components/common/PlanViewWrapper';
export * from './hooks/usePlotRepository';
export { plotRepository, createPlotRepository } from './data/plot-repository';
export type { SitePlanResult, PlotTableResult, PlanResult, ImageResult } from './data/plot-repository';
