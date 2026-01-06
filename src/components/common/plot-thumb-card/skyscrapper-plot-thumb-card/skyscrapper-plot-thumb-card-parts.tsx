import type { PlotThumbResult } from '@/types/plot.types';
import { cn } from '@/lib/utils';

interface SkyscrapperPlotThumbCardRootProps extends React.ComponentProps<'div'> {
  plot: PlotThumbResult;
}

export const SkyscrapperPlotThumbCardRoot: React.FC<SkyscrapperPlotThumbCardRootProps> = ({ children }) => {
  return <div className="flex flex-grow flex-col space-y-[1.5rem]">{children}</div>;
};

export const SkyscrapperPlotThumbCardImage: React.FC<{ plot: PlotThumbResult }> = ({ plot }) => {
  const isLoading = !plot.imageUrl;

  return (
    <div className="rounded-[24px] overflow-hidden relative">
      <div
        className="h-[19.375rem] w-full"
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
        <SkyscrapperBadge plot={plot} className="absolute top-[1.5rem] left-[1.5rem]" />
      )}
    </div>
  );
};

export const SkyscrapperPlotThumbCardBody: React.FC<{ plot: PlotThumbResult }> = ({ plot }) => {
  return (
    <div className="flex justify-between items-end">
      <div className="flex justify-between w-full items-center text-[1.125rem]">
        <div style={{ lineHeight: '1rem' }}>{plot.plotName || `Plot ${plot.plotNumber || plot.id}`}</div>
        {plot.price && (
          <div className="text-[#FABA6C] text-[1.375rem]">${plot.price.toLocaleString()}</div>
        )}
      </div>
    </div>
  );
};

const SkyscrapperBadge = ({ plot, className }: { plot: PlotThumbResult; className?: string }) => {
  const bgColor = '#00000066';
  const classes = cn(
    'border flex items-center gap-[0.5rem] border-white/17 rounded-[11px] px-[0.75rem] py-[0.62rem] font-general-sans text-[0.625rem] text-white tracking-[0.01875rem]',
    className
  );
  return (
    <div className={classes} style={{ backgroundColor: bgColor }}>
      <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
      <div>{plot.plotStatus || 'Available'}</div>
    </div>
  );
};

