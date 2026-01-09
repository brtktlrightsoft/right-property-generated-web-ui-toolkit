import { useMemo } from 'react';
import { useUiToolkitConfig } from '../context/UiToolkitContext';
import { createPlotRepository, PlotRepository } from '../data/plot-repository';

/**
 * Hook that returns a PlotRepository configured with the UiToolkitProvider config
 * Must be used within a UiToolkitProvider
 */
export function usePlotRepository(): PlotRepository {
  const config = useUiToolkitConfig();
  
  return useMemo(() => createPlotRepository(config), [config]);
}
