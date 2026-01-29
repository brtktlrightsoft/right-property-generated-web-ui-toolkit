import type { PlotThumbResult } from '@/types/plot.types';

interface VoodvalePlotThumbCardRootProps extends React.ComponentProps<'div'> {
  plot: PlotThumbResult;
}

export const VoodvalePlotThumbCardRoot: React.FC<VoodvalePlotThumbCardRootProps> = ({ children, plot }) => {
  return (
    <div className="voodvale-plot-thumb-card-root">
      {children}
      {plot.plotStatus && (
        <div className="voodvale-plot-thumb-card-badge">
          <div className="voodvale-plot-thumb-card-badge-inner">
            {plot.plotStatus}
          </div>
        </div>
      )}
    </div>
  );
};

export const VoodvalePlotThumbCardImage: React.FC<{ imageUrl?: string }> = ({ imageUrl }) => {
  if (!imageUrl) return <div className="voodvale-plot-thumb-card-image-placeholder">
    <span className="text-gray-500">Image </span>
  </div>;
  return (
    <img src={imageUrl} alt="Plot Image" className="voodvale-plot-thumb-card-image" />
  );
};

export const VoodvalePlotThumbCardBody: React.FC<{ plot: PlotThumbResult }> = ({ plot }) => {
  return (
    <div className="voodvale-plot-thumb-card-body">
      <div className="voodvale-plot-thumb-card-name">
        {plot.plotName || `Plot ${plot.plotNumber || plot.id}`}
      </div>
      {plot.price && (
        <div className="voodvale-plot-thumb-card-price">
          ${plot.price.toLocaleString()}
        </div>
      )}
    </div>
  );
};

