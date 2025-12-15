import { VoodvaleHomeFirstSection } from './VoodvaleHomeFirstSection';
import type { VoodvaleHomeFirstSectionEditableProps } from '@/types/voodvale.types';

export function VoodvaleHomeFirstSectionWrapper(
  props: VoodvaleHomeFirstSectionEditableProps & Record<string, unknown>,
) {
  const {
    projectName = 'Voodvale',
    heading = 'A New Benchmark of Refined Living.',
    subheading = 'Experience contemporary homes crafted with finesse, surrounded by green spaces and effortless connections.',
    buttonLabel = 'Explore Listing',
    buttonHref = '/availability',
    backgroundUrl = '',
    mediaType = 'image',
    scrollIndicatorText = 'Scroll down',
    scrollIndicatorOpacity = 1,
  } = props;

  return (
    <VoodvaleHomeFirstSection
      projectName={projectName}
      heading={heading}
      subheading={subheading}
      buttonLabel={buttonLabel}
      buttonHref={buttonHref}
      backgroundData={{ isVideo: mediaType === 'video', backgroundUrl }}
      scrollIndicatorText={scrollIndicatorText}
      scrollIndicatorOpacity={scrollIndicatorOpacity as number}
    />
  );
}


