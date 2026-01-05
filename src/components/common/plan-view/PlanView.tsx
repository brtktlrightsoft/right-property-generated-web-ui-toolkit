import type { ReactElement } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import type { ICanvasOptions, IEvent } from 'fabric/fabric-impl';
import { PlanObjectController } from './controllers/plan-object-controller';
import type { PlanObjectResultModel } from './models/plan-object-result-model';
import type { PlanItemResultModel } from './models/plan-item-result-model';
import { PlanItemController } from './controllers/plan-item-controller';
import { CanvasSubject } from './domain/canvas-subject';
import type { AssetResult } from './domain/asset-result';
import { PlanRectangleObject } from './objects/plan-rectangle-object';
import { PlanCircleObject } from './objects/plan-circle-object';
import { PlanPolygonObject } from './objects/plan-polygon-object';
import { PlanItemTypeEnum, getPlanItemTypeEnum } from './enums/plan-item-type-enum';
import { usePinch } from '@use-gesture/react';
import { createPortal } from 'react-dom';
import PlanViewPopup from './popups/plan-view-popup';
import { PlanLabelObject } from './objects/plan-label-object';
import ContainerPlanPopup from './popups/container-plan-popup';
import FloorViewPopup from './popups/floor-view-popup';

export interface PlanViewProps {
  planId: string;
  objects: PlanObjectResultModel[];
  items: PlanItemResultModel[];
  background: AssetResult;
  color: string;
  canvasSubject?: CanvasSubject;
  elementId?: string;
  useHalfWidth?: boolean;
  onNavigate?: (path: string) => void;
  formatCurrency?: (amount: number) => string;
  formatArea?: (area: number) => string;
  t?: (key: string) => string;
  showPrice?: boolean;
  measurementSystem?: 'metric' | 'imperial';
}

export default function PlanView({
  planId,
  objects,
  items,
  background,
  color,
  canvasSubject,
  useHalfWidth,
  onNavigate,
  formatCurrency,
  formatArea,
  t,
  showPrice,
  measurementSystem,
}: PlanViewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const $backgroundImage = useRef<fabric.Image | null>(null);
  const $imageBoundary = useRef<fabric.Point | null>(null);
  const $popup = useRef<HTMLDivElement | null>(null);
  const $popupObject = useRef<PlanRectangleObject | PlanCircleObject | PlanPolygonObject | null>(null);
  const $popupType = useRef<PlanItemTypeEnum | null>(null);
  const $canvas = useRef<fabric.Canvas | null>(null);
  const $lastPosX = useRef<number>(0);
  const $lastPosY = useRef<number>(0);
  const $isDragging = useRef<boolean>(false);
  const $initDone = useRef<boolean>(false);
  const $pinchTouchDistance = useRef<number>(0);
  const $minZoom = useRef<number>(1);
  const $itemsController = useRef<PlanItemController>(new PlanItemController(items!));
  const $objectController = useRef<PlanObjectController>(new PlanObjectController(objects!));
  const $prevObjectProps = useRef(objects);
  const $prevPlanId = useRef<string>('');
  const $initialViewportTransform = useRef<number[] | undefined>(null);
  const $boundaryWidth = useRef<number>(0);
  const $boundaryHeight = useRef<number>(0);
  const $lastBoundaryCheckTime = useRef<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const [popupContainer, setPopupContainer] = useState<ReactElement[]>([]);
  const $canvasContainer = useRef<HTMLDivElement>(null);

  const resizeCanvasByElement = () => {
    const canvasContainer = $canvasContainer.current;
    if (canvasContainer) {
      $canvas.current!.setWidth(canvasContainer.clientWidth).setHeight(canvasContainer.clientHeight);
    }
  };

  useEffect(() => {
    const handler = (e: Event) => e.preventDefault();
    const doc = $canvasContainer.current ?? document;
    const canvasContainer = $canvasContainer.current;
    doc.addEventListener('gesturestart', handler);
    doc.addEventListener('gesturechange', handler);
    doc.addEventListener('gestureend', handler);
    doc.addEventListener('resize', resizeCanvasByElement);
    canvasContainer?.ownerDocument.addEventListener('resize', resizeCanvasByElement);
    return () => {
      doc.removeEventListener('gesturestart', handler);
      doc.removeEventListener('gesturechange', handler);
      doc.removeEventListener('gestureend', handler);
      doc.removeEventListener('resize', resizeCanvasByElement);
      canvasContainer?.ownerDocument.removeEventListener('resize', resizeCanvasByElement);
    };
  }, [$canvasContainer]);

  usePinch(
    (state) => {
      const { da } = state;
      state.event.preventDefault();
      if ($pinchTouchDistance.current == 0) $pinchTouchDistance.current = da[0];
      let zoom = (da[0] / $pinchTouchDistance.current) * $canvas.current!.getZoom();
      if (zoom > 20) zoom = 20;
      if (zoom < $minZoom.current) zoom = $minZoom.current;
      $canvas.current!.setZoom(zoom);
      checkBoundaries();
      $pinchTouchDistance.current = da[0];
      $canvas.current!.renderAll();
    },
    { target: ref }
  );

  useEffect(() => {
    if (!$canvas.current) return;
    if (canvasSubject) {
      canvasSubject.attach(() => {
        fitToScreen();
      }, 'onFit');
    }
  }, [canvasSubject, $canvas.current]);

  useEffect(() => {
    if (!background?.objectUrl) return;
    const doc = typeof window !== 'undefined' ? window.document : document;
    doc.addEventListener('gesturestart', (e) => e.preventDefault());
    doc.addEventListener('gesturechange', (e) => e.preventDefault());
    initContainer();

    return () => {
      try {
        if ($canvas.current) {
          $canvas.current?.dispose();
          $backgroundImage.current?.dispose();
        }
      } catch (error) {
        console.error(error);
      }
    };
  }, [background]);

  useEffect(() => {
    const equal = planId == $prevPlanId.current;
    if ($canvas.current && equal) {
      $canvas.current.remove(...$canvas.current.getObjects());
      $objectController.current.deleteObjects();
      $itemsController.current = new PlanItemController(items!);
      $objectController.current = new PlanObjectController(objects!);
      $objectController.current.initContainerObjects($imageBoundary.current!);
      $objectController.current.containerObjects.forEach((object) => {
        const item = $itemsController.current.getItem(object.itemId as string);
        if (item) {
          object.assign(item!);
          $canvas.current!.add(object, object.label);
        }
      });
      $canvas.current?.requestRenderAll();
    } else if ($canvas.current && !equal) {
      try {
        if ($canvas.current) {
          $canvas.current.remove(...$canvas.current.getObjects());
          $backgroundImage.current?.dispose();
          $objectController.current.deleteObjects();
          $itemsController.current = new PlanItemController(items!);
          $objectController.current = new PlanObjectController(objects!);
          initContainer();
        }
      } catch (error) {
        console.error(error);
      }
    }
    $prevObjectProps.current = objects;
    $prevPlanId.current = planId;
  }, [objects]);

  const initContainer = () => {
    fabric.Image.fromURL(background.objectUrl ?? '', (image) => {
      image.setOptions({
        stroke: '#333333',
        strokeWidth: 0,
        opacity: 1,
        hasBorders: false,
      });
      $backgroundImage.current = image;
      $imageBoundary.current = new fabric.Point($backgroundImage.current.width ?? 0, $backgroundImage.current.height ?? 0);
      initCanvas();
      updateBoundaryWidthHeight($backgroundImage.current?.width ?? 0, $backgroundImage.current?.height ?? 0);
      fitToScreen();
    });
  };



  const fitToScreen = () => {
    resizeCanvasByElement();

    let minZoom = 1.0;
    if ($backgroundImage.current?.width !== 0 || $backgroundImage.current?.height !== 0) {
      const canvasWidth = $canvas.current!.getWidth() / (useHalfWidth ? 2 : 1);
      const backgroundWidth = $backgroundImage.current!.width;
      const backgroundHeight = $backgroundImage.current!.height;
      const canvasHeight = $canvas.current!.getHeight();
      const horizontalZoom = canvasWidth / backgroundWidth!;
      const verticalZoom = canvasHeight / backgroundHeight!;
      minZoom = Math.min(horizontalZoom, verticalZoom);
      $canvas.current!.setZoom(minZoom);
      $canvas.current!.absolutePan(
        new fabric.Point((backgroundWidth! * minZoom - canvasWidth) / 2, (backgroundHeight! * minZoom - canvasHeight) / 2)
      );
      $minZoom.current = minZoom;
    }
    $canvas.current!.renderAll();
    $initialViewportTransform.current = $canvas.current?.viewportTransform;
  };

  const onMouseOver = (e: { target: PlanRectangleObject | PlanCircleObject | PlanPolygonObject }) => {
    if (
      e.target instanceof PlanRectangleObject ||
      e.target instanceof PlanCircleObject ||
      e.target instanceof PlanPolygonObject
    ) {
      const o = e.target;
      const item = $itemsController.current.getItem(o.itemId);
      const itemType: PlanItemTypeEnum = getPlanItemTypeEnum(item?.type ?? '');
      if (itemType == PlanItemTypeEnum.Room) {
        $popupType.current = itemType;
        showPopup(o);
      }
    }
  };

  const onMouseOut = (e: {
    target: PlanRectangleObject | PlanCircleObject | PlanPolygonObject;
    e: { clientX: number; clientY: number };
  }) => {
    if (
      (e.target instanceof PlanRectangleObject ||
        e.target instanceof PlanCircleObject ||
        e.target instanceof PlanPolygonObject) &&
      $popupType.current == PlanItemTypeEnum.Room
    ) {
      const rect = $popup.current?.getBoundingClientRect();
      const { clientX: mouseX, clientY: mouseY } = e.e as { clientX: number; clientY: number };
      const offset = 10;
      const intersects =
        mouseX >= Math.round((rect?.left ?? 0) - offset) &&
        mouseX <= Math.round((rect?.right ?? 0) + offset) &&
        mouseY >= Math.round((rect?.top ?? 0) - offset) &&
        mouseY <= Math.round((rect?.bottom ?? 0) + offset);
      if (intersects) return;
      hidePopup();
    }
  };

  const initCanvas = () => {
    if (!$backgroundImage.current) return;
    if ($canvas.current) {
      // $canvas.current?.dispose();
    }

    $canvas.current = new fabric.Canvas(canvasRef.current, {
      hoverCursor: 'move',
      selection: true,
      selectionBorderColor: 'blue',
      backgroundColor: '#cccccc',
      renderOnAddRemove: false,
      objectCaching: false,
      backgroundImage: $backgroundImage.current,
    } as ICanvasOptions);
    $canvas.current!.backgroundColor = color ?? '#ff00';

    $canvas.current.selection = false;
    $canvas.current.defaultCursor = 'grab';

    $canvas.current.on('mouse:wheel', function (opt) {
      const delta = opt.e.deltaY;
      let zoom = $canvas.current!.getZoom();
      const viewportCenter = new fabric.Point($canvas.current!.getWidth() / 2, $canvas.current!.getHeight() / 2);

      zoom *= 0.999 ** delta;

      if (zoom > 20) zoom = 20;
      if (zoom < $minZoom.current) zoom = $minZoom.current;

      const pointer = $canvas.current!.getPointer(opt.e);
      const point = new fabric.Point(pointer.x, pointer.y);
      const pointerPositionInCanvas = fabric.util.transformPoint(point, $canvas.current!.viewportTransform!);

      $canvas.current!.zoomToPoint(viewportCenter, zoom);

      const newPointerPositionInCanvas = fabric.util.transformPoint(point, $canvas.current!.viewportTransform!);

      const panOffset = new fabric.Point(
        pointerPositionInCanvas.x - newPointerPositionInCanvas.x,
        pointerPositionInCanvas.y - newPointerPositionInCanvas.y
      );

      $canvas.current!.relativePan(panOffset);
      checkBoundaries();
      $canvas.current!.renderAll();

      opt.e.preventDefault();
      opt.e.stopPropagation();
    });

    $canvas.current.on('mouse:move', function (opt: any) {
      if ($isDragging.current) {
        if (opt.e.type == 'mousemove') {
          dragCanvas(opt.e.clientX, opt.e.clientY);
        } else {
          if (!(opt.e.touches && opt.e.touches.length > 1)) {
            dragCanvas(opt.e.touches[0].clientX, opt.e.touches[0].clientY);
          }
        }
      }
    });

    $canvas.current.on('mouse:up', onMouseUp);
    $canvas.current.on('mouse:down', onMouseDown as unknown as (e: IEvent<MouseEvent>) => void);
    $canvas.current.on('mouse:over', onMouseOver as unknown as (e: IEvent<MouseEvent>) => void);
    $canvas.current.on('mouse:out', onMouseOut as unknown as (e: IEvent<MouseEvent>) => void);

    $objectController.current.initContainerObjects($imageBoundary.current!);
    $objectController.current.containerObjects.forEach((object) => {
      const item = $itemsController.current.getItem(object.itemId as string);
      if (item) {
        if (object.itemType == 'Room') {
          if (item) object.assign(item);
          const objectColor = object.fill;
          object.fill = '#ff00';
          object.label = new PlanLabelObject(
            item.name,
            objectColor ?? '0x000000',
            object.left ?? 0,
            object.top ?? 0,
            object.width ?? 0,
            object.height ?? 0,
            1,
            56
          );
          object.label.hideBackground();
          object.label.addStroke();
          $canvas.current!.add(object, object.label);
        } else {
          if (item) object.assign(item);
          $canvas.current!.add(object, object.label);
        }
      }
    });

    $canvas.current.on('mouse:mouseup', (e) => {
      if (
        e.target instanceof PlanRectangleObject ||
        e.target instanceof PlanCircleObject ||
        e.target instanceof PlanPolygonObject
      ) {
        showPopup(e.target);
        $canvas.current?.requestRenderAll();
      }
    });

    $canvas.current!.requestRenderAll();
    $initDone.current = true;
  };

  const onPlanChange = async (o: PlanRectangleObject | PlanCircleObject | PlanPolygonObject) => {
    const itemType: PlanItemTypeEnum = getPlanItemTypeEnum(o?.itemType ?? '');
    let path = `/availability/site-plan`;
    if (itemType === PlanItemTypeEnum.PlotContainer) {
      path = `/availability/site-plan/plot-container/${o?.itemId}`;
      if (onNavigate) {
        onNavigate(path);
      }
    } else if (itemType === PlanItemTypeEnum.Plot) {
      path = `/plot/${o?.itemId}`;
      if (onNavigate) {
        onNavigate(path);
      }
    }
  };

  const showPopup = (o: PlanRectangleObject | PlanCircleObject | PlanPolygonObject) => {
    const item = $itemsController.current.getItem(o.itemId as string);
    const itemType: PlanItemTypeEnum = getPlanItemTypeEnum(item?.type ?? '');
    $popupType.current = itemType;
    switch (itemType) {
      case PlanItemTypeEnum.Plot:
        setPopupContainer([
          <PlanViewPopup
            key="container_element"
            canvas={$canvas.current!}
            obj={o}
            item={item!}
            onClickOutside={() => {
              hidePopup();
            }}
            onNavigate={onNavigate}
            formatCurrency={formatCurrency}
            formatArea={formatArea}
            t={t}
            showPrice={showPrice}
          />,
        ]);
        break;
      case PlanItemTypeEnum.PlotContainer:
        setPopupContainer([
          <ContainerPlanPopup
            key="container_element"
            canvas={$canvas.current!}
            obj={o}
            item={item!}
            onClickOutside={() => {
              hidePopup();
            }}
            onNavigate={onNavigate}
            formatCurrency={formatCurrency}
            t={t}
            showPrice={showPrice}
          />,
        ]);
        break;
      case PlanItemTypeEnum.Room:
        setPopupContainer([
          <FloorViewPopup
            ref={$popup}
            key="container_element"
            canvas={$canvas.current!}
            obj={o}
            item={item!}
            onClickOutside={() => {
              hidePopup();
            }}
            onNavigate={onNavigate}
            measurementSystem={measurementSystem}
          />,
        ]);
        break;
    }
  };

  const hidePopup = useCallback(() => {
    $popupType.current = null;
    setPopupContainer([]);
    $popupObject.current = null;
  }, [popupContainer]);

  const onMouseDown = (event: {
    target: PlanRectangleObject | PlanCircleObject | PlanPolygonObject;
    e: { type: string; clientX: number; clientY: number; touches: { clientX: number; clientY: number }[] };
  }) => {
    $isDragging.current = true;
    if ((event.e.type as string).includes('mouse')) {
      $lastPosX.current = event.e.clientX;
      $lastPosY.current = event.e.clientY;
    }
    if ((event.e.type as string).includes('touch')) {
      $lastPosX.current = event.e.touches[0].clientX;
      $lastPosY.current = event.e.touches[0].clientY;
    }
    if (
      (event.target instanceof PlanRectangleObject ||
        event.target instanceof PlanCircleObject ||
        event.target instanceof PlanPolygonObject) &&
      $popupObject.current &&
      $popupObject.current.itemId == event.target.itemId
    ) {
      onPlanChange($popupObject.current);
    } else {
      if (
        event.target instanceof PlanRectangleObject ||
        event.target instanceof PlanCircleObject ||
        event.target instanceof PlanPolygonObject
      ) {
        setTimeout(() => {
          showPopup(event.target);
          $canvas.current?.requestRenderAll();
        }, 150);
      }
    }
  };

  const onMouseUp = (_: { e: { type: string } }) => {
    $isDragging.current = false;
    $canvas.current?.fire('canvas:dragEnd');
    $pinchTouchDistance.current = 0;
  };

  const updateBoundaryWidthHeight = (width: number, height: number) => {
    $boundaryWidth.current = width;
    $boundaryHeight.current = height;
  };

  const checkBoundaries = () => {
    if (Date.now() - $lastBoundaryCheckTime.current < 8) return;

    $lastBoundaryCheckTime.current = Date.now();
    internalBoundaryCheck();
    $canvas.current?.requestRenderAll();
  };

  const internalBoundaryCheck = () => {
    if ($boundaryWidth.current === 0 || $boundaryHeight.current === 0 || !$canvas.current?.viewportTransform) return;

    const vpt = $canvas.current?.viewportTransform;
    const zoom = $canvas.current?.getZoom();
    const canvasWidth = $canvas.current?.getWidth();
    const backgroundWidth = $boundaryWidth.current;
    const backgroundHeight = $boundaryHeight.current;
    const canvasHeight = $canvas.current?.getHeight();

    const horizontalTranslationAmountForCenter = $initialViewportTransform.current![4];
    const verticalTranslationAmountForCenter = $initialViewportTransform.current![5];

    if (vpt[4] >= $initialViewportTransform.current![4]) {
      $canvas.current!.viewportTransform[4] = $initialViewportTransform.current![4];
    } else if (vpt[4] < canvasWidth - backgroundWidth * zoom - horizontalTranslationAmountForCenter) {
      $canvas.current!.viewportTransform[4] = canvasWidth - backgroundWidth * zoom - horizontalTranslationAmountForCenter;
    }
    if (vpt[5] >= $initialViewportTransform.current![5]) {
      $canvas.current!.viewportTransform[5] = $initialViewportTransform.current![5];
    } else if (vpt[5] < canvasHeight - backgroundHeight * zoom - verticalTranslationAmountForCenter) {
      $canvas.current!.viewportTransform[5] = canvasHeight - backgroundHeight * zoom - verticalTranslationAmountForCenter;
    }
  };

  const dragCanvas = (x: number, y: number) => {
    const zoom = $canvas.current?.getZoom();
    if (zoom == $minZoom.current) return;
    const point: fabric.Point = new fabric.Point(x - $lastPosX.current, y - $lastPosY.current);
    $canvas.current!.relativePan(point);
    checkBoundaries();

    $canvas.current?.requestRenderAll();
    $lastPosX.current = x;
    $lastPosY.current = y;
  };

  return (
    <div className='w-full h-[600px]' ref={$canvasContainer}>

      <div ref={ref} className="relative">
        {popupContainer.map((c) => createPortal(c, ref.current!))}
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

