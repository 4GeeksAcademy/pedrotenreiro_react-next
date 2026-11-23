import type { AmenityItem as Amenity } from "@/types/amenity";
import { AmenityItem } from "./AmenityItem";

interface AmenityListProps {
  amenities: Amenity[];
}

export const AmenityList = ({ amenities }: AmenityListProps) => (
  <section aria-labelledby="amenities-heading" className="flex flex-col gap-4">
    <h2 id="amenities-heading" className="text-xl font-semibold text-ink md:text-2xl">
      What this place offers
    </h2>
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {amenities.map((amenity) => (
        <AmenityItem key={amenity.id} amenity={amenity} />
      ))}
    </ul>
  </section>
);
