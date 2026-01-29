import type { PlotThumbResult } from '@/types/plot.types';
import { cn } from '@/lib/utils';

interface SkyscrapperPlotThumbCardRootProps extends React.ComponentProps<'div'> {
  plot: PlotThumbResult;
}

export const SkyscrapperPlotThumbCardRoot: React.FC<SkyscrapperPlotThumbCardRootProps> = ({ children }) => {
  return <div className="skyscrapper-plot-thumb-card-root">{children}</div>;
};

export const SkyscrapperPlotThumbCardImage: React.FC<{ plot: PlotThumbResult }> = ({ plot }) => {
  const isLoading = !plot.imageUrl;

  return (
    <div className="skyscrapper-plot-thumb-card-image-wrapper">
      <div
        className="skyscrapper-plot-thumb-card-image-bg"
        style={{
          background: isLoading
            ? 'black'
            : `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${plot.imageUrl ?? ''}) lightgray -76.39px 0.265px / 114.913% 99.858% no-repeat`,
        }}
      >
        {isLoading && (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400">Loading...</span>
          </div>
        )}
      </div>
      {plot.plotStatus && (
        <SkyscrapperBadge plot={plot} className="skyscrapper-plot-thumb-card-badge" />
      )}
    </div>
  );
};

export const SkyscrapperPlotThumbCardBody: React.FC<{ plot: PlotThumbResult }> = ({ plot }) => {
  return (
    <div className="skyscrapper-plot-thumb-card-body">
      <div className="skyscrapper-plot-thumb-card-name-group">
        <div style={{ lineHeight: '1rem' }}>{plot.plotName || `Plot ${plot.plotNumber || plot.id}`}</div>
        {plot.price && (
          <div className="skyscrapper-plot-thumb-card-price">${plot.price.toLocaleString()}</div>
        )}
      </div>
    </div>
  );
};

const SkyscrapperBadge = ({ plot, className }: { plot: PlotThumbResult; className?: string }) => {
  const bgColor = '#00000066';
  const classes = cn(
    'skyscrapper-plot-thumb-card-badge-inner',
    className
  );
  return (
    <div className={classes} style={{ backgroundColor: bgColor }}>
      <div className="skyscrapper-plot-badge-dot"></div>
      <div>{plot.plotStatus || 'Available'}</div>
    </div>
  );
};

