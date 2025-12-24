import type { Observer } from './observer';
import type { Subject } from './subject';

const events = ['onFit'] as const;
type CanvasEvents = typeof events[number];

export class CanvasSubject implements Subject<CanvasEvents> {
  events: typeof events = ['onFit'];
  observers: Record<CanvasEvents, Observer[]> = { onFit: [] };
  
  attach(observer: Observer, event: CanvasEvents): void {
    this.observers[event].push(observer);
  }
  
  detach(observerToRemove: Observer, event: CanvasEvents): void {
    this.observers[event] = this.observers[event].filter((observer) => observerToRemove !== observer);
  }
  
  notify(event: CanvasEvents): void {
    this.observers[event].forEach(observer => observer());
  }
}

