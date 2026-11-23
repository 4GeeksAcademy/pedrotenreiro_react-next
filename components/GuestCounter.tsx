"use client";

import { Icon } from "./Icon";

interface GuestCounterProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const stepButtonClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-muted text-ink transition-colors hover:border-ink disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export const GuestCounter = ({ value, min, max, onChange }: GuestCounterProps) => (
  <div className="flex items-center justify-between gap-4">
    <div>
      <p className="text-sm font-medium text-ink">Guests</p>
      <p className="text-xs text-muted">
        {min} to {max} guests
      </p>
    </div>
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Remove guest"
        disabled={value <= min}
        onClick={() => onChange(value - 1)}
        className={stepButtonClass}
      >
        <Icon name="minus" className="h-3.5 w-3.5" />
      </button>
      <span className="w-6 text-center text-sm font-medium text-ink" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        aria-label="Add guest"
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
        className={stepButtonClass}
      >
        <Icon name="plus" className="h-3.5 w-3.5" />
      </button>
    </div>
  </div>
);
