import Link from "next/link";
import { Icon } from "./Icon";

export const BackLink = () => (
  <Link
    href="/catalog"
    className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
  >
    <Icon name="arrow-left" className="h-4 w-4" />
    Back to stays
  </Link>
);
