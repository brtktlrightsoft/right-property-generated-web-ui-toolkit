import { motion } from 'framer-motion';
import type { VoodvaleHomeFirstSectionProps } from '@/types/voodvale.types';

export function VoodvaleHomeFirstSection({
  projectName,
  heading,
  subheading,
  buttonLabel,
  buttonHref,
  backgroundData,
  scrollIndicatorText = 'Scroll down',
  scrollIndicatorOpacity = 1,
}: VoodvaleHomeFirstSectionProps) {
  return (
    <div className="panel absolute left-0 top-0 will-change-transform w-full h-full z-30">
      <motion.div className="pt-17.5 flex flex-col justify-end lg:justify-center px-5 bg-gray-300 relative h-[100vh] w-[100vw] bg-no-repeat bg-cover">
        <BackgroundMedia backgroundData={backgroundData} projectName={projectName} />
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
          <motion.div
            className="flex space-x-2.5 rtl:space-x-reverse items-center py-5 lg:mt-auto"
            style={{ opacity: scrollIndicatorOpacity }}
          >
            <MouseIcon />
            <span className="text-base font-light justify-self-end text-projectNameDesc">{scrollIndicatorText}</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function MouseIcon() {
  return (
    <svg
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="15" height="23" rx="7.5" stroke="white" />
      <circle cx="8" cy="6" r="1" fill="white" />
      <line x1="8" y1="7.5" x2="8" y2="11.5" stroke="white" />
    </svg>
  );
}

function BackgroundMedia({
  backgroundData,
  projectName,
}: {
  backgroundData: VoodvaleHomeFirstSectionProps['backgroundData'];
  projectName: string;
}) {
  if (backgroundData.isVideo) {
    return (
      <video
        src={backgroundData.backgroundUrl}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute z-10 top-0 left-0 w-full h-full object-cover"
      />
    );
  }

  return (
    <img
      loading="eager"
      alt={projectName}
      src={backgroundData.backgroundUrl}
      style={{ objectFit: 'cover' }}
      className="absolute z-10 top-0 left-0 w-full h-full object-cover"
    />
  );
}


