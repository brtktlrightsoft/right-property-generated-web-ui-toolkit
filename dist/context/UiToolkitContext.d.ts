import { type ReactNode } from 'react';
import type { MainModuleResult } from '../domain/plot-models';
export type Translations = Record<string, string>;
export interface UiToolkitConfig {
    apiUrl: string;
    accessToken: string;
    translations: Translations;
    locale: string;
    mainModuleResult: MainModuleResult;
}
export declare function UiToolkitProvider({ children, config, }: {
    children: ReactNode;
    config: UiToolkitConfig;
}): import("react/jsx-runtime").JSX.Element;
export declare function useUiToolkitConfig(): UiToolkitConfig;
/**
 * Optional hook that returns null if provider is not present
 * Useful for components that should work with or without the provider
 */
export declare function useUiToolkitConfigOptional(): UiToolkitConfig | null;
/**
 * Hook for translations - returns a t() function and current locale
 */
export declare function useTranslation(): {
    t: (key: string) => string;
    locale: string;
};
/**
 * Hook to access main module result data
 */
export declare function useMainModuleResult(): MainModuleResult;
//# sourceMappingURL=UiToolkitContext.d.ts.map