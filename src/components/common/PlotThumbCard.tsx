import type { PlotThumbResult } from '@/types/plot.types';
import { PlotThumbCardBody, PlotThumbCardImage, PlotThumbCardRoot } from './plot-thumb-card/plot-thumb-card-parts';
import {
  VoodvalePlotThumbCardBody,
  VoodvalePlotThumbCardImage,
  VoodvalePlotThumbCardRoot,
} from './plot-thumb-card/voodvale-plot-thumb-card/voodvale-plot-thumb-card-parts';
import {
  SkyscrapperPlotThumbCardBody,
  SkyscrapperPlotThumbCardImage,
  SkyscrapperPlotThumbCardRoot,
} from './plot-thumb-card/skyscrapper-plot-thumb-card/skyscrapper-plot-thumb-card-parts';

interface PlotThumbCardProps {
  plot: PlotThumbResult;
  variant?: 'default' | 'voodvale' | 'skyscrapper';
}

export function PlotThumbCard({ plot, variant = 'default' }: PlotThumbCardProps) {
  switch (variant) {
    case 'voodvale':
      return <VoodvalePlotThumbCard plot={plot} />;
    case 'skyscrapper':
      return <SkyscrapperPlotThumbCard plot={plot} />;
    default:
      return <DefaultPlotThumbCard plot={plot} />;
  }
}

const DefaultPlotThumbCard = ({ plot }: { plot: PlotThumbResult }) => {
  return (
    <PlotThumbCardRoot plot={plot}>
      <PlotThumbCardImage imageUrl={plot.imageUrl} />
      <PlotThumbCardBody plot={plot} />
    </PlotThumbCardRoot>
  );
};

export const SkyscrapperPlotThumbCard = ({ plot }: { plot: PlotThumbResult }) => {
  return (
    <SkyscrapperPlotThumbCardRoot plot={plot}>
      <SkyscrapperPlotThumbCardImage plot={plot} />
      <SkyscrapperPlotThumbCardBody plot={plot} />
    </SkyscrapperPlotThumbCardRoot>
  );
};

export function VoodvalePlotThumbCard({ plot }: { plot: PlotThumbResult }) {
  return (
    <VoodvalePlotThumbCardRoot plot={plot}>
      <VoodvalePlotThumbCardImage imageUrl={plot.imageUrl} />
      <VoodvalePlotThumbCardBody plot={plot} />
    </VoodvalePlotThumbCardRoot>
  );
}


