import { motion } from 'framer-motion';
import type { SkyscrapperHomeFirstSectionProps } from '@/types/skyscrapper.types';
import BackgroundMedia from '../common/background-media';

// Default background image URL – host app must expose this under its /public path
const DEFAULT_BACKGROUND = '/assets/skyscrapper/background.webp';
export function SkyscrapperHomeFirstSection({
  projectName,
  heading,
  subheadingLine1,
  subheadingLine2,
  description,
  buttonLabel,
  buttonHref,
  backgroundData,
}: SkyscrapperHomeFirstSectionProps) {
  const bgData = backgroundData?.backgroundUrl
    ? { isVideo: backgroundData.isVideo, backgroundUrl: backgroundData.backgroundUrl }
    : { isVideo: false, backgroundUrl: DEFAULT_BACKGROUND };

  return (
    <div className="panel font-instrument-serif">
      <motion.div className="skyscrapper-hero-section">
        <BackgroundMedia backgroundData={bgData} projectName={projectName} />
        <motion.div
          className="skyscrapper-hero-overlay"
          style={{
            opacity: 0.1,
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
          }}
        />
        <div className="page-container skyscrapper-hero-content">
          <h1 className="skyscrapper-heading skyscrapper-text-gradient">
            {heading}
          </h1>
          <div className="skyscrapper-content-wrapper">
            <h3 className="skyscrapper-subheading">
              {subheadingLine1}
              <br />
              {subheadingLine2}
            </h3>
            <p className="skyscrapper-description">
              {description}
            </p>
            <GradientBorderButton href={buttonHref}>{buttonLabel}</GradientBorderButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function GradientBorderButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a href={href}>
      <div className="gradient-border-button">
        <div className="gradient-border-button-inner">
          <span className="text-white font-general-sans text-sm font-medium">{children}</span>
        </div>
      </div>
    </a>
  );
}




