import type {
  VoodvaleHeaderSectionProps,
  VoodvaleGridSectionProps,
  VoodvaleContentSectionProps,
  VoodvaleHomeFirstSectionEditableProps,
  VoodvaleSectionProps,
} from './voodvale.types';
import type { HomePageContentProps, HomeFirstSectionEditableProps } from './default.types';
import type {
  SkyscrapperHomeFirstSectionEditableProps,
  SkyscrapperHomesSecondSectionProps,
} from './skyscrapper.types';
import type { PlanViewWrapperProps } from '@/components/common/PlanViewWrapper';

export type ComponentGroup = 'all' | 'voodvale' | 'default' | 'skyscrapper';

export type Components = {
  VoodvaleHeaderSection: VoodvaleHeaderSectionProps;
  VoodvaleGridSection: VoodvaleGridSectionProps;
  VoodvaleContentSection: VoodvaleContentSectionProps;
   VoodvaleHomeSecondSection: VoodvaleSectionProps;
  VoodvaleHomeFirstSection: VoodvaleHomeFirstSectionEditableProps;
  HomePageContent: HomePageContentProps;
  HomeFirstSection: HomeFirstSectionEditableProps;
  SkyscrapperHomeFirstSection: SkyscrapperHomeFirstSectionEditableProps;
  SkyscrapperHomesSecondSection: SkyscrapperHomesSecondSectionProps;
  SitePlan: PlanViewWrapperProps;
};


