export type GridItem = {
    title: string;
    increase: string;
    description: string;
};
export type VoodvaleHeaderSectionProps = {
    title: string;
    description: string;
    animationEase?: string;
};
export type VoodvaleGridSectionProps = {
    gridData: Array<GridItem>;
};
export type VoodvaleContentSectionProps = {
    sectionTitle: string;
    sectionDescription: string;
    contentImage1: string;
    contentImage2: string;
    contentImage3: string;
};
export type VoodvaleSectionProps = VoodvaleHeaderSectionProps & VoodvaleGridSectionProps & VoodvaleContentSectionProps;
export type VoodvaleHomeFirstSectionProps = {
    projectName: string;
    heading: string;
    subheading: string;
    buttonLabel: string;
    buttonHref: string;
    backgroundData: {
        isVideo: boolean;
        backgroundUrl: string;
    };
    scrollIndicatorText?: string;
    scrollIndicatorOpacity?: number;
};
export type VoodvaleHomeFirstSectionEditableProps = Omit<VoodvaleHomeFirstSectionProps, 'backgroundData'> & {
    mediaType: 'image' | 'video';
    backgroundUrl: string;
};
import type { PlotThumbResult } from './plot.types';
export type VoodvalePlotsShowcaseEditableProps = {
    plots: PlotThumbResult[];
    title?: string;
    showAllLink?: string;
    locale?: string;
    language?: string;
    showcaseVectorUrl?: string;
    showcaseMobileVectorUrl?: string;
};
//# sourceMappingURL=voodvale.types.d.ts.map