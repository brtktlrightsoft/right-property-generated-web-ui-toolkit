import { cn } from '@/lib/utils';
import type { SkyscrapperHomesSecondSectionProps } from '@/types/skyscrapper.types';
import { Image } from '../common/image';
export function SkyscrapperHomesSecondSection({
  introText,
  image1,
  image2,
  image3,
  gridTitle,
  gridLead,
  gridItems,
}: SkyscrapperHomesSecondSectionProps) {
  return (
    <div
      id="second-section"
      className="second-section left-0 top-0 w-full min-h-[100vh] flex flex-col z-10 pt-[12rem] mobile:pt-[8.5rem]"
    >
      <div>
        <div className="w-full mx-auto flex flex-col px-[5rem] mobile:px-5 max-w-[1440px]">
          <p className="mx-auto w-[57.48rem] mobile:w-full text-center text-[3.75rem] mobile:text-[2.25rem] leading-[108%] text-[#CED7D8]">
            {introText}
          </p>
          <div className="mb-[5rem] mobile:mb-[0rem] relative h-[46.875rem] mobile:h-[55vh]">
            <Image
              width={233}
              height={288}
              src={image1}
              alt="content-1"
              className="absolute right-1/2 -translate-x-[10%] top-1/2 -translate-y-[80%] w-[14.55rem] mobile:w-[10rem] h-[17.98rem] mobile:h-[12.3025rem] object-cover skyscrapper-image-mask"
            />
            <Image
              width={233}
              height={288}
              src={image2}
              alt="content-2"
              className="absolute right-1/2 translate-x-[105%] top-1/2 -translate-y-[115%] w-[14.55rem] mobile:w-[10rem] h-[17.98rem] mobile:h-[12.3025rem] object-cover skyscrapper-image-mask"
            />
            <Image
              width={233}
              height={288}
              src={image3}
              alt="content-3"
              className="absolute right-1/2 translate-x-[75%] top-1/2 -translate-y-[2%] w-[19.57rem] h-[24.20rem] mobile:w-[13.375rem] mobile:h-[16.625rem] object-cover skyscrapper-image-mask lg"
            />
          </div>
        </div>
        <div
          className="pt-[10rem] mobile:pt-[0rem] pb-[12rem] mobile:pb-[9rem] pl-[11.57rem] pr-[22.27rem] mobile:px-[1.3rem] mx-auto max-w-[1440px]"
        >
          <div className="text-[3.75rem] mobile:text-[2.25rem] mb-[3rem] mobile:mb-[2.25rem]">{gridTitle}</div>
          <div className="mb-[10.69rem] mobile:mb-[4.19rem] font-general-sans text-[1.125rem] mobile:text-[1rem]">
            {gridLead}
          </div>
          <div className="grid grid-cols-2 mobile:grid-cols-1 gap-[15.20rem] mobile:gap-[3.75rem]">
            {gridItems.map((item, index) => (
              <GridCell key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const GridCell = ({
  description,
  increase,
  className,
}: {
  description: string;
  increase: string;
  className?: string;
}) => {
  const classes = cn('', className);
  return (
    <div className={classes}>
      <div className="skyscrapper-text-gradient tracking-[-0.1rem] text-[5rem] mb-[1.25rem]">{increase}</div>
      <div className="font-general-sans text-[1rem] leading-[162%] h-[7.75rem]">{description}</div>
      <div className="h-[1px] bg-[#FABA6C4D] w-full"></div>
    </div>
  );
};


