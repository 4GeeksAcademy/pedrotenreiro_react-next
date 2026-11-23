"use client";

import { useState } from "react";
import { ListingGrid } from "@/components/ListingGrid";
import { MapArea } from "@/components/MapArea";
import { Navbar } from "@/components/Navbar";
import { ResultsHeader } from "@/components/ResultsHeader";
import { listings } from "@/data/listings";
import type { Listing } from "@/types/listing";
import type { SortOrder } from "@/types/sort";

const sortListings = (items: Listing[], order: SortOrder) =>
  [...items].sort((a, b) =>
    order === "price-asc"
      ? a.pricePerNight - b.pricePerNight
      : b.pricePerNight - a.pricePerNight,
  );

export default function CatalogPage() {
  const [sort, setSort] = useState<SortOrder>("price-asc");
  const sorted = sortListings(listings, sort);

  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <Navbar showSearch={false} />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:grid md:grid-cols-2 md:gap-8 md:px-8">
        <section>
          <ResultsHeader count={sorted.length} sort={sort} onSortChange={setSort} />
          <ListingGrid listings={sorted} layout="split" />
        </section>
        <MapArea listings={sorted} />
      </main>
    </div>
  );
}
