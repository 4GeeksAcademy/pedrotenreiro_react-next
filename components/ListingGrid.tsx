import type { Listing } from "@/types/listing";
import { ListingCard } from "./ListingCard";

type GridLayout = "wide" | "split";

interface ListingGridProps {
  listings: Listing[];
  /** "wide" fills the page (Home); "split" shares the width with a map (Catalog). */
  layout?: GridLayout;
}

const LAYOUT_CLASSES: Record<GridLayout, string> = {
  wide: "md:grid-cols-2 lg:grid-cols-3",
  split: "lg:grid-cols-2",
};

export const ListingGrid = ({ listings, layout = "wide" }: ListingGridProps) => (
  <ul className={`grid grid-cols-1 gap-x-6 gap-y-8 ${LAYOUT_CLASSES[layout]}`}>
    {listings.map((listing) => (
      <li key={listing.id}>
        <ListingCard listing={listing} />
      </li>
    ))}
  </ul>
);
