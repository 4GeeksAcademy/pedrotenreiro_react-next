import { amenities } from "@/data/amenities";
import { listings } from "@/data/listings";
import type { Room } from "@/types/room";

const PHOTOS_PER_ROOM = 5;

const roomAmenities = [
  amenities.wifi,
  amenities.kitchen,
  amenities.ac,
  amenities.parking,
  amenities.workspace,
];

const host = { name: "Ana", yearsHosting: 6 };

const toRoom = (listing: (typeof listings)[number]): Room => ({
  ...listing,
  photos: Array.from({ length: PHOTOS_PER_ROOM }, (_, index) => `${listing.photo} ${index + 1}`),
  description: `${listing.title} in ${listing.location}.`,
  amenities: roomAmenities,
  host,
  minGuests: 1,
  maxGuests: 6,
});

export const getRoomById = (id: string): Room | undefined => {
  const listing = listings.find((item) => item.id === id);
  return listing ? toRoom(listing) : undefined;
};
