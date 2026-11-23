"use client";

import dynamic from "next/dynamic";
import type { Listing } from "@/types/listing";

const ListingMap = dynamic(
  () => import("@/components/ListingMap").then((mod) => mod.ListingMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center text-sm text-muted">
        Loading map…
      </div>
    ),
  },
);

interface MapAreaProps {
  listings: Listing[];
}

export const MapArea = ({ listings }: MapAreaProps) => (
  <aside
    aria-label="Map"
    className="h-64 overflow-hidden rounded-xl bg-surface md:sticky md:top-24 md:h-[calc(100vh-8rem)] md:self-start"
  >
    <ListingMap listings={listings} />
  </aside>
);
