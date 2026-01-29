import type { VoodvaleContentSectionProps } from '@/types/voodvale.types';
import { Image } from '../common/image';

// Default image URLs – host app must expose these under its /public path
const DEFAULT_IMAGE_1 = '/assets/woodvale/voodvale-content-1.avif';
const DEFAULT_IMAGE_2 = '/assets/woodvale/voodvale-content-2.avif';
const DEFAULT_IMAGE_3 = '/assets/woodvale/voodvale-content-3.avif';
export function ContentSection({
  sectionTitle,
  sectionDescription,
  contentImage1,
  contentImage2,
  contentImage3,
}: VoodvaleContentSectionProps) {
  return (
    <div className="voodvale-content-section">
      <div className="voodvale-content-section-left">
        <div className="voodvale-content-section-title">
          {sectionTitle}
        </div>
        <div className="voodvale-content-section-description">
          {sectionDescription}
        </div>
        <div className="voodvale-content-section-image-1-desktop">
          <Image
            width={550}
            height={640}
            src={contentImage1 || DEFAULT_IMAGE_1}
            fallbackSrc={DEFAULT_IMAGE_1}
            alt="content"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <div className="voodvale-content-section-right">
        <div className="voodvale-content-section-image-2">
          <Image
            width={680}
            height={734}
            src={contentImage2 || DEFAULT_IMAGE_2}
            fallbackSrc={DEFAULT_IMAGE_2}
            alt="content"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="voodvale-content-section-image-3">
          <Image
            width={461}
            height={309}
            src={contentImage3 || DEFAULT_IMAGE_3}
            fallbackSrc={DEFAULT_IMAGE_3}
            alt="content"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <div className="voodvale-content-section-mobile">
        <div className="voodvale-content-section-mobile-image-1">
          <Image
            width={133}
            height={154}
            src={contentImage1 || DEFAULT_IMAGE_1}
            fallbackSrc={DEFAULT_IMAGE_1}
            alt="content"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="voodvale-content-section-mobile-images">
          <div className="voodvale-content-section-mobile-image-2">
          <Image
            width={197}
            height={212}
            src={contentImage2 || DEFAULT_IMAGE_2}
            fallbackSrc={DEFAULT_IMAGE_2}
            alt="content"
            className="w-full h-auto object-contain"
          />
          </div>
          <div className="voodvale-content-section-mobile-image-3">
          <Image
            width={133}
            height={212}
            src={contentImage3 || DEFAULT_IMAGE_3}
            fallbackSrc={DEFAULT_IMAGE_3}
            alt="content"
            className="w-full h-auto object-contain"
          />
          </div>
        </div>
      </div>
    </div>
  );
}


