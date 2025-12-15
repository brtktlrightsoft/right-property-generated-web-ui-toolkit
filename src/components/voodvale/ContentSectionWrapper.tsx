import { ContentSection } from './ContentSection';
import type { VoodvaleContentSectionProps } from '@/types/voodvale.types';

export function ContentSectionWrapper(props: VoodvaleContentSectionProps & Record<string, unknown>) {
  const {
    sectionTitle = '',
    sectionDescription = '',
    contentImage1 = '',
    contentImage2 = '',
    contentImage3 = '',
  } = props;
  return (
    <ContentSection
      sectionTitle={sectionTitle}
      sectionDescription={sectionDescription}
      contentImage1={contentImage1}
      contentImage2={contentImage2}
      contentImage3={contentImage3}
    />
  );
}


