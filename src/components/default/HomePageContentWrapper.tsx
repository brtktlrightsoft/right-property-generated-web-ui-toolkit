import { HomePageContent } from './HomePageContent';
import type { HomePageContentProps } from '@/types/default.types';

export function HomePageContentWrapper(props: HomePageContentProps & Record<string, unknown>) {
  const {
    title = '',
    titleColor = '#1a1a1a',
    subtitle = '',
    paragraphs = [],
    image1 = '',
    image2 = '',
    image3 = '',
  } = props;

  return (
    <HomePageContent
      title={title}
      titleColor={titleColor}
      subtitle={subtitle}
      paragraphs={paragraphs}
      image1={image1}
      image2={image2}
      image3={image3}
    />
  );
}


