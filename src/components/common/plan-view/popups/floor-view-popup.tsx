import { fabric } from 'fabric';
import React, { useEffect, useRef, useState } from 'react';
import type { PlanItemResultModel } from '../models/plan-item-result-model';
import { PlanCircleObject } from '../objects/plan-circle-object';
import { PlanPolygonObject } from '../objects/plan-polygon-object';
import { PlanRectangleObject } from '../objects/plan-rectangle-object';

export interface FloorViewPopupProps {
  canvas: fabric.Canvas;
  obj: PlanRectangleObject | PlanCircleObject | PlanPolygonObject;
  item: PlanItemResultModel;
  onClickOutside: () => void;
  onNavigate?: (path: string) => void;
  measurementSystem?: 'metric' | 'imperial';
}

const FloorViewPopup = React.forwardRef<HTMLDivElement, FloorViewPopupProps>(
  ({ canvas, obj, item, onClickOutside, onNavigate, measurementSystem = 'metric' }, forwardRef) => {
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

    const getPositionDetails = (canvas: fabric.Canvas) => {
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
      const updatePosition = () => {
        if (ref.current == null) return;
        const positionDetails = getPositionDetails(canvas);
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
        if (ref.current) {
          ref.current.style.left = popupX + offsetX + 'px';
          ref.current.style.top = popupY + offsetY + 'px';
        }
      };
      updatePosition();
      canvas.on('before:render', updatePosition);
      return () => {
        canvas.off('before:render', updatePosition);
      };
    }, [obj, canvas]);

    const information = measurementSystem === 'metric' ? item.informations?.[0] : item.informations?.[1];

    const navigateHandler = async () => {
      let path = `/availability/site-plan`;
      path = `/availability/site-plan/container/${obj?.itemId}`;
      if (onNavigate) {
        onNavigate(path);
      }
    };

    return (
      <div
        ref={(node) => {
          ref.current = node;
          if (typeof forwardRef === 'function') {
            forwardRef(node);
          } else if (forwardRef) {
            (forwardRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }
        }}
        onClick={navigateHandler}
        className="plan-view-popup"
        style={{
          scale: 1,
        }}
      >
        <div className="plan-view-popup-header">
          <div>{item.name}</div>
        </div>
        <div className="plan-view-popup-floor-details">{information ?? ''}</div>
        <div className={`absolute w-0 h-0 ${getTrianglePosition(direction[0], direction[1])}`}></div>
      </div>
    );
  }
);

FloorViewPopup.displayName = 'FloorViewPopup';

export default FloorViewPopup;

