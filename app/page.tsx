"use client";

import { useEffect, useState } from "react";
import { CategoryRow } from "@/components/CategoryRow";
import { ListingGrid } from "@/components/ListingGrid";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Navbar } from "@/components/Navbar";
import { listings as mockListings } from "@/data/listings";
import type { CategoryFilter } from "@/types/category";
import type { Listing } from "@/types/listing";

const LOAD_DELAY_MS = 1000;

const filterListings = (items: Listing[], query: string, category: CategoryFilter) => {
  const term = query.trim().toLowerCase();
  return items.filter(
    (item) =>
      (category === "all" || item.category === category) &&
      (item.title.toLowerCase().includes(term) ||
        item.location.toLowerCase().includes(term)),
  );
};

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(mockListings);
      setLoading(false);
    }, LOAD_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const visible = filterListings(listings, search, category);

  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <Navbar showSearch searchValue={search} onSearchChange={setSearch} />
      <CategoryRow activeId={category} onSelect={setCategory} />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:px-8">
        {loading ? (
          <LoadingSpinner />
        ) : visible.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted">
            No stays match your search. Try another place or category.
          </p>
        ) : (
          <ListingGrid listings={visible} />
        )}
      </main>
    </div>
  );
}
