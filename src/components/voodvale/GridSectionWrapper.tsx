import { GridSection } from './GridSection';
import type { VoodvaleGridSectionProps } from '@/types/voodvale.types';

export function GridSectionWrapper(props: VoodvaleGridSectionProps & Record<string, unknown>) {
  const { gridData = [] } = props;
  return <GridSection gridData={gridData} />;
}


