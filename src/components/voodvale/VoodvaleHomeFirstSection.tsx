import { motion } from 'framer-motion';
import type { VoodvaleHomeFirstSectionProps } from '@/types/voodvale.types';
import BackgroundMedia from '../common/background-media';

// Default background image URL – host app must expose this under its /public path
const DEFAULT_BACKGROUND = '/assets/woodvale/wodvale_bg.avif';
export function VoodvaleHomeFirstSection({
  projectName,
  heading,
  subheading,
  buttonLabel,
  buttonHref,
  backgroundData,
}: VoodvaleHomeFirstSectionProps) {
  const bgData = backgroundData?.backgroundUrl
    ? { isVideo: backgroundData.isVideo, backgroundUrl: backgroundData.backgroundUrl }
    : { isVideo: false, backgroundUrl: DEFAULT_BACKGROUND };
  return (
    <div className="panel absolute left-0 top-0 will-change-transform w-full h-full z-30">
      <motion.div className="pt-17.5 pb-[2rem] flex flex-col justify-end lg:justify-center px-5 bg-gray-300 relative h-[100vh] w-[100vw] bg-no-repeat bg-cover">
        <BackgroundMedia backgroundData={bgData} projectName={projectName} />
        <motion.div
          className="absolute z-20 top-0 left-0"
          style={{
            opacity: 0.5,
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
          }}
        />
        <div className="page-container z-30 text-white">
          <h1 className="w-[58.3125rem] mobile:w-[19.875rem] font-medium text-[5.625rem] mobile:text-[3rem] ml-[7.875rem] mobile:ml-[0] mt-[8.5rem] text-white leading-[107%] tracking-[-0.01em] capitalize">
            {heading}
          </h1>
          <div className="mt-[5rem] mobile:mt-[2.5rem] ml-[45.9375rem] mobile:ml-0">
            <h3 className="mb-[1.0625rem] mobile:mb-[3.125rem] w-[34rem] mobile:w-[23.125rem] text-[1.25rem] leading-[135%] tracking-[0.03em]">
              {subheading}
            </h3>
            <a
              href={buttonHref}
              style={{
                boxShadow:
                  '0 72px 20px 0 rgba(0, 0, 0, 0.00), 0 46px 18px 0 rgba(0, 0, 0, 0.01), 0 26px 16px 0 rgba(0, 0, 0, 0.05), 0 12px 12px 0 rgba(0, 0, 0, 0.09), 0 3px 6px 0 rgba(0, 0, 0, 0.10)',
              }}
              className="bg-white rounded-[7px] text-[#484848] flex items-center justify-center w-[10.0625rem] h-[3.125rem]"
            >
              {buttonLabel}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}





