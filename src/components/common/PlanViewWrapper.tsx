import { PlanView } from './plan-view';
import type { PlanObjectResultModel, PlanItemResultModel, AssetResult } from './plan-view';

export interface PlanViewWrapperProps {
  planId: string;
  objects: PlanObjectResultModel[] | string; // Allow JSON string for Puck
  items: PlanItemResultModel[] | string; // Allow JSON string for Puck
  background: AssetResult | string; // Allow JSON string for Puck
  color: string;
  elementId?: string;
  useHalfWidth?: boolean;
  showPrice?: boolean;
  measurementSystem?: 'metric' | 'imperial';
}

export function PlanViewWrapper(props: PlanViewWrapperProps & Record<string, unknown>) {
  const {
    planId,
    objects,
    items,
    background,
    color,
    elementId = 'canvas_container',
    useHalfWidth = false,
    showPrice = true,
    measurementSystem = 'metric',
  } = props;

  // Parse JSON strings if needed
  let parsedObjects: PlanObjectResultModel[] = [];
  let parsedItems: PlanItemResultModel[] = [];
  let parsedBackground: AssetResult | null = null;

  try {
    parsedObjects = typeof objects === 'string' ? (objects ? JSON.parse(objects) : []) : objects || [];
    parsedItems = typeof items === 'string' ? (items ? JSON.parse(items) : []) : items || [];
    parsedBackground = typeof background === 'string' ? (background ? JSON.parse(background) : null) : background;
  } catch (error) {
    console.error('Error parsing PlanView props:', error);
    return <div className="p-4 text-red-600">Error: Invalid JSON data for PlanView component</div>;
  }

  if (!parsedBackground) {
    return <div className="p-4 text-yellow-600">Warning: Background asset is required for PlanView</div>;
  }

  if (!planId) {
    return <div className="p-4 text-yellow-600">Warning: Plan ID is required</div>;
  }

  return (
    <PlanView
      planId={planId}
      objects={parsedObjects}
      items={parsedItems}
      background={parsedBackground}
      color={color}
      elementId={elementId}
      useHalfWidth={useHalfWidth}
      showPrice={showPrice}
      measurementSystem={measurementSystem}
    />
  );
}

