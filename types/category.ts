import type { IconName } from "./icon";

export type CategoryId =
  | "beach"
  | "mansions"
  | "trending"
  | "countryside"
  | "city"
  | "lake";

export interface Category {
  id: CategoryId;
  label: string;
  icon: IconName;
}

export type CategoryFilter = CategoryId | "all";
