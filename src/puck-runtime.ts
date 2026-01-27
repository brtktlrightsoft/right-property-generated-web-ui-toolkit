// Slimmer runtime entry specifically for Puck usage in Next.js.
// This intentionally avoids importing heavy editor helpers and plan-view/Fabric code.
// Styles are still included so components render correctly.
import './index.css';

// Core Puck component prop types
export * from './types/puck.types';

// Default theme wrappers used by Puck
export * from './components/default/HomeFirstSectionWrapper';
export * from './components/default/HomePageContentWrapper';
export * from './components/default/PlotsShowcaseWrapper';

// Skyscrapper theme wrappers used by Puck
export * from './components/skyscrapper/SkyscrapperHomeFirstSectionWrapper';
export * from './components/skyscrapper/SkyscrapperHomesSecondSectionWrapper';
export * from './components/skyscrapper/SkyscrapperPlotsShowcaseWrapper';

// Voodvale theme wrappers used by Puck
export * from './components/voodvale/HeaderSectionWrapper';
export * from './components/voodvale/GridSectionWrapper';
export * from './components/voodvale/ContentSectionWrapper';
export * from './components/voodvale/VoodvaleHomeFirstSectionWrapper';
export * from './components/voodvale/VoodvaleHomeSecondSectionWrapper';
export * from './components/voodvale/VoodvalePlotsShowcaseWrapper';

// NOTE: PlanView / Fabric-heavy components are *not* re-exported here on purpose.
// Consumers that need plan view should import from:
//   'right-property-generated-web-ui-toolkit/plan-view'

