import { SkyscrapperHomesSecondSection } from './SkyscrapperHomesSecondSection';
import type { SkyscrapperHomesSecondSectionProps } from '@/types/skyscrapper.types';

export function SkyscrapperHomesSecondSectionWrapper(
  props: SkyscrapperHomesSecondSectionProps & Record<string, unknown>,
) {
  const {
    introText = "A new icon rises on Dubai’s horizon — a sculpted tower where architecture, luxury, and imagination collide.",
    image1 = '',
    image2 = '',
    image3 = '',
    gridTitle = 'In the Numbers',
    gridLead = "Our numbers reflect steady growth, strong engagement, and increasing trust from our users. Here’s a quick look at the key metrics driving our progress.",
    gridItems = [
      {
        increase: '50+',
        description: "Families who've found their perfect home in communities like Woodvale Quarters.",
      },
      {
        increase: '100%',
        description: 'Built on lasting trust and attention to detail in every development.',
      },
      {
        increase: '100%',
        description: 'Resident satisfaction through quality, care, and commitment.',
      },
      {
        increase: '15+',
        description: 'Years of expertise shaping elegant, well-crafted homes.',
      },
    ],
  } = props;

  return (
    <SkyscrapperHomesSecondSection
      introText={introText}
      image1={image1}
      image2={image2}
      image3={image3}
      gridTitle={gridTitle}
      gridLead={gridLead}
      gridItems={gridItems as SkyscrapperHomesSecondSectionProps['gridItems']}
    />
  );
}


