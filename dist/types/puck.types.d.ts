import type { VoodvaleHeaderSectionProps, VoodvaleGridSectionProps, VoodvaleContentSectionProps, VoodvaleHomeFirstSectionEditableProps, VoodvaleSectionProps } from './voodvale.types';
import type { HomePageContentProps, HomeFirstSectionEditableProps } from './default.types';
import type { SkyscrapperHomeFirstSectionEditableProps, SkyscrapperHomesSecondSectionProps } from './skyscrapper.types';
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
};
//# sourceMappingURL=puck.types.d.ts.map