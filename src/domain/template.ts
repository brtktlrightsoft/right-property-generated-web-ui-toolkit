import type { Config } from '@measured/puck';
import type { Components } from '@/types/puck.types';

export type TemplateId = 'default' | 'voodvale' | 'skyscrapper';

export type TemplateConfig = {
  id: TemplateId;
  name: string;
  description: string;
  config: Record<string, Config<Components>>;
  thumbnailUrl: string;
};
