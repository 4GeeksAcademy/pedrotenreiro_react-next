"use client";

import type { CategoryFilter } from "@/types/category";
import type { IconName } from "@/types/icon";
import { Icon } from "./Icon";

interface CategoryTabProps {
  id: CategoryFilter;
  label: string;
  icon: IconName;
  active: boolean;
  onSelect: (id: CategoryFilter) => void;
}

export const CategoryTab = ({ id, label, icon, active, onSelect }: CategoryTabProps) => (
  <button
    type="button"
    aria-pressed={active}
    onClick={() => onSelect(id)}
    className={`flex shrink-0 snap-start flex-col items-center gap-2 border-b-2 px-2 pb-2 text-xs font-medium transition-colors ${
      active
        ? "border-ink text-ink"
        : "border-transparent text-muted hover:text-ink"
    }`}
  >
    <Icon name={icon} className="h-6 w-6" />
    <span>{label}</span>
  </button>
);
