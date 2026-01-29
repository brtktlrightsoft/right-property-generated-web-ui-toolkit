import type { PlotThumbResult } from '@/types/plot.types';

interface PlotThumbCardRootProps extends React.ComponentProps<'div'> {
  plot: PlotThumbResult;
}

export const PlotThumbCardRoot: React.FC<PlotThumbCardRootProps> = ({ children }) => {
  return <div className="plot-thumb-card-root">{children}</div>;
};

export const PlotThumbCardImage: React.FC<{ imageUrl?: string }> = ({ imageUrl }) => {
  if (!imageUrl) return  <div className="plot-thumb-card-image-placeholder">
  <span className="text-gray-500">Image</span>
</div>;
  return (
    <img src={imageUrl} alt="Plot Image" className="plot-thumb-card-image" />
  );
};

export const PlotThumbCardBody: React.FC<{ plot: PlotThumbResult }> = ({ plot }) => {
  return (
    <div className="plot-thumb-card-body">
      <div className="plot-thumb-card-name">
        <div style={{ lineHeight: '1rem' }}>{plot.plotName || `Plot ${plot.plotNumber || plot.id}`}</div>
        {plot.price && <div className="text-xs opacity-50">${plot.price.toLocaleString()}</div>}
      </div>
      {plot.plotStatus && (
        <div className="plot-thumb-card-status">{plot.plotStatus}</div>
      )}
    </div>
  );
};

