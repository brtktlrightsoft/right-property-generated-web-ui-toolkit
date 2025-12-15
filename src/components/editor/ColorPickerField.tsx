import { FieldLabel } from '@measured/puck';
import type { Field } from '@measured/puck';

export type ColorPickerFieldProps = {
  name: string;
  label: string;
  value?: string;
  onChange: (value: string) => void;
};

export function ColorPickerField({ name, label, value = '#000000', onChange }: ColorPickerFieldProps) {
  return (
    <div>
      <FieldLabel label={label} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
        <input
          type="color"
          id={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '40px',
            height: '40px',
            border: '1px solid #e5e7eb',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#000000"
          style={{
            flex: 1,
            padding: '8px',
            border: '1px solid #e5e7eb',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        />
      </div>
    </div>
  );
}

export const colorPickerField: Field = {
  type: 'custom',
  render: ({ name, label, value, onChange }) => (
    <ColorPickerField
      name={name}
      label={label}
      value={value as string}
      onChange={(val) => onChange(val)}
    />
  ),
};


