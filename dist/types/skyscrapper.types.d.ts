export type SkyscrapperBackgroundData = {
    isVideo: boolean;
    backgroundUrl: string;
};
export type SkyscrapperHomeFirstSectionProps = {
    projectName: string;
    heading: string;
    subheadingLine1: string;
    subheadingLine2: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
    backgroundData: SkyscrapperBackgroundData;
    scrollIndicatorText?: string;
    scrollIndicatorOpacity?: number;
};
export type SkyscrapperHomeFirstSectionEditableProps = Omit<SkyscrapperHomeFirstSectionProps, 'backgroundData'> & {
    mediaType: 'image' | 'video';
    backgroundUrl: string;
};
export type SkyscrapperGridItem = {
    increase: string;
    description: string;
};
export type SkyscrapperHomesSecondSectionProps = {
    introText: string;
    image1: string;
    image2: string;
    image3: string;
    gridTitle: string;
    gridLead: string;
    gridItems: SkyscrapperGridItem[];
};
import type { PlotThumbResult } from './plot.types';
export type SkyscrapperPlotsShowcaseEditableProps = {
    plots: PlotThumbResult[];
    title?: string;
    subtitle?: string;
    locale?: string;
    language?: string;
};
//# sourceMappingURL=skyscrapper.types.d.ts.map