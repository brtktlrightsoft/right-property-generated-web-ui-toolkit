import { SkyscrapperHomeFirstSection } from './SkyscrapperHomeFirstSection';
import type { SkyscrapperHomeFirstSectionEditableProps } from '@/types/skyscrapper.types';

export function SkyscrapperHomeFirstSectionWrapper(
  props: SkyscrapperHomeFirstSectionEditableProps & Record<string, unknown>,
) {
  const {
    projectName = 'Skyscrapper',
    heading = 'A New Peak.',
    subheadingLine1 = 'in the City',
    subheadingLine2 = 'of Impossibles',
    description = 'Experience contemporary homes crafted with finesse, surrounded by green spaces and effortless connections.',
    buttonLabel = 'Explore Listing',
    buttonHref = '/availability',
    backgroundUrl = '',
    mediaType = 'image',
    scrollIndicatorText = 'Scroll down',
    scrollIndicatorOpacity = 1,
  } = props;

  return (
    <SkyscrapperHomeFirstSection
      projectName={projectName}
      heading={heading}
      subheadingLine1={subheadingLine1}
      subheadingLine2={subheadingLine2}
      description={description}
      buttonLabel={buttonLabel}
      buttonHref={buttonHref}
      backgroundData={{ isVideo: mediaType === 'video', backgroundUrl }}
      scrollIndicatorText={scrollIndicatorText}
      scrollIndicatorOpacity={scrollIndicatorOpacity as number}
    />
  );
}


