import { motion } from 'framer-motion';
import type { HomeFirstSectionProps } from '@/types/default.types';
import BackgroundMedia from '../common/background-media';
import defaultBg from '@/assets/wimbledon/background.webp';
export function HomeFirstSection({
  projectName,
  projectDescription,
  backgroundData,
  scrollIndicatorText = 'Scroll down',
  scrollIndicatorOpacity = 1,
}: HomeFirstSectionProps) {
  const bgData = backgroundData?.backgroundUrl ? { isVideo: backgroundData.isVideo, backgroundUrl: backgroundData.backgroundUrl } : { isVideo: false, backgroundUrl: defaultBg };
  return (
    <div className="panel absolute left-0 top-0 will-change-transform w-full h-full z-30">
      <div className="pt-17.5 flex flex-col justify-end lg:justify-center px-5 bg-gray-300 relative h-[100vh] w-[100vw] bg-no-repeat bg-cover">
        <BackgroundMedia backgroundData={bgData} projectName={projectName} />
        <div
          className="absolute z-20 top-0 left-0 h-[100vh] w-[100vw]"
          style={{ opacity: 0.5, backgroundColor: 'black' }}
        />
        <motion.div
          className="absolute z-30 top-0 left-0 h-[100vh] w-[100vw]"
          style={{
            opacity: 0,
            background:
              'linear-gradient(0deg, var(--menuBgColor), var(--menuBgColor)), linear-gradient(180deg, var(--menuBgColor) 0%, rgba(0, 53, 110, 0) 100%)',
          }}
        />
        <div className="page-container z-30 justify-end lg:justify-center px-5 py-5 lg:px-7.5 lg:py-7.5 mobile:p-0">
          <div className="mb-12.5 flex flex-col justify-end lg:justify-center lg:grow">
            <h1 className="font-bold text-5xl mb-2.5 text-[#FAF9FD]">{projectName}</h1>
            <h3 className="text-[1rem] mobile:text-[0.8rem] mobile:leading-[1.2rem] leading-[1.45rem] w-[37.5rem] mobile:w-[100%] text-[#FAF9FD] font-light whitespace-pre-wrap">
              {projectDescription}
            </h3>
          </div>
          <motion.div
            id="scroll-indicator"
            className="flex space-x-2.5 rtl:space-x-reverse items-center py-5 lg:mt-auto"
            style={{ opacity: scrollIndicatorOpacity }}
          >
            <MouseIcon />
            <span className="text-base font-light justify-self-end text-[#FAF9FD]">
              {scrollIndicatorText}
            </span>
          </motion.div>
        </div>
      </div>
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




