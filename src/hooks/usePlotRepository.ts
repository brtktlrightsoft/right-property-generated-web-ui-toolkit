import { useMemo } from 'react';
import { useUiToolkitConfigOptional } from '../context/UiToolkitContext';
import { createPlotRepository, plotRepository, PlotRepository } from '../data/plot-repository';

/**
 * Hook that returns a PlotRepository configured with the UiToolkitProvider config.
 * Falls back to the singleton plotRepository for non-React hosts that configure it directly.
 */
export function usePlotRepository(): PlotRepository {
  const config = useUiToolkitConfigOptional();

  return useMemo(() => (config ? createPlotRepository(config) : plotRepository), [config]);
}
