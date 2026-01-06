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
    <div
      className="group rounded-[24px] bg-[#1A1A1A] w-full h-[29.9375rem] mobile:h-[15.18rem] pl-[1.75rem] mobile:pl-[0.89rem]
        pr-[1.82rem] mobile:pr-[0.92rem] pt-[2rem] mobile:pt-[1.17rem] pb-[1.62rem] mobile:pb-[0.82rem] relative"
    >
      <div className="absolute top-[1.13rem] right-[0.69rem] invisible group-hover:visible transition-all duration-300">
        <Arrow />
      </div>
      <div className="mb-[2.2rem] mobile:mb-[0.99rem] pl-[1.22rem] mobile:pl-[0.62rem] flex gap-[1.75rem] items-center">
        <div className="text-[#CED7D8] text-[1.5rem] tracking-[0.045rem] mobile:text-[0.875rem] mobile:tracking-[0.02rem]">
          {(index + 1).toString().padStart(2, '0')}
        </div>
      </div>
      <Name name={plot.plotName ?? ''} className="pl-[1.22rem] mobile:pl-[0.62rem] mb-[2.49rem] mobile:mb-[1.11rem]" />
      {isLoading ? (
        <LoaderComp className="w-full h-[15.437rem]" />
      ) : (
        <div
          className="object-cover object-center w-full h-[15.437rem] mobile:h-[7.83rem] rounded-[11px] bg-gray-700 flex items-center justify-center"
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
    <div className="group rounded-[24px] flex flex-col justify-between h-[29.9375rem] mobile:h-[15.18rem] relative">
      <div
        style={{
          background: isLoading
            ? 'black'
            : `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${plot.imageUrl ?? ''}) lightgray -76.39px 0.265px / 114.913% 99.858% no-repeat`,
        }}
        className="absolute rounded-[24px] overflow-hidden top-0 left-0 w-full h-full !bg-cover !bg-center z-[4]"
      ></div>
      <div className="absolute z-[6] top-[1.13rem] right-[0.69rem] invisible group-hover:visible transition-all duration-300">
        <Arrow />
      </div>
      <div
        className="pl-[2.02rem] mobile:pl-[1.02rem] pr-[1.82rem] mobile:pr-[0.92rem] pt-[2rem] mobile:pt-[1.17rem] pb-[1.62rem]
          mobile:pb-[0.82rem] flex gap-[1.75rem] items-center z-[6]"
      >
        <div className="text-[#CED7D8] text-[1.5rem] tracking-[0.045rem] mobile:text-[0.875rem] mobile:tracking-[0.02rem]">
          {(index + 1).toString().padStart(2, '0')}
        </div>
      </div>
      <Name name={plot.plotName ?? ''} className="pl-[2.02rem] mobile:pl-[1.02rem] mb-[2.49rem] mobile:mb-[1.11rem] z-[6]" />
    </div>
  );
};

const LoaderComp = ({ className }: { className?: string }) => {
  const cnClass = cn('select-none w-full min-h-[11.25rem] max-w-full h-full flex grow', className);
  return (
    <div className={cnClass}>
      <div className="w-full max-w-full grow flex animate-pulse items-center justify-center bg-gray-300 rounded dark:bg-gray-700">
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
    <div
      className={cn(
        'text-[2.5rem] mobile:text-[1.25rem] mobile:tracking-[-0.0125rem] leading-[75%] tracking-[-0.025rem] text-[#CED7D8]',
        className
      )}
    >
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


