import type { PlotThumbResult } from '@/types/plot.types';
import { ItemSlider } from './ItemSlider';
import { PlotThumbCard } from './PlotThumbCard';

interface PlotsShowcaseProps {
  plots: PlotThumbResult[];
  title?: string;
  showAllLink?: string;
  locale?: string;
  language?: string;
}

export function PlotsShowcase({
  plots,
  title = 'Available Units',
  showAllLink,
  language = 'en',
}: PlotsShowcaseProps) {
  const plotItems = plots.map((plot, index) => {
    return (
      <div key={`detail_link${index}`}>
        <PlotThumbCard key={`showcase_card${index}`} plot={plot} variant="default" />
      </div>
    );
  });

  return (
    <div className="w-full h-full mx-auto flex flex-col">
      <div className="page-container">
        <div className="space-y-5 px-5 lg:px-7.5 py-5 lg:py-10">
          <div className="flex justify-between items-end">
            <div className="space-x-2.5 rtl:space-x-reverse flex items-end">
              <h3 className="text-2xl" suppressHydrationWarning>
                {title}
              </h3>
              <h6 className="opacity-50 text-xs" suppressHydrationWarning>
                {`${plots.length} units`}
              </h6>
            </div>
            {showAllLink && (
              <a href={showAllLink}>
                <div suppressHydrationWarning>Show All</div>
              </a>
            )}
          </div>
          <ItemSlider items={plotItems.slice(0, 5)} variant="default" language={language} />
        </div>
      </div>
    </div>
  );
}

