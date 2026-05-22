import { PlotsShowcase } from '../common/PlotsShowcase';
import type { PlotsShowcaseEditableProps } from '@/types/default.types';

export function PlotsShowcaseWrapper(props: PlotsShowcaseEditableProps & Record<string, unknown>) {
  const { plots = [], title = 'Available Units', showAllLink = '/availability', locale = 'en', language = 'en', unitsText = 'units' } = props;

  return <PlotsShowcase plots={plots} unitsText={unitsText} title={title} showAllLink={showAllLink} locale={locale} language={language} />;
}

