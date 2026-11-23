"use client";

import { categories } from "@/data/categories";
import type { CategoryFilter } from "@/types/category";
import { CategoryTab } from "./CategoryTab";

interface CategoryRowProps {
  activeId: CategoryFilter;
  onSelect: (id: CategoryFilter) => void;
}

export const CategoryRow = ({ activeId, onSelect }: CategoryRowProps) => (
  <nav aria-label="Categories" className="border-b border-line bg-background">
    <div className="mx-auto flex max-w-7xl snap-x snap-mandatory gap-6 overflow-x-auto px-4 pt-4 md:px-8 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
      <CategoryTab
        id="all"
        label="All"
        icon="grid"
        active={activeId === "all"}
        onSelect={onSelect}
      />
      {categories.map((category) => (
        <CategoryTab
          key={category.id}
          id={category.id}
          label={category.label}
          icon={category.icon}
          active={category.id === activeId}
          onSelect={onSelect}
        />
      ))}
    </div>
  </nav>
);
