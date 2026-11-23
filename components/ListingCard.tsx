import Link from "next/link";
import type { Listing } from "@/types/listing";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { RatingStars } from "./RatingStars";

interface ListingCardProps {
  listing: Listing;
}

export const ListingCard = ({ listing }: ListingCardProps) => (
  <Link href={`/rooms/${listing.id}`} className="group block">
    <article>
      <PhotoPlaceholder
        label={listing.photo}
        className="aspect-square w-full transition-transform group-hover:scale-[1.01]"
      />
      <div className="mt-3 flex items-start justify-between gap-2">
        <h2 className="truncate text-sm font-semibold text-ink">{listing.title}</h2>
        <RatingStars rating={listing.rating} />
      </div>
      <p className="truncate text-sm text-muted">{listing.location}</p>
      <p className="mt-1 text-sm text-ink">
        <span className="font-semibold">€{listing.pricePerNight}</span> night
      </p>
    </article>
  </Link>
);
