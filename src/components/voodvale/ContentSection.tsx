import type { VoodvaleContentSectionProps } from '@/types/voodvale.types';

export function ContentSection({
  sectionTitle,
  sectionDescription,
  contentImage1,
  contentImage2,
  contentImage3,
}: VoodvaleContentSectionProps) {
  return (
    <div className="mt-[11.5rem] mobile:mt-[6.250rem] mb-[7.5rem] flex mobile:flex-col gap-[3.125rem] mobile:gap-0 ">
      <div className="flex-shrink-0 w-[34.375rem] mobile:w-full">
        <div className="mb-[1.5rem] text-[3rem] mobile:text-[2.25rem] mobile:w-[19.6875rem] leading-[108.333%] text-[#12161D] font-medium capitalize">
          {sectionTitle}
        </div>
        <div className="mb-[3.75rem] text-[1.125rem] mobile:text-[1rem] leading-[144.444%] text-[#4A4A4A] font-normal">
          {sectionDescription}
        </div>
        <div className="w-full h-auto mobile:hidden">
          <img src={contentImage1} alt="content" className="w-full h-auto object-contain" />
        </div>
      </div>
      <div className="flex-grow mobile:hidden">
        <div className="w-full h-auto mb-[4.25rem]">
          <img src={contentImage2} alt="content" className="w-full h-auto object-contain" />
        </div>
        <div className="w-full h-auto">
          <img src={contentImage3} alt="content" className="w-full h-auto object-contain" />
        </div>
      </div>
      <div className="hidden mobile:flex justify-center mobile:gap-[0.903125rem]">
        <div className="mt-[5.375rem] w-[39.8vw] h-auto">
          <img src={contentImage1} alt="content" className="w-full h-auto object-contain" />
        </div>
        <div className="flex flex-col gap-[1.25rem]">
          <div className="w-[48.75vw] h-auto">
            <img src={contentImage2} alt="content" className="w-full h-auto object-contain" />
          </div>
          <div className="w-[33.08vw] h-auto">
            <img src={contentImage3} alt="content" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}


