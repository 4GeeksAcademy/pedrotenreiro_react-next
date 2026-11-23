"use client";

import { useState } from "react";
import { addDays, countNights } from "@/lib/booking";
import { DateField } from "./DateField";
import { GuestCounter } from "./GuestCounter";
import { PriceSummary } from "./PriceSummary";

interface BookingCardProps {
  pricePerNight: number;
  minGuests: number;
  maxGuests: number;
}

export const BookingCard = ({ pricePerNight, minGuests, maxGuests }: BookingCardProps) => {
  const [guests, setGuests] = useState(minGuests);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const nights = countNights(checkIn, checkOut);

  return (
    <aside className="flex flex-col gap-5 rounded-xl border border-line bg-background p-6 shadow-lg">
      <p className="text-ink">
        <span className="text-xl font-semibold">€{pricePerNight}</span>
        <span className="text-sm text-muted"> night</span>
      </p>
      <div className="grid grid-cols-2 gap-2">
        <DateField id="check-in" label="Check-in" value={checkIn} onChange={setCheckIn} />
        <DateField
          id="check-out"
          label="Check-out"
          value={checkOut}
          min={checkIn ? addDays(checkIn, 1) : undefined}
          onChange={setCheckOut}
        />
      </div>
      <PriceSummary pricePerNight={pricePerNight} nights={nights} />
      <GuestCounter value={guests} min={minGuests} max={maxGuests} onChange={setGuests} />
      <button
        type="button"
        className="w-full rounded-lg bg-ink py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        Reserve
      </button>
    </aside>
  );
};
