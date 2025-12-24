import type { PlanItemResultModel } from '../models/plan-item-result-model';

export class PlanItemController {
  private _items: PlanItemResultModel[] = [];

  get items() {
    return this._items;
  }

  constructor(items: PlanItemResultModel[]) {
    this._items = items;
  }

  getItem(id: string) {
    return this.items.find((i) => i.id == id);
  }
}

