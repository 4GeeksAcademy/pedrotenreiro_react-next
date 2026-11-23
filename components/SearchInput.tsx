"use client";

import { Icon } from "./Icon";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => (
  <label className="relative flex min-w-0 flex-1 items-center rounded-full border border-line bg-background shadow-sm md:max-w-md">
    <span className="sr-only">Search stays</span>
    <Icon name="search" className="ml-4 h-4 w-4 shrink-0 text-ink" />
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search stays"
      className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-ink placeholder:text-muted focus:outline-none"
    />
  </label>
);
