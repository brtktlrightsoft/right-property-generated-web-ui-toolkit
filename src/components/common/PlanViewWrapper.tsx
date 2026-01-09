import { usePlotRepository } from '@/hooks/usePlotRepository';
import { PlanView } from './plan-view';
import type { PlanObjectResultModel, PlanItemResultModel, AssetResult } from './plan-view';
import { useEffect, useState } from 'react';
import type { SitePlanResult } from '@/data/plot-repository';

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
  websiteAddress: string;
}

export function PlanViewWrapper(props: PlanViewWrapperProps & Record<string, unknown>) {
  const {
    planId,
    objects,
    background,
    color,
    elementId = 'canvas_container',
    useHalfWidth = false,
    showPrice = true,
    measurementSystem = 'metric',
  } = props;
  const [sitePlanResult, setSitePlanResult] = useState<SitePlanResult | null>(null);
  const plotRepository = usePlotRepository();
  useEffect(()=>{
    plotRepository.fetchSitePlan().then((result)=>{
      setSitePlanResult(result);
    });
  },[])
  // Parse JSON strings if needed
  let parsedObjects: PlanObjectResultModel[] = [];
  let parsedBackground: AssetResult | null = null;
  try {
    parsedObjects = typeof objects === 'string' ? (objects ? JSON.parse(objects) : []) : objects || [];
    parsedBackground = typeof background === 'string' ? (background ? JSON.parse(background) : null) : background;
  } catch (error) {
    console.error('Error parsing PlanView props:', error);
    return <div className="p-4 text-red-600">Error: Invalid JSON data for PlanView component</div>;
  }

  if (!parsedBackground || !planId) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center p-4">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-[#5ec6d3] rounded-full animate-spin"></div>
      </div>
    );
  }

 

  return (
      <PlanView
        key={sitePlanResult?.plan.id??'siteplan'}
        planId={planId}
        objects={parsedObjects}
        items={sitePlanResult?.plan.items ?? []}
        background={parsedBackground}
        color={color}
        elementId={elementId}
        useHalfWidth={useHalfWidth}
        showPrice={showPrice}
        measurementSystem={measurementSystem}
      />
  );
}

