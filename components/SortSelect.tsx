import type { SortOrder } from "@/types/sort";

interface SortSelectProps {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}

export const SortSelect = ({ value, onChange }: SortSelectProps) => (
  <label className="flex items-center gap-2 text-sm text-ink">
    <span className="text-muted">Sort by</span>
    <select
      value={value}
      onChange={(event) => onChange(event.target.value as SortOrder)}
      className="rounded-lg border border-line bg-background px-3 py-2 text-sm text-ink focus:outline-2 focus:outline-rose-500"
    >
      <option value="price-asc">Price: low to high</option>
      <option value="price-desc">Price: high to low</option>
    </select>
  </label>
);
