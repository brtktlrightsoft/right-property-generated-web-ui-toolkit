import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';

interface ItemSliderProps {
  items: React.ReactNode[];
  variant?: 'default' | 'voodvale' | 'skyscrapper';
  language?: string;
}

export function ItemSlider({ items, variant = 'default', language = 'en' }: ItemSliderProps) {
  const [viewPort, setViewPort] = useState('desktop')
  const key = `viewport-${viewPort}`
  
  useEffect(() => {
    const puckRoot = document?.getElementById('puck-canvas-root');
    let resizeObserver: ResizeObserver | null = null;
    
    const handleResize = () => {
      const width = puckRoot ? puckRoot.getBoundingClientRect().width : window.innerWidth;
      if (width > 1024) {
        setViewPort('desktop');
      } else if (width > 768) {
        setViewPort('tablet');
      } else {
        setViewPort('mobile');
      }
    };
    
    if (puckRoot) {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(puckRoot);
    } else {
      handleResize();
      window.addEventListener('resize', handleResize);
    }
    
    return () => {
      if (resizeObserver && puckRoot) {
        resizeObserver.unobserve(puckRoot);
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [])

  switch (variant) {
    case 'voodvale':
      return <VoodvaleItemSlider key={key} items={items} language={language} viewPort={viewPort} />;
    case 'skyscrapper':
      return <SkyscrapperItemSlider key={key} items={items} language={language} viewPort={viewPort} />;
    default:
      return <DefaultItemSlider key={key} items={items} language={language} viewPort={viewPort} />;
  }
}

const DefaultItemSlider = ({ items, language, viewPort }: { items: React.ReactNode[]; language: string; viewPort: string }) => {
  const isRTL = language === 'ar';
  
  const config = viewPort === 'desktop' 
    ? { spaceBetween: 60, slidesPerView: 4, slidesOffsetAfter: 60 }
    : { spaceBetween: 15, slidesPerView: 1.3, slidesOffsetAfter: 15 };
  
  return (
    <Swiper
      key={isRTL ? 'rtl' : 'ltr'}
      dir={isRTL ? 'rtl' : 'ltr'}
      spaceBetween={config.spaceBetween}
      slidesPerView={config.slidesPerView}
      slidesOffsetAfter={config.slidesOffsetAfter}
      preventClicks={false}
      preventClicksPropagation={false}
    >
      {items.map((item, index) => {
        return <SwiperSlide key={`swiperSlider${index}`}>{item}</SwiperSlide>;
      })}
    </Swiper>
  );
};

const VoodvaleItemSlider = ({ items, language, viewPort }: { items: React.ReactNode[]; language: string; viewPort: string }) => {
  const isRTL = language === 'ar';
  
  const config = viewPort === 'desktop' 
    ? { spaceBetween: 30, slidesPerView: 3, slidesOffsetAfter: 0 }
    : { spaceBetween: 30, slidesPerView: 1.2, slidesOffsetAfter: 30 };
  
  return (
    <Swiper
      dir={isRTL ? 'rtl' : 'ltr'}
      spaceBetween={config.spaceBetween}
      slidesPerView={config.slidesPerView}
      slidesOffsetAfter={config.slidesOffsetAfter}
      preventClicks={false}
      preventClicksPropagation={false}
    >
      {items.map((item, index) => {
        return <SwiperSlide key={`swiperSlider${index}`}>{item}</SwiperSlide>;
      })}
    </Swiper>
  );
};

const SkyscrapperItemSlider = ({ items, language, viewPort }: { items: React.ReactNode[]; language: string; viewPort: string }) => {
  const isRTL = language === 'ar';
  
  const config = viewPort === 'desktop' 
    ? { spaceBetween: 60, slidesPerView: 2.2, slidesOffsetAfter: 60 }
    : { spaceBetween: 13, slidesPerView: 1.2, slidesOffsetAfter: 90 };
  
  return (
    <Swiper
      key={isRTL ? 'rtl' : 'ltr'}
      dir={isRTL ? 'rtl' : 'ltr'}
      spaceBetween={config.spaceBetween}
      slidesPerView={config.slidesPerView}
      slidesOffsetAfter={config.slidesOffsetAfter}
      preventClicks={false}
      preventClicksPropagation={false}
    >
      {items.map((item, index) => {
        return <SwiperSlide key={`swiperSlider${index}`}>{item}</SwiperSlide>;
      })}
    </Swiper>
  );
};


