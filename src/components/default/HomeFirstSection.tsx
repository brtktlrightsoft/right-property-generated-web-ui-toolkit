import { motion } from 'framer-motion';
import type { HomeFirstSectionProps } from '@/types/default.types';
import BackgroundMedia from '../common/background-media';

// Default background image URL – host app must expose this under its /public path
const DEFAULT_BACKGROUND = '/assets/wimbledon/background.webp';
export function HomeFirstSection({
  projectName,
  projectDescription,
  backgroundData,
  scrollIndicatorText = 'Scroll down',
  scrollIndicatorOpacity = 1,
}: HomeFirstSectionProps) {
  const bgData = backgroundData?.backgroundUrl
    ? { isVideo: backgroundData.isVideo, backgroundUrl: backgroundData.backgroundUrl }
    : { isVideo: false, backgroundUrl: DEFAULT_BACKGROUND };
  return (
    <div className="panel">
      <div className="default-hero-section">
        <BackgroundMedia backgroundData={bgData} projectName={projectName} />
        <div
          className="default-hero-overlay"
          style={{ opacity: 0.5, backgroundColor: 'black' }}
        />
        <motion.div
          className="default-hero-gradient"
          style={{
            opacity: 0,
            background:
              'linear-gradient(0deg, var(--menuBgColor), var(--menuBgColor)), linear-gradient(180deg, var(--menuBgColor) 0%, rgba(0, 53, 110, 0) 100%)',
          }}
        />
        <div className="page-container default-hero-content">
          <div className="default-hero-text">
            <h1 className="default-hero-title">{projectName}</h1>
            <h3 className="default-hero-description">
              {projectDescription}
            </h3>
          </div>
          <motion.div
            id="scroll-indicator"
            className="default-scroll-indicator"
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




