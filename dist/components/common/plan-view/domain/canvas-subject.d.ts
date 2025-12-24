import type { Observer } from './observer';
import type { Subject } from './subject';
declare const events: readonly ["onFit"];
type CanvasEvents = typeof events[number];
export declare class CanvasSubject implements Subject<CanvasEvents> {
    events: typeof events;
    observers: Record<CanvasEvents, Observer[]>;
    attach(observer: Observer, event: CanvasEvents): void;
    detach(observerToRemove: Observer, event: CanvasEvents): void;
    notify(event: CanvasEvents): void;
}
export {};
//# sourceMappingURL=canvas-subject.d.ts.map