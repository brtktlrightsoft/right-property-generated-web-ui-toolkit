import type { RefObject } from 'react';
type Handler = (event: MouseEvent | TouchEvent) => void;
declare function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: Handler, mouseEvent?: 'mousedown' | 'mouseup' | 'click' | 'touchend' | 'touchstart' | 'touchmove', excludeSelectors?: string[]): void;
export default useOnClickOutside;
//# sourceMappingURL=use-on-click-outside.d.ts.map