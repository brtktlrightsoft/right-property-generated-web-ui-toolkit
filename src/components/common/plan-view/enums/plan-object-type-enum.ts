export const PlanObjectTypeEnum = {
  None: 0,
  Rectangle: 1,
  Circle: 2,
  Polygon: 3,
} as const;

export type PlanObjectTypeEnum = (typeof PlanObjectTypeEnum)[keyof typeof PlanObjectTypeEnum];

// Helper to get string name from enum value (for compatibility with original code)
export function getPlanObjectTypeName(value: PlanObjectTypeEnum): string {
  const entries = Object.entries(PlanObjectTypeEnum);
  const found = entries.find(([, v]) => v === value);
  return found ? found[0] : 'None';
}

// Index accessor for compatibility
export const PlanObjectTypeEnumNames = {
  [PlanObjectTypeEnum.None]: 'None',
  [PlanObjectTypeEnum.Rectangle]: 'Rectangle',
  [PlanObjectTypeEnum.Circle]: 'Circle',
  [PlanObjectTypeEnum.Polygon]: 'Polygon',
} as const;

