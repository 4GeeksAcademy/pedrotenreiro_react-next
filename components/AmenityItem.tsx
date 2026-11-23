import type { AmenityItem as Amenity } from "@/types/amenity";
import { Icon } from "./Icon";

interface AmenityItemProps {
  amenity: Amenity;
}

export const AmenityItem = ({ amenity }: AmenityItemProps) => (
  <li className="flex items-center gap-3 text-sm text-ink">
    <Icon name={amenity.icon} className="h-6 w-6 shrink-0" />
    <span>{amenity.label}</span>
  </li>
);
