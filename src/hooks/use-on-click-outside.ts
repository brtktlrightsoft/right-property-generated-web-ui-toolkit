'use client';
import type { RefObject } from 'react'

import useEventListener from "./use-event-listener"

type Handler = (event: MouseEvent | TouchEvent) => void

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' | 'click' | 'touchend' | 'touchstart' | 'touchmove' = 'mousedown',
  excludeSelectors: string[] = [], // New: List of selectors to exclude
): void {
  useEventListener(mouseEvent, event => {
    const el = ref?.current;

    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) {
      return;
    }

    for (const selector of excludeSelectors) {
      const excludeElement = document.querySelector(selector);
      if (excludeElement && excludeElement.contains(event.target as Node)) {
        return;
      }
    }
    //@ts-expect-error - this is a valid use case
    if(event.target.tagName !== 'HTML'){
      handler(event);
    }

  });
}

export default useOnClickOutside