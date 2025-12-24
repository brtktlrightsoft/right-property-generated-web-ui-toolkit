export const PlanItemTypeEnum = {
  None: 0,
  Room: 1,
  Plot: 2,
  PlotContainer: 3,
} as const;

export type PlanItemTypeEnum = (typeof PlanItemTypeEnum)[keyof typeof PlanItemTypeEnum];

// Index accessor for compatibility
export const PlanItemTypeEnumNames = {
  [PlanItemTypeEnum.None]: 'None',
  [PlanItemTypeEnum.Room]: 'Room',
  [PlanItemTypeEnum.Plot]: 'Plot',
  [PlanItemTypeEnum.PlotContainer]: 'PlotContainer',
} as const;

// Helper to get enum value from string name
export function getPlanItemTypeEnum(name: string): PlanItemTypeEnum {
  const key = name as keyof typeof PlanItemTypeEnum;
  return PlanItemTypeEnum[key] ?? PlanItemTypeEnum.None;
}

