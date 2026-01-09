'use client';

import type { PlotStatusDto } from "@/domain/plot-models";

export default function usePlotStatus(name?: string, plotStatuses?: PlotStatusDto[]) {
  if (Array.isArray(plotStatuses)) {
    return plotStatuses.find(s => s.name.toLowerCase() == name?.toLowerCase());
  }

  return undefined;
}
