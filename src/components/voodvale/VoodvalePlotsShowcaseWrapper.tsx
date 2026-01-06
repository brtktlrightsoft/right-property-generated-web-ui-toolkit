import { VoodvalePlotsShowcase } from './VoodvalePlotsShowcase';
import type { VoodvalePlotsShowcaseEditableProps } from '@/types/voodvale.types';

export function VoodvalePlotsShowcaseWrapper(props: VoodvalePlotsShowcaseEditableProps & Record<string, unknown>) {
  const {
    plots = [],
    title = 'Available Units',
    showAllLink = '/availability',
    locale = 'en',
    language = 'en',
    showcaseVectorUrl = '',
    showcaseMobileVectorUrl = '',
  } = props;

  return (
    <VoodvalePlotsShowcase
      plots={plots}
      title={title}
      showAllLink={showAllLink}
      locale={locale}
      language={language}
      showcaseVectorUrl={showcaseVectorUrl}
      showcaseMobileVectorUrl={showcaseMobileVectorUrl}
    />
  );
}

