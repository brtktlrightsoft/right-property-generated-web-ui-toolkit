import type {
  VoodvaleHeaderSectionProps,
  VoodvaleGridSectionProps,
  VoodvaleContentSectionProps,
  VoodvaleHomeFirstSectionEditableProps,
  VoodvaleSectionProps,
  VoodvalePlotsShowcaseEditableProps,
} from './voodvale.types';
import type { HomePageContentProps, HomeFirstSectionEditableProps, PlotsShowcaseEditableProps } from './default.types';
import type {
  SkyscrapperHomeFirstSectionEditableProps,
  SkyscrapperHomesSecondSectionProps,
  SkyscrapperPlotsShowcaseEditableProps,
} from './skyscrapper.types';
import type { PlanViewWrapperProps } from '@/components/common/PlanViewWrapper';

export type ComponentGroup = 'all' | 'voodvale' | 'default' | 'skyscrapper';

export type Components = {
  VoodvaleHeaderSection: VoodvaleHeaderSectionProps;
  VoodvaleGridSection: VoodvaleGridSectionProps;
  VoodvaleContentSection: VoodvaleContentSectionProps;
   VoodvaleHomeSecondSection: VoodvaleSectionProps;
  VoodvaleHomeFirstSection: VoodvaleHomeFirstSectionEditableProps;
  VoodvalePlotsShowcase: VoodvalePlotsShowcaseEditableProps;
  HomePageContent: HomePageContentProps;
  HomeFirstSection: HomeFirstSectionEditableProps;
  PlotsShowcase: PlotsShowcaseEditableProps;
  SkyscrapperHomeFirstSection: SkyscrapperHomeFirstSectionEditableProps;
  SkyscrapperHomesSecondSection: SkyscrapperHomesSecondSectionProps;
  SkyscrapperPlotsShowcase: SkyscrapperPlotsShowcaseEditableProps;
  SitePlan: PlanViewWrapperProps;
};


