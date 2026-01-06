import type { PlotThumbResult } from '@/types/plot.types';

interface VoodvalePlotThumbCardRootProps extends React.ComponentProps<'div'> {
  plot: PlotThumbResult;
}

export const VoodvalePlotThumbCardRoot: React.FC<VoodvalePlotThumbCardRootProps> = ({ children, plot }) => {
  return (
    <div className="flex flex-grow flex-col rounded-[12px] overflow-hidden relative border border-[#E6E6E6]">
      {children}
      {plot.plotStatus && (
        <div className="absolute top-[1.25rem] left-[1.25rem]">
          <div className="px-[1.25rem] py-[0.625rem] rounded-[7px] text-[0.75rem] leading-[normal] font-medium text-[#FFF] min-w-0 min-h-0 bg-gray-600">
            {plot.plotStatus}
          </div>
        </div>
      )}
    </div>
  );
};

export const VoodvalePlotThumbCardImage: React.FC<{ imageUrl?: string }> = ({ imageUrl }) => {
  if (!imageUrl) return <div className="w-full h-[240px] object-cover bg-gray-300 rounded flex items-center justify-center">
    <span className="text-gray-500">Image </span>
  </div>;
  return (
    <img src={imageUrl} alt="Plot Image" className="w-full h-[240px] object-cover" />
  );
};

export const VoodvalePlotThumbCardBody: React.FC<{ plot: PlotThumbResult }> = ({ plot }) => {
  return (
    <div className="flex justify-between items-center bg-white px-[1.25rem] pt-[1.4018rem] pb-[1.625rem]">
      <div className="text-[1.125rem] leading-[100%] text-[#181A20] font-medium">
        {plot.plotName || `Plot ${plot.plotNumber || plot.id}`}
      </div>
      {plot.price && (
        <div className="text-[1.125rem] leading-[158.333%] text-[#A87D6F] font-medium">
          ${plot.price.toLocaleString()}
        </div>
      )}
    </div>
  );
};

