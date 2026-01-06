import type { PlotThumbResult } from '@/types/plot.types';

interface PlotThumbCardRootProps extends React.ComponentProps<'div'> {
  plot: PlotThumbResult;
}

export const PlotThumbCardRoot: React.FC<PlotThumbCardRootProps> = ({ children }) => {
  return <div className="flex flex-grow flex-col space-y-2.5">{children}</div>;
};

export const PlotThumbCardImage: React.FC<{ imageUrl?: string }> = ({ imageUrl }) => {
  if (!imageUrl) return  <div className="mobile:w-full w-full h-[156px] bg-gray-300 rounded flex items-center justify-center">
  <span className="text-gray-500">Image</span>
</div>;
  return (
    <img src={imageUrl} alt="Plot Image" className="mobile:w-full w-full h-[156px] object-cover" />
  );
};

export const PlotThumbCardBody: React.FC<{ plot: PlotThumbResult }> = ({ plot }) => {
  return (
    <div className="flex justify-between items-end">
      <div className="flex space-x-2.5 rtl:space-x-reverse items-end">
        <div style={{ lineHeight: '1rem' }}>{plot.plotName || `Plot ${plot.plotNumber || plot.id}`}</div>
        {plot.price && <div className="text-xs opacity-50">${plot.price.toLocaleString()}</div>}
      </div>
      {plot.plotStatus && (
        <div className="text-xs px-2 py-1 bg-gray-200 rounded">{plot.plotStatus}</div>
      )}
    </div>
  );
};

