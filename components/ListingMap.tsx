"use client";

import "leaflet/dist/leaflet.css";
import { latLngBounds } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { ListingMarker } from "@/components/ListingMarker";
import type { Listing } from "@/types/listing";

const TILE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

interface ListingMapProps {
  listings: Listing[];
}

export const ListingMap = ({ listings }: ListingMapProps) => {
  const bounds = latLngBounds(
    listings.map((listing) => [listing.coordinates.lat, listing.coordinates.lng]),
  );

  return (
    <MapContainer
      bounds={bounds}
      boundsOptions={{ padding: [32, 32] }}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer url={TILE_URL} attribution={TILE_ATTRIBUTION} />
      {listings.map((listing) => (
        <ListingMarker key={listing.id} listing={listing} />
      ))}
    </MapContainer>
  );
};
