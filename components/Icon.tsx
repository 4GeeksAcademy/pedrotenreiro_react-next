import type { IconName } from "@/types/icon";
import { iconPaths } from "./icon-paths";

interface IconProps {
  name: IconName;
  filled?: boolean;
  className?: string;
}

export const Icon = ({ name, filled = false, className = "h-5 w-5" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d={iconPaths[name]} />
  </svg>
);
