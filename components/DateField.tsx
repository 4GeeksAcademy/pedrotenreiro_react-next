interface DateFieldProps {
  id: string;
  label: string;
  value: string;
  min?: string;
  onChange: (value: string) => void;
}

export const DateField = ({ id, label, value, min, onChange }: DateFieldProps) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id} className="text-xs font-semibold text-ink">
      {label}
    </label>
    <input
      id={id}
      type="date"
      value={value}
      min={min}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-lg border border-muted px-3 py-3 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    />
  </div>
);
