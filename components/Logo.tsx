import Link from "next/link";
import { Icon } from "./Icon";

export const Logo = () => (
  <Link href="/" aria-label="Stay Finder home" className="flex items-center gap-2 text-rose-500">
    <Icon name="logo" filled className="h-7 w-7" />
    <span className="hidden text-lg font-semibold md:inline">Stay Finder</span>
  </Link>
);
