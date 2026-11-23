import { Icon } from "./Icon";

export const UserMenu = () => (
  <button
    type="button"
    aria-label="Open user menu"
    className="flex h-11 shrink-0 items-center gap-2 rounded-full border border-line px-2.5 py-1.5 text-ink hover:shadow-md"
  >
    <Icon name="menu" className="h-4 w-4" />
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-background">
      <Icon name="user" className="h-4 w-4" />
    </span>
  </button>
);
