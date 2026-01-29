import { fabric } from 'fabric';
import { useEffect, useRef, useState } from 'react';
import type { PlanItemResultModel } from '../models/plan-item-result-model';
import { PlanCircleObject } from '../objects/plan-circle-object';
import { PlanPolygonObject } from '../objects/plan-polygon-object';
import { PlanRectangleObject } from '../objects/plan-rectangle-object';

export interface ContainerPlanPopupProps {
  canvas: fabric.Canvas;
  obj: PlanRectangleObject | PlanCircleObject | PlanPolygonObject;
  item: PlanItemResultModel;
  onClickOutside: () => void;
  onNavigate?: (path: string) => void;
  formatCurrency?: (amount: number) => string;
  t?: (key: string) => string;
  showPrice?: boolean;
}

export default function ContainerPlanPopup({
  canvas,
  obj,
  item,
  onClickOutside,
  onNavigate,
  formatCurrency = (amount: number) => `£${amount.toLocaleString()}`,
  t = (key: string) => key,
  showPrice = true,
}: ContainerPlanPopupProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [direction, setDirection] = useState([1, 1]);
  const $isMoving = useRef<boolean>(false);

  const handleClickOutside = (e: MouseEvent | TouchEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      if (e.type === 'mousedown') {
        e.preventDefault();
        onClickOutside();
      } else if (e.type === 'touchmove') {
        e.preventDefault();
        $isMoving.current = true;
      } else if (e.type === 'touchend') {
        e.preventDefault();
        if ($isMoving.current) {
          $isMoving.current = false;
        } else {
          onClickOutside();
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchmove', handleClickOutside);
    document.addEventListener('touchend', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchmove', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, []);

  const getPositionDetails = (canvas: fabric.Canvas, _: fabric.Object) => {
    const zoom = canvas.getZoom();
    const canvaswidth = canvas.getWidth();
    const canvasHeight = canvas.getHeight();
    const labelBounds = obj.label.getBoundingRect();
    return {
      canvasTop: 0,
      canvasLeft: 0,
      canvasRight: canvaswidth,
      canvasBottom: canvasHeight,
      objectTop: labelBounds.top + labelBounds.height / 2,
      objectLeft: labelBounds.left + labelBounds.width / 2,
      popupWidth: ref.current?.offsetWidth ?? 0,
      popupHeight: ref.current?.offsetHeight ?? 0,
      zoom,
    };
  };

  const position = () => {
    if (ref.current == null) return;
    const positionDetails = getPositionDetails(canvas, obj);
    const direction = [1, 1];
    let popupX = positionDetails?.objectLeft ?? 0,
      popupY = (positionDetails?.objectTop ?? 0) - positionDetails.popupHeight;

    if (popupX + positionDetails.popupWidth > positionDetails.canvasRight) {
      popupX = positionDetails?.objectLeft - positionDetails.popupWidth;
      direction[0] = -1;
    }
    if (popupY - positionDetails.popupHeight < positionDetails.canvasTop) {
      popupY = positionDetails?.objectTop;
      direction[1] = -1;
    }
    const [offsetX, offsetY] = getOffset(direction[0], direction[1]);
    setDirection(direction);
    ref.current!.style.left = popupX + offsetX + 'px';
    ref.current!.style.top = popupY + offsetY + 'px';
  };

  const getOffset = (directionX: number, directionY: number) => {
    if (directionX > 0 && directionY > 0) {
      return [10, -20];
    } else if (directionX > 0 && directionY < 0) {
      return [20, 40];
    } else if (directionX < 0 && directionY > 0) {
      return [20, -20];
    } else if (directionX < 0 && directionY < 0) {
      return [10, 40];
    } else return [0, 0];
  };

  const getTrianglePosition = (directionX: number, directionY: number) => {
    if (directionX > 0 && directionY > 0) {
      return 'triangle-bottom-left';
    } else if (directionX > 0 && directionY < 0) {
      return 'triangle-top-left';
    } else if (directionX < 0 && directionY > 0) {
      return 'triangle-bottom-right';
    } else {
      return 'triangle-top-right';
    }
  };

  useEffect(() => {
    position();
    canvas.on('before:render', () => {
      position();
    });
  }, []);

  const navigateHandler = async () => {
    let path = `/availability/site-plan`;
    path = `/availability/site-plan/container/${obj?.itemId}`;
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div
      ref={ref}
      onClick={navigateHandler}
      className="plan-view-popup"
      style={{
        scale: 1,
      }}
    >
      <div className="plan-view-popup-header">
        <div>{item.plotContainerInfo?.name}</div>
        <div className="plan-view-popup-status">
          <svg
            width="16"
            height="16"
            className="rtl:rotate-180"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3546 8.00004C11.3546 7.75416 11.2606 7.54444 11.0726 7.35642L5.43193 1.83868C5.27283 1.67958 5.07758 1.60004 4.84616 1.60004C4.37611 1.60004 4.00006 1.96162 4.00006 2.43168C4.00006 2.66309 4.09407 2.8728 4.25317 3.03913L9.34424 8.00004L4.25317 12.9609C4.1013 13.12 4.00006 13.3298 4.00006 13.5612C4.00006 14.0385 4.37611 14.4 4.84616 14.4C5.07758 14.4 5.27283 14.3205 5.43193 14.1614L11.0726 8.64365C11.2679 8.45563 11.3546 8.24591 11.3546 8.00004Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="plan-view-popup-container-details">
        {showPrice && (
          <div className="plan-view-popup-detail-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_679_1027)">
                <path
                  d="M9.01964 5.56788C8.63803 5.83995 8.17103 5.99998 7.66665 5.99998C6.37798 5.99998 5.33331 4.95531 5.33331 3.66665C5.33331 2.37798 6.37798 1.33331 7.66665 1.33331C8.50197 1.33331 9.23478 1.77226 9.64698 2.43207M3.99998 13.3914H5.74017C5.96706 13.3914 6.19257 13.4184 6.41252 13.4724L8.25124 13.9192C8.65021 14.0164 9.06583 14.0259 9.46896 13.9476L11.502 13.5521C12.039 13.4474 12.533 13.1903 12.9202 12.8136L14.3586 11.4145C14.7693 11.0156 14.7693 10.3683 14.3586 9.96869C13.9887 9.60894 13.4031 9.56844 12.9847 9.87352L11.3084 11.0965C11.0683 11.272 10.7762 11.3665 10.4757 11.3665H8.85698L9.88736 11.3665C10.4681 11.3665 10.9386 10.9089 10.9386 10.3439V10.1394C10.9386 9.67031 10.6104 9.26129 10.1427 9.14789L8.55238 8.76114C8.29357 8.69837 8.02851 8.66665 7.76207 8.66665C7.11887 8.66665 5.95458 9.19919 5.95458 9.19919L3.99998 10.0166M13.3333 4.33331C13.3333 5.62198 12.2886 6.66665 11 6.66665C9.71132 6.66665 8.66665 5.62198 8.66665 4.33331C8.66665 3.04465 9.71132 1.99998 11 1.99998C12.2886 1.99998 13.3333 3.04465 13.3333 4.33331ZM1.33331 9.73331L1.33331 13.6C1.33331 13.9733 1.33331 14.16 1.40598 14.3026C1.46989 14.4281 1.57188 14.5301 1.69732 14.594C1.83993 14.6666 2.02661 14.6666 2.39998 14.6666H2.93331C3.30668 14.6666 3.49337 14.6666 3.63597 14.594C3.76141 14.5301 3.8634 14.4281 3.92732 14.3026C3.99998 14.16 3.99998 13.9733 3.99998 13.6V9.73331C3.99998 9.35995 3.99998 9.17326 3.92732 9.03065C3.8634 8.90521 3.76141 8.80323 3.63597 8.73931C3.49337 8.66665 3.30668 8.66665 2.93331 8.66665L2.39998 8.66665C2.02661 8.66665 1.83993 8.66665 1.69732 8.73931C1.57188 8.80322 1.46989 8.90521 1.40598 9.03065C1.33331 9.17326 1.33331 9.35994 1.33331 9.73331Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_679_1027">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="text-bodyContentColor">
              {`${formatCurrency(item.plotContainerInfo?.priceMin ?? 0)} - ${formatCurrency(item.plotContainerInfo?.priceMax ?? 0)}`}
            </div>
          </div>
        )}
        <div className="plan-view-popup-detail-item">
          <div className="text-bodyContentColor">
            {`${item.plotContainerInfo?.bedroomsMin} ${t('web.unit_detail.bedroom')} - ${item.plotContainerInfo?.bedroomsMax} ${t('web.unit_detail.bedroom')}`}
          </div>
        </div>
        <div className="plan-view-popup-detail-item">
          <div className="text-bodyContentColor">
            {`${item.plotContainerInfo?.areaMin} ${t(item.plotContainerInfo?.areaUnit ?? '')} - ${item.plotContainerInfo?.areaMax} ${t(item.plotContainerInfo?.areaUnit ?? '')}`}
          </div>
        </div>
      </div>
      <div className={`absolute w-0 h-0 ${getTrianglePosition(direction[0], direction[1])}`}></div>
    </div>
  );
}

