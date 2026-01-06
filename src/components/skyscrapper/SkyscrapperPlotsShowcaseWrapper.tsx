import { SkyscrapperPlotsShowcase } from './SkyscrapperPlotsShowcase';
import type { SkyscrapperPlotsShowcaseEditableProps } from '@/types/skyscrapper.types';

export function SkyscrapperPlotsShowcaseWrapper(
  props: SkyscrapperPlotsShowcaseEditableProps & Record<string, unknown>,
) {
  const {
    plots = [],
    title = 'Available Units',
    subtitle = 'Five distinct residence types, tailored to your needs.',
    locale = 'en',
    language = 'en',
  } = props;

  return <SkyscrapperPlotsShowcase plots={plots} title={title} subtitle={subtitle} locale={locale} language={language} />;
}

