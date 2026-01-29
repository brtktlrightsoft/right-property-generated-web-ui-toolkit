import { cn } from '@/lib/utils';
import type { SkyscrapperHomesSecondSectionProps } from '@/types/skyscrapper.types';
import { Image } from '../common/image';

// Default image URLs – host app must expose these under its /public path
const DEFAULT_IMAGE_1 = '/assets/skyscrapper/skyscrapper_content_1.webp';
const DEFAULT_IMAGE_2 = '/assets/skyscrapper/skyscrapper_content_2.webp';
const DEFAULT_IMAGE_3 = '/assets/skyscrapper/skyscrapper_content_3.webp';
export function SkyscrapperHomesSecondSection({
  introText,
  image1,
  image2,
  image3,
  gridTitle,
  gridLead,
  gridItems,
}: SkyscrapperHomesSecondSectionProps) {
  return (
    <div id="second-section" className="second-section">
      <div>
        <div className="skyscrapper-second-section-intro">
          <p className="skyscrapper-second-section-intro-text">
            {introText}
          </p>
          <div className="skyscrapper-second-section-images">
            <Image
              width={233}
              height={288}
              src={image1 || DEFAULT_IMAGE_1}
              fallbackSrc={DEFAULT_IMAGE_1}
              alt="content-1"
              className="skyscrapper-second-section-image-1"
            />
            <Image
              width={233}
              height={288}
              src={image2 || DEFAULT_IMAGE_2}
              fallbackSrc={DEFAULT_IMAGE_2}
              alt="content-2"
              className="skyscrapper-second-section-image-2"
            />
            <Image
              width={233}
              height={288}
              src={image3 || DEFAULT_IMAGE_3}
              fallbackSrc={DEFAULT_IMAGE_3}
              alt="content-3"
              className="skyscrapper-second-section-image-3"
            />
          </div>
        </div>
        <div className="skyscrapper-second-section-grid">
          <div className="skyscrapper-second-section-grid-title">{gridTitle}</div>
          <div className="skyscrapper-second-section-grid-lead">
            {gridLead}
          </div>
          <div className="skyscrapper-second-section-grid-items">
            {gridItems.map((item, index) => (
              <GridCell key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const GridCell = ({
  description,
  increase,
  className,
}: {
  description: string;
  increase: string;
  className?: string;
}) => {
  const classes = cn('skyscrapper-grid-cell', className);
  return (
    <div className={classes}>
      <div className="skyscrapper-grid-cell-increase">{increase}</div>
      <div className="skyscrapper-grid-cell-description">{description}</div>
      <div className="skyscrapper-grid-cell-divider"></div>
    </div>
  );
};


