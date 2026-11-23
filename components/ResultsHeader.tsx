import type { SortOrder } from "@/types/sort";
import { SortSelect } from "./SortSelect";

interface ResultsHeaderProps {
  count: number;
  sort: SortOrder;
  onSortChange: (value: SortOrder) => void;
}

export const ResultsHeader = ({ count, sort, onSortChange }: ResultsHeaderProps) => (
  <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
    <h1 className="text-lg font-semibold text-ink">
      {count} {count === 1 ? "stay" : "stays"}
    </h1>
    <SortSelect value={sort} onChange={onSortChange} />
  </div>
);
