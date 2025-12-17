import type { Field } from '@measured/puck';
export type ColorPickerFieldProps = {
    name: string;
    label: string;
    value?: string;
    onChange: (value: string) => void;
};
export declare function ColorPickerField({ name, label, value, onChange }: ColorPickerFieldProps): import("react/jsx-runtime").JSX.Element;
export declare const colorPickerField: Field;
//# sourceMappingURL=ColorPickerField.d.ts.map