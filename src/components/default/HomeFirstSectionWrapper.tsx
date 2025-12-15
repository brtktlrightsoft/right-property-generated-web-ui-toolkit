import { HomeFirstSection } from './HomeFirstSection';
import type { HomeFirstSectionEditableProps } from '@/types/default.types';

export function HomeFirstSectionWrapper(props: HomeFirstSectionEditableProps & Record<string, unknown>) {
  const {
    projectName = 'Right Property',
    projectDescription = 'Discover thoughtfully designed homes with seamless connections and serene green spaces.',
    backgroundUrl = '',
    mediaType = 'image',
    scrollIndicatorText = 'Scroll down',
    scrollIndicatorOpacity = 1,
  } = props;

  return (
    <HomeFirstSection
      projectName={projectName}
      projectDescription={projectDescription}
      backgroundData={{ isVideo: mediaType === 'video', backgroundUrl }}
      scrollIndicatorText={scrollIndicatorText}
      scrollIndicatorOpacity={scrollIndicatorOpacity as number}
    />
  );
}


