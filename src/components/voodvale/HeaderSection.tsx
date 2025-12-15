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
      className="mt-[3rem] mb-[5rem] mobile:mb-[3.125rem] flex mobile:flex-col mobile:gap-[1.875rem] justify-between"
    >
      <div className="w-[34.5rem] mobile:w-[19.6875rem] text-[3rem] mobile:text-[2.25rem] leading-[122%] tracking-[-0.01em] text-[#12161D] font-medium capitalize">
        {title}
      </div>
      <div className="w-[39.125rem] mobile:w-full text-[1.125rem] mobile:text-[1rem] leading-[144.444%] text-[#4A4A4A] font-normal">
        {description}
      </div>
    </motion.div>
  );
}


