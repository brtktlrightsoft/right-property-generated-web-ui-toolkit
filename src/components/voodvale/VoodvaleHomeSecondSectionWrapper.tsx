import { VoodvaleHomeSecondSection } from './VoodvaleHomeSecondSection';
import type { VoodvaleSectionProps } from '@/types/voodvale.types';

export function VoodvaleHomeSecondSectionWrapper(
  props: VoodvaleSectionProps & Record<string, unknown>,
) {
  const {
    title = 'A Neighbourhood That Feels Like Home',
    description =
      'Woodvale Quarters brings together the charm of classic British architecture and the convenience of modern living. Surrounded by landscaped gardens and walkable streets, the development celebrates thoughtful design and quality finishes that make every home feel exceptional.',
    gridData = [
      {
        title: 'Dream Homes Realised',
        increase: '50+',
        description: "Families who've found their perfect home in communities like Woodvale Quarters.",
      },
      {
        title: 'Trusted by Homeowners',
        increase: '100%',
        description: 'Built on lasting trust and attention to detail in every development.',
      },
      {
        title: 'Pride in Every Home',
        increase: '100%',
        description: 'Resident satisfaction through quality, care, and commitment.',
      },
      {
        title: 'Built on Experience',
        increase: '15+',
        description: 'Years of expertise shaping elegant, well-crafted homes.',
      },
    ],
    sectionTitle = 'Find Your Dream\nHome Here',
    sectionDescription =
      'Experience the charm and comfort of life at Woodvale Quarters.\n\nBrowse our gallery to explore the architecture, surroundings, and amenities that make this community a beautiful place to call home.',
    contentImage1 = '',
    contentImage2 = '',
    contentImage3 = '',
  } = props;

  return (
    <VoodvaleHomeSecondSection
      title={title}
      description={description}
      gridData={gridData}
      sectionTitle={sectionTitle}
      sectionDescription={sectionDescription}
      contentImage1={contentImage1}
      contentImage2={contentImage2}
      contentImage3={contentImage3}
    />
  );
}


