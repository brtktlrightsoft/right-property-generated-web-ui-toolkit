import { cn } from '@/lib/utils';
import type { GridItem, VoodvaleGridSectionProps } from '@/types/voodvale.types';

const GridCell = ({
  title,
  description,
  increase,
  className,
}: GridItem & { className?: string }) => {
  const classes = cn('voodvale-grid-cell', className);
  return (
    <div className={classes}>
      <div className="voodvale-grid-cell-title">
        {title}
      </div>
      <div className="voodvale-grid-cell-content">
        <div className="voodvale-grid-cell-increase">
          {increase}
        </div>
        <div className="voodvale-grid-cell-description">
          {description}
        </div>
      </div>
    </div>
  );
};

export function GridSection({ gridData }: VoodvaleGridSectionProps) {
  return (
    <div className="voodvale-grid">
      {gridData.map((item, index) => (
        <GridCell
          key={index}
          {...item}
          className={`voodvale-grid-cell-${index}`}
        />
      ))}
    </div>
  );
}


