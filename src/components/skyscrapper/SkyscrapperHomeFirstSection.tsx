import { motion } from 'framer-motion';
import type { SkyscrapperHomeFirstSectionProps } from '@/types/skyscrapper.types';
import BackgroundMedia from '../common/background-media';

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
  return (
    <div className="panel absolute font-instrument-serif left-0 top-0 will-change-transform w-full h-full z-30">
      <motion.div
        className="pt-17.5 flex flex-col justify-end lg:justify-center px-5 bg-gray-300 relative h-[100vh] w-[100vw] bg-no-repeat bg-cover"
      >
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
          <h1 className="skyscrapper-text-gradient w-[58.3125rem] mobile:w-[19.875rem] text-[10.44rem] mobile:text-[5rem] ml-[11.86rem] mobile:ml-[0] mt-[8.5rem] text-white leading-[78.125%] tracking-[-0.20881rem]">
            {heading}
          </h1>
          <div className="mt-[1.56rem] mobile:mt-[5.19rem] ml-[58.56rem] mobile:ml-0">
            <h3 className="mb-[2.75rem] mobile:mb-[2.87rem] max-w-[34rem] mobile:max-w-[23.125rem] text-[3.40rem] text-[#CED7D8] leading-[3.5rem] tracking-[-0.06em]">
              {subheadingLine1}
              <br />
              {subheadingLine2}
            </h3>
            <p className="mb-[2rem] text-[#CED7D8] max-w-[21.5625rem] font-general-sans">
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
        <div className="px-6 py-3 h-[49px] flex items-center justify-center">
          <span className="text-white font-general-sans text-[0.875rem] font-medium">{children}</span>
        </div>
      </div>
    </a>
  );
}




