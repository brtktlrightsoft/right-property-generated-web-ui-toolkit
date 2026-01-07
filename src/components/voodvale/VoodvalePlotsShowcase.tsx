import type { PlotThumbResult } from '@/types/plot.types';
import { ItemSlider } from '../common/ItemSlider';
import { VoodvalePlotThumbCard } from '../common/PlotThumbCard';
import { cn } from '@/lib/utils';

interface VoodvalePlotsShowcaseProps {
  plots: PlotThumbResult[];
  title?: string;
  seeAllTitle?: string;
  showAllLink?: string;
  locale?: string;
  language?: string;
  showcaseVectorUrl?: string;
  showcaseMobileVectorUrl?: string;
}

export function VoodvalePlotsShowcase({
  plots,
  title = 'Available Units',
  seeAllTitle = 'See All Properties',
  showAllLink,
  language = 'en',
  showcaseVectorUrl,
  showcaseMobileVectorUrl,
}: VoodvalePlotsShowcaseProps) {
  const plotItems = plots.map((plot, index) => {
    return (
      <div key={`detail_link${index}`}>
        <VoodvalePlotThumbCard key={`showcase_card${index}`} plot={plot} />
      </div>
    );
  });

  return (
    <div
      className="relative w-full mx-auto flex flex-col"
      style={{
        background: 'radial-gradient(113.94% 104.88% at 55.95% -2.12%, #DECFCD 0%, #B38A82 56.73%, #988289 100%)',
      }}
    >
      <div className="relative z-[1] page-container">
        <div className="pt-[6.8125rem] mobile:pt-[4.1875rem] pb-[7.8125rem] mobile:pb-[9rem] px-[8.4375rem] mobile:pl-[1rem] mobile:pr-0">
          <div className="mb-[3.875rem] mobile:mb-[2rem] flex justify-between items-center">
            <h3 className="text-[2.75rem] mobile:text-[2.25rem] leading-[118.182%] text-[#FFF] font-medium" suppressHydrationWarning>
              {title}
            </h3>
            <SeeAllProperties className="mobile:hidden" pathname={showAllLink || ''} title={seeAllTitle || 'See All Properties'} />
          </div>
          <ItemSlider items={plotItems.slice(0, 3)} variant="voodvale" language={language} />
        </div>
      </div>
      <SeeAllProperties className="hidden mobile:block absolute z-[1] left-1/2 -translate-x-1/2 bottom-[4.1875rem]"  pathname={showAllLink || ''} title={seeAllTitle || 'See All Properties'} />
      {showcaseVectorUrl && (
        <div className="mobile:hidden z-[0] absolute w-[100vw] h-auto object-contain -bottom-[12.72vw] left-1/2 -translate-x-1/2">
          <img src={showcaseVectorUrl} alt="showcase vector" className="w-full h-full object-contain" />
        </div>
      )}
      {showcaseMobileVectorUrl && (
        <div className="mobile:block hidden z-[0] absolute w-[100vw] h-auto object-contain -bottom-[21vw] left-1/2 -translate-x-1/2">
          <img src={showcaseMobileVectorUrl} alt="showcase mobile vector" className="w-full h-full object-contain" />
        </div>
      )}
    </div>
  );
}

const SeeAllProperties = ({ pathname,title, className }: { pathname: string; title: string; className?: string }) => {
  return (
    <a className={cn('mobile:hidden', className)} href={pathname}>
      <div className="flex items-center gap-4">
        <div className="text-[1rem] text-[#FFF]">{title}</div>
        <Arrow />
      </div>
    </a>
  );
};

const Arrow = () => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4171_3931)">
        <path
          d="M15 0.65V10.35C15 10.5167 14.9417 10.6667 14.825 10.8C14.7083 10.9333 14.5583 11 14.375 11C14.1917 11 14.0333 10.9333 13.9 10.8C13.7667 10.6667 13.7 10.5167 13.7 10.35V2.2L1.1 14.8C0.966667 14.9333 0.808333 15 0.625 15C0.441667 15 0.291667 14.9417 0.175 14.825C0.0583333 14.7083 0 14.5583 0 14.375C0 14.1917 0.0666667 14.0333 0.2 13.9L12.8 1.3H4.65C4.48333 1.3 4.33333 1.23333 4.2 1.1C4.06667 0.966666 4 0.808333 4 0.625C4 0.441667 4.06667 0.291666 4.2 0.175C4.33333 0.0583334 4.48333 0 4.65 0H14.35C14.55 0 14.7083 0.0583334 14.825 0.175C14.9417 0.291666 15 0.45 15 0.65Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_4171_3931">
          <rect width="15" height="15" fill="white" transform="matrix(1 0 0 -1 0 15)" />
        </clipPath>
      </defs>
    </svg>
  );
};

