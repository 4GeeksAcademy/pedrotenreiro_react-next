import type { AmenityItem } from "./amenity";
import type { Listing } from "./listing";

export interface Host {
  name: string;
  yearsHosting: number;
}

export interface Room extends Listing {
  photos: string[];
  description: string;
  amenities: AmenityItem[];
  host: Host;
  minGuests: number;
  maxGuests: number;
}
