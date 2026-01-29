import { HeaderSection } from './voodvale/HeaderSection';
import { GridSection } from './voodvale/GridSection';
import { ContentSection } from './voodvale/ContentSection';

type VoodvaleSectionProps = {
  title?: string;
  description?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  gridData?: Array<{
    title: string;
    increase: string;
    description: string;
  }>;
  contentImage1?: string;
  contentImage2?: string;
  contentImage3?: string;
};

export function VoodvaleSection(props: VoodvaleSectionProps & Record<string, unknown>) {
  const {
    title = '',
    description = '',
    sectionTitle = '',
    sectionDescription = '',
    gridData = [],
    contentImage1 = '',
    contentImage2 = '',
    contentImage3 = '',
  } = props;

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


