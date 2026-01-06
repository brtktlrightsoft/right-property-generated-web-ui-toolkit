import type { PlotThumbResult } from '@/types/plot.types';
interface PlotThumbCardRootProps extends React.ComponentProps<'div'> {
    plot: PlotThumbResult;
}
export declare const PlotThumbCardRoot: React.FC<PlotThumbCardRootProps>;
export declare const PlotThumbCardImage: React.FC<{
    imageUrl?: string;
}>;
export declare const PlotThumbCardBody: React.FC<{
    plot: PlotThumbResult;
}>;
export {};
//# sourceMappingURL=plot-thumb-card-parts.d.ts.map