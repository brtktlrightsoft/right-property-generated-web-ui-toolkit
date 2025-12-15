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
    <div className="w-full mx-auto flex flex-col pt-[3rem] px-[5rem] mobile:px-5 max-w-[1440px]">
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


