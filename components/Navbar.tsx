"use client";

import { Logo } from "./Logo";
import { SearchInput } from "./SearchInput";
import { UserMenu } from "./UserMenu";

interface NavbarProps {
  showSearch?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

export const Navbar = ({
  showSearch = false,
  searchValue = "",
  onSearchChange = () => undefined,
}: NavbarProps) => (
  <header className="sticky top-0 z-20 border-b border-line bg-background">
    <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 md:gap-6 md:px-8">
      <Logo />
      {showSearch && (
        <SearchInput value={searchValue} onChange={onSearchChange} />
      )}
      <div className="ml-auto flex shrink-0 items-center">
        <UserMenu />
      </div>
    </div>
  </header>
);
