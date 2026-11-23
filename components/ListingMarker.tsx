"use client";

import Link from "next/link";
import { divIcon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import type { Listing } from "@/types/listing";

interface ListingMarkerProps {
  listing: Listing;
}

export const ListingMarker = ({ listing }: ListingMarkerProps) => {
  const icon = divIcon({
    className: "flex items-center justify-center",
    html: `<span class="whitespace-nowrap rounded-full bg-ink px-2.5 py-1 text-xs font-semibold text-background shadow-md">€${listing.pricePerNight}</span>`,
    iconSize: [120, 32],
    iconAnchor: [60, 16],
  });

  return (
    <Marker position={[listing.coordinates.lat, listing.coordinates.lng]} icon={icon}>
      <Popup>
        <div className="flex flex-col gap-1 text-sm">
          <p className="font-semibold text-ink">{listing.title}</p>
          <p className="text-muted">{listing.location}</p>
          <Link href={`/rooms/${listing.id}`} className="font-medium text-rose-600 underline">
            View stay
          </Link>
        </div>
      </Popup>
    </Marker>
  );
};
