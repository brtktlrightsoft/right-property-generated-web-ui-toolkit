import type { HomePageContentProps } from '@/types/default.types';
import { Image } from '../common/image';

export function HomePageContent({
  title,
  titleColor = '#1a1a1a',
  subtitle,
  paragraphs,
  image1,
  image2,
  image3,
}: HomePageContentProps) {
  const titleStyle = { color: titleColor };

  return (
    <div className='font-fira'>
      {/* Desktop Version */}
      <div className="hidden md:block pb-15 px-24 pt-20">
        <div className="grid grid-cols-2 gap-10">
          <div className="col-span-1 flex flex-col space-y-5">
            <h1 className="font-bold text-5xl" style={titleStyle}>
              {title}
            </h1>
            <h4 className="font-light text-xl text-primary-dark-1">{subtitle}</h4>
            {paragraphs.map((paragraph, index) => (
              <div key={index} className="w-full font-light text-primary-dark-1">
                {paragraph.text}
              </div>
            ))}
          </div>
          <div className="col-span-1">
            <div className="flex flex-col space-y-5">
              <div className="w-full">
                <Image
                  width={600}
                  height={400}
                  src={image1}
                  className="h-60 lg:h-100 w-full"
                  alt=""
                />
              </div>
              <div className="w-full grid grid-cols-2 gap-5">
                <div className="col-span-1">
                  <Image
                    width={290}
                    height={180}
                    src={image2}
                    className="h-auto w-full"
                    alt=""
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    width={290}
                    height={180}
                    src={image3}
                    className="h-auto w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <div className="flex flex-wrap mb-5">
          <div className="flex-auto w-full md:w-1/2 p-5">
            <h1 className="font-bold text-5xl mb-5" style={titleStyle}>
              {title}
            </h1>
            <h4 className="font-light text-xl text-primary-dark-1">{subtitle}</h4>
          </div>
          <div className="flex-auto w-full md:w-1/2 p-5">
            <div className="flex flex-wrap space-y-5">
              <div className="w-full">
                <img
                  src={image1}
                  id="9b0dbca81a314389a1c60abea63ded99"
                  className="h-60 lg:h-100 w-full"
                  alt=""
                />
              </div>
              <div className="flex space-x-5">
                <div className="flex-auto w-1/2">
                  <img
                    src={image2}
                    id="620c82e2eb894d48b0149c150a1dd4d2"
                    className="h-30 w-full"
                    alt=""
                  />
                </div>
                <div className="flex-auto w-1/2">
                  <img
                    src={image3}
                    id="8bf28ac444a24d39bd8200d914770e9b"
                    className="h-30 w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


