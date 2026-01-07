import type { PlotThumbResult } from '@/types/plot.types';
import { ItemSlider } from '../common/ItemSlider';
import { SkyscrapperShowcaseCard } from './SkyscrapperShowcaseCard';

interface SkyscrapperPlotsShowcaseProps {
  plots: PlotThumbResult[];
  title?: string;
  subtitle?: string;
  locale?: string;
  language?: string;
}

export function SkyscrapperPlotsShowcase({
  plots,
  title = 'Available Units',
  subtitle = 'Five distinct residence types, tailored to your needs.',
  language = 'en',
}: SkyscrapperPlotsShowcaseProps) {
  const plotItems = plots.map((plot, index) => {
    return (
      <div key={`detail_link${index}`}>
        <SkyscrapperShowcaseCard plot={plot} index={index} variant={index === 0 ? 'first' : 'default'} />
      </div>
    );
  });

  return (
    <div className="relative w-full mx-auto flex flex-col bg-black">
      <div className="relative z-[1] page-container">
        <div className="pt-[6.8125rem] mobile:pt-[4.1875rem] pb-[7.5rem] mobile:pb-[9rem] mobile:pl-[1.3rem] mobile:pr-0">
          <div className="mb-[3.875rem] mobile:mb-[2rem] flex justify-between items-center">
            <div suppressHydrationWarning>
              <div className="pl-[11.57rem] mobile:pl-0">
                <div
                  className="mb-[2.87rem] mobile:mb-[2.25rem] text-[2.75rem] mobile:text-[2.25rem] leading-[100%] text-[#FFF]
                    font-medium"
                >
                  {title}
                </div>
                <p className="text-[1.25rem] mobile:text-[1rem] text-white">{subtitle}</p>
              </div>
            </div>
          </div>
          <div className="pl-[3.87rem] mobile:pl-0">
            <ItemSlider items={plotItems.slice(0, 5)} variant="skyscrapper" language={language} />
          </div>
        </div>
      </div>
    </div>
  );
}

