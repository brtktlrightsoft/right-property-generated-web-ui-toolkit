'use client';

import { createContext, useContext, useCallback, type ReactNode } from 'react';
import type { MainModuleResult } from '../domain/plot-models';

export type Translations = Record<string, string>;

export interface UiToolkitConfig {
  apiUrl: string;
  accessToken: string;
  translations: Translations;
  locale: string;
  mainModuleResult: MainModuleResult;
}

const UiToolkitContext = createContext<UiToolkitConfig | null>(null);

export function UiToolkitProvider({
  children,
  config,
}: {
  children: ReactNode;
  config: UiToolkitConfig;
}) {
  return (
    <UiToolkitContext.Provider value={config}>
      {children}
    </UiToolkitContext.Provider>
  );
}

export function useUiToolkitConfig(): UiToolkitConfig {
  const context = useContext(UiToolkitContext);
  if (!context) {
    throw new Error('useUiToolkitConfig must be used within a UiToolkitProvider');
  }
  return context;
}

/**
 * Optional hook that returns null if provider is not present
 * Useful for components that should work with or without the provider
 */
export function useUiToolkitConfigOptional(): UiToolkitConfig | null {
  return useContext(UiToolkitContext);
}

/**
 * Hook for translations - returns a t() function and current locale
 */
export function useTranslation() {
  const context = useContext(UiToolkitContext);
  
  const t = useCallback((key: string): string => {
    if (!context) return key;
    return context.translations[key] || key;
  }, [context]);

  return {
    t,
    locale: context?.locale ?? 'en',
  };
}

/**
 * Hook to access main module result data
 */
export function useMainModuleResult(): MainModuleResult {
  const context = useContext(UiToolkitContext);
  if (!context) {
    throw new Error('useMainModuleResult must be used within a UiToolkitProvider');
  }
  return context.mainModuleResult;
}
