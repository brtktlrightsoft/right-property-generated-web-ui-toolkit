// Public entrypoint for the UI toolkit
// Import global styles so consumers get compiled SCSS CSS with components
import './index.css';

// context
export * from './context/UiToolkitContext';

// hooks
export * from './hooks/usePlotRepository';

// data
export { plotRepository, createPlotRepository } from './data/plot-repository';
export type { SitePlanResult, PlotTableResult, PlanResult, ImageResult } from './data/plot-repository';

// domain
export type { MainModuleResult, PlotThumbResult } from './domain/plot-models';

// types
export * from './types/default.types';
export * from './types/skyscrapper.types';
export * from './types/voodvale.types';
export * from './types/puck.types';
export * from './types/plot.types';


// default theme components
export * from './components/default/HomeFirstSection';
export * from './components/default/HomeFirstSectionWrapper';
export * from './components/default/HomePageContent';
export * from './components/default/HomePageContentWrapper';
export * from './components/common/PlotsShowcase';
export * from './components/default/PlotsShowcaseWrapper';
export * from './components/common/ItemSlider';
export * from './components/common/PlotThumbCard';
export * from './components/common/plot-thumb-card/plot-thumb-card-parts';
export * from './components/common/plot-thumb-card/voodvale-plot-thumb-card/voodvale-plot-thumb-card-parts';
export * from './components/common/plot-thumb-card/skyscrapper-plot-thumb-card/skyscrapper-plot-thumb-card-parts';

// skyscrapper components
export * from './components/skyscrapper/SkyscrapperHomeFirstSection';
export * from './components/skyscrapper/SkyscrapperHomeFirstSectionWrapper';
export * from './components/skyscrapper/SkyscrapperHomesSecondSection';
export * from './components/skyscrapper/SkyscrapperHomesSecondSectionWrapper';
export * from './components/skyscrapper/SkyscrapperPlotsShowcase';
export * from './components/skyscrapper/SkyscrapperPlotsShowcaseWrapper';
export * from './components/skyscrapper/SkyscrapperShowcaseCard';

// voodvale components
export * from './components/voodvale/HeaderSection';
export * from './components/voodvale/HeaderSectionWrapper';
export * from './components/voodvale/GridSection';
export * from './components/voodvale/GridSectionWrapper';
export * from './components/voodvale/ContentSection';
export * from './components/voodvale/ContentSectionWrapper';
export * from './components/voodvale/VoodvaleHomeFirstSection';
export * from './components/voodvale/VoodvaleHomeFirstSectionWrapper';
export * from './components/voodvale/VoodvaleHomeSecondSection';
export * from './components/voodvale/VoodvaleHomeSecondSectionWrapper';
export * from './components/voodvale/VoodvalePlotsShowcase';
export * from './components/voodvale/VoodvalePlotsShowcaseWrapper';
export * from './components/VoodvaleSection';

// plan-view types (exported here for use in other modules, components moved to separate entry)
export type { PlanObjectResultModel, PlanItemResultModel, AssetResult, PlanObjectPointResultModel } from './components/common/plan-view';

// plan-view components - moved to separate entry point to avoid fabric/jsdom loading
// Import from 'right-property-generated-web-ui-toolkit/plan-view' if needed



