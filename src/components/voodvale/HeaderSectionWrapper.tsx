import { HeaderSection } from './HeaderSection';
import type { VoodvaleHeaderSectionProps } from '@/types/voodvale.types';

export function HeaderSectionWrapper(props: VoodvaleHeaderSectionProps & Record<string, unknown>) {
  const { title = '', description = '', animationEase = 'easeOut' } = props;
  return <HeaderSection title={title} description={description} animationEase={animationEase} />;
}


