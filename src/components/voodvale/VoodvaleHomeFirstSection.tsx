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
    <div className="panel">
      <motion.div className="voodvale-hero-section">
        <BackgroundMedia backgroundData={bgData} projectName={projectName} />
        <motion.div
          className="voodvale-hero-overlay"
          style={{
            opacity: 0.5,
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
          }}
        />
        <div className="page-container voodvale-hero-content">
          <h1 className="voodvale-heading">
            {heading}
          </h1>
          <div className="voodvale-subheading-wrapper">
            <h3 className="voodvale-subheading">
              {subheading}
            </h3>
            <a
              href={buttonHref}
              className="voodvale-button"
              style={{
                boxShadow:
                  '0 72px 20px 0 rgba(0, 0, 0, 0.00), 0 46px 18px 0 rgba(0, 0, 0, 0.01), 0 26px 16px 0 rgba(0, 0, 0, 0.05), 0 12px 12px 0 rgba(0, 0, 0, 0.09), 0 3px 6px 0 rgba(0, 0, 0, 0.10)',
              }}
            >
              {buttonLabel}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}





