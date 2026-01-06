import type { PlotThumbResult } from '@/types/plot.types';
interface PlotThumbCardProps {
    plot: PlotThumbResult;
    variant?: 'default' | 'voodvale' | 'skyscrapper';
}
export declare function PlotThumbCard({ plot, variant }: PlotThumbCardProps): import("react/jsx-runtime").JSX.Element;
export declare const SkyscrapperPlotThumbCard: ({ plot }: {
    plot: PlotThumbResult;
}) => import("react/jsx-runtime").JSX.Element;
export declare function VoodvalePlotThumbCard({ plot }: {
    plot: PlotThumbResult;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PlotThumbCard.d.ts.map