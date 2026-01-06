import { PlotsShowcase } from '../common/PlotsShowcase';
import type { PlotsShowcaseEditableProps } from '@/types/default.types';

export function PlotsShowcaseWrapper(props: PlotsShowcaseEditableProps & Record<string, unknown>) {
  const { plots = [], title = 'Available Units', showAllLink = '/availability', locale = 'en', language = 'en' } = props;

  return <PlotsShowcase plots={plots} title={title} showAllLink={showAllLink} locale={locale} language={language} />;
}

