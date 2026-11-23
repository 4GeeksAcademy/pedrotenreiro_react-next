import type { AmenityItem } from "@/types/amenity";

export const amenities: Record<string, AmenityItem> = {
  wifi: { id: "wifi", label: "Fast Wi-Fi", icon: "wifi" },
  parking: { id: "parking", label: "Free parking", icon: "parking" },
  kitchen: { id: "kitchen", label: "Kitchen", icon: "kitchen" },
  pool: { id: "pool", label: "Pool", icon: "pool" },
  ac: { id: "ac", label: "Air conditioning", icon: "ac" },
  workspace: { id: "workspace", label: "Dedicated workspace", icon: "workspace" },
};
