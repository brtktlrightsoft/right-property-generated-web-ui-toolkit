import type { Observer } from './observer';
export interface Subject<EventType extends string> {
    observers: Record<EventType, Observer[]>;
    events: readonly string[];
    attach(observer: Observer, event: EventType): void;
    detach(observerToRemove: Observer, event: EventType): void;
    notify(event: EventType): void;
}
//# sourceMappingURL=subject.d.ts.map