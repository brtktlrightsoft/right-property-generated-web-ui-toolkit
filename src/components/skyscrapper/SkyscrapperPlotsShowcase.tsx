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
      <a href={plot.href} key={`detail_link${index}`}>
        <SkyscrapperShowcaseCard plot={plot} index={index} variant={index === 0 ? 'first' : 'default'} />
      </a>
    );
  });

  return (
    <div className="skyscrapper-plots-showcase">
      <div className="page-container skyscrapper-plots-showcase-content">
        <div className="skyscrapper-plots-showcase-header">
          <div suppressHydrationWarning>
            <div className="skyscrapper-plots-showcase-title-wrapper">
              <div className="skyscrapper-plots-showcase-title">
                {title}
              </div>
              <p className="skyscrapper-plots-showcase-subtitle">{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="skyscrapper-plots-showcase-slider">
          <ItemSlider items={plotItems.slice(0, 5)} variant="skyscrapper" language={language} />
        </div>
      </div>
    </div>
  );
}

