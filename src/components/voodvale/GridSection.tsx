import { cn } from '@/lib/utils';
import type { GridItem, VoodvaleGridSectionProps } from '@/types/voodvale.types';

const GridCell = ({
  title,
  description,
  increase,
  className,
}: GridItem & { className?: string }) => {
  const classes = cn('flex flex-col bg-white', className);
  return (
    <div className={classes}>
      <div className="pt-[1.6875rem] pl-[1.9375rem] mobile:pl-0 mobile:pb-[0.875rem] text-[1.125rem] leading-[144.444%] text-[#4A4A4A] font-normal">
        {title}
      </div>
      <div className="pl-[15.875rem] pb-[1.9375rem] mobile:pl-0 ">
        <div className="mb-[0.75rem] text-[2.25rem] leading-[133.333%] text-[#C6A195] font-semibold">
          {increase}
        </div>
        <div className="text-[1.125rem] leading-[144.444%] text-[#61656E] font-medium mobile:w-full">
          {description}
        </div>
      </div>
    </div>
  );
};

export function GridSection({ gridData }: VoodvaleGridSectionProps) {
  return (
    <div className="grid grid-cols-2 mobile:grid-cols-1">
      {gridData.map((item, index) => (
        <GridCell
          key={index}
          {...item}
          className={`hover:bg-[#C7A093]/10 transition-all duration-300 border-t border-[#E3E3E3] ${
            index === 0 ? 'mobile:border-t-1' : ''
          } mobile:border-b-1 mobile:border-r-0 ${index < 2 ? 'border-b' : ''} ${
            index % 2 === 0 ? 'border-r' : ''
          }`}
        />
      ))}
    </div>
  );
}


