import type { PlotThumbResult } from '@/types/plot.types';
import { cn } from '@/lib/utils';

interface SkyscrapperShowcaseCardProps {
  plot: PlotThumbResult;
  index: number;
  variant: 'default' | 'first';
}

export function SkyscrapperShowcaseCard({ plot, index, variant }: SkyscrapperShowcaseCardProps) {
  switch (variant) {
    case 'first':
      return <FirstShowcaseCard plot={plot} index={index} />;
    case 'default':
      return <DefaultShowcaseCard plot={plot} index={index} />;
  }
}

const FirstShowcaseCard = ({ plot, index }: { plot: PlotThumbResult; index: number }) => {
  const isLoading = !plot.imageUrl;
  return (
    <div className="group skyscrapper-showcase-card-first">
      <div className="skyscrapper-showcase-card-arrow">
        <Arrow />
      </div>
      <div className="skyscrapper-showcase-card-number">
        <div>
          {(index + 1).toString().padStart(2, '0')}
        </div>
      </div>
      <Name name={plot.plotName ?? ''} className="skyscrapper-showcase-card-name-first" />
      {isLoading ? (
        <LoaderComp className="w-full h-[15.437rem]" />
      ) : (
        <div
          className="skyscrapper-showcase-card-image"
          style={{
            backgroundImage: plot.imageUrl ? `url(${plot.imageUrl})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {!plot.imageUrl && <span className="text-gray-400">No Image</span>}
        </div>
      )}
    </div>
  );
};

const DefaultShowcaseCard = ({ plot, index }: { plot: PlotThumbResult; index: number }) => {
  const isLoading = !plot.imageUrl;
  return (
    <div className="group skyscrapper-showcase-card-default">
      <div
        style={{
          background: isLoading
            ? 'black'
            : `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${plot.imageUrl ?? ''}) lightgray -76.39px 0.265px / 114.913% 99.858% no-repeat`,
        }}
        className="skyscrapper-showcase-card-bg"
      ></div>
      <div className="skyscrapper-showcase-card-arrow">
        <Arrow />
      </div>
      <div className="skyscrapper-showcase-card-content">
        <div className="text-[#CED7D8] text-[1.5rem] tracking-[0.045rem] mobile:text-[0.875rem] mobile:tracking-[0.02rem]">
          {(index + 1).toString().padStart(2, '0')}
        </div>
      </div>
      <Name name={plot.plotName ?? ''} className="skyscrapper-showcase-card-name-default" />
    </div>
  );
};

const LoaderComp = ({ className }: { className?: string }) => {
  const cnClass = cn('select-none w-full min-h-11-25rem max-w-full h-full flex grow', className);
  return (
    <div className={cnClass}>
      <div className="w-full max-w-full grow flex animate-pulse items-center justify-center bg-gray-300 rounded">
        <svg
          className="w-12 h-12 text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 640 512"
        >
          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
      </div>
    </div>
  );
};

const Name = ({ name, className }: { name: string; className?: string }) => {
  return (
    <div className={cn('skyscrapper-showcase-card-name', className)}>
      {name}
    </div>
  );
};

const Arrow = () => {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 51L51 21" stroke="#EFB76F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 21H51V51" stroke="#EFB76F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};


