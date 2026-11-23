import type { CategoryId } from "./category";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Listing {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  category: CategoryId;
  photo: string;
  coordinates: Coordinates;
}
