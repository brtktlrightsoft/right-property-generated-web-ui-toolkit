import { motion } from 'framer-motion';
import type { VoodvaleHeaderSectionProps } from '@/types/voodvale.types';

export function HeaderSection({ title, description, animationEase = 'easeOut' }: VoodvaleHeaderSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: animationEase as
          | 'linear'
          | 'easeIn'
          | 'easeOut'
          | 'easeInOut'
          | 'circIn'
          | 'circOut'
          | 'circInOut'
          | 'backIn'
          | 'backOut'
          | 'backInOut'
          | 'anticipate',
      }}
      className="voodvale-header-wrapper"
    >
      <div className="voodvale-header-title">
        {title}
      </div>
      <div className="voodvale-header-description">
        {description}
      </div>
    </motion.div>
  );
}


