import { HeaderSection } from './HeaderSection';
import { GridSection } from './GridSection';
import { ContentSection } from './ContentSection';
import type { VoodvaleSectionProps } from '@/types/voodvale.types';

export function VoodvaleHomeSecondSection({
  title,
  description,
  gridData,
  sectionTitle,
  sectionDescription,
  contentImage1,
  contentImage2,
  contentImage3,
}: VoodvaleSectionProps) {
  return (
    <div className="voodvale-home-second-section">
      <HeaderSection title={title} description={description} />
      <GridSection gridData={gridData} />
      <ContentSection
        sectionTitle={sectionTitle}
        sectionDescription={sectionDescription}
        contentImage1={contentImage1}
        contentImage2={contentImage2}
        contentImage3={contentImage3}
      />
    </div>
  );
}


