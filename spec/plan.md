# Plan: Vacation Rental Front End

Implementation runs in seven phases. Each phase ends in a working, checkable state before the next one starts. Tasks for each phase are in [tasks.md](./tasks.md). Requirements are in [spec.md](./spec.md).

## Working rules

- One phase at a time. Stop at the end of each phase and report before continuing.
- Before writing routing or page code, read the relevant Next.js guide in `node_modules/next/dist/docs/` (see [AGENTS.md](../AGENTS.md)).
- Lint only the files changed in the phase. Full build runs in Phase 6.
- Maximum two fix attempts per error. Then stop and report.
- Use only installed dependencies. Any new dependency needs explicit approval.

## Phase 1: Foundation

**Goal:** Types, mock data, and shared primitives exist. Nothing is visible yet.

**Scope:** `types/`, `data/`, `components/LoadingSpinner`, `components/RatingStars`, `components/Logo`, layout metadata, light theme in `globals.css`.

**Exit criteria:** Types compile. Mock data exports categories, listings, and `getRoomById`. Lint passes on the new files.

## Phase 2: Home layout (static)

**Goal:** Home renders the navbar, category row, and listing grid with mock data. No state yet.

**Scope:** `Navbar`, `SearchInput`, `UserMenu`, `CategoryTab`, `CategoryRow`, `ListingCard`, `ListingGrid`, `app/page.tsx` replaces the starter content.

**Exit criteria:** `/` shows all listings in 1 column at 375px and 2 to 3 columns at 768px and up. Cards link to `/rooms/[id]` with `<Link>`.

## Phase 3: Home behavior

**Goal:** Home is interactive: search, category filter, loading state, empty state.

**Scope:** `useState` for search and category, `useEffect` with `setTimeout` for loading, `LoadingSpinner` on Home, empty message.

**Exit criteria:** Typing filters cards on every keystroke. Selecting a category highlights it and filters. Both combine. Loading shows for about 1 second on mount and the timer is cleared on unmount.

## Phase 4: Catalog

**Goal:** `/catalog` shows results, a price sort, and the map placeholder. Navbar is shared.

**Scope:** `app/catalog/page.tsx`, `ResultsHeader`, `SortSelect`, `MapPlaceholder`, shared `Navbar` with `showSearch={false}`.

**Exit criteria:** Count matches the list. Sort ascending and descending reorders cards. Mobile stacks list then map. At 768px and up, map sits to the right and is sticky. Navigating Home to Catalog uses `<Link>` without reload.

## Phase 5: Room detail

**Goal:** `/rooms/[id]` renders the full room view with loading, not-found, gallery, and booking card.

**Scope:** `app/rooms/[id]/page.tsx`, `BackLink`, `PhotoGallery`, `RoomHeader`, `HostInfo`, `AmenityList`, `AmenityItem`, `BookingCard`, `GuestCounter`.

**Exit criteria:** Loading shows, then the room appears. Unknown id shows the not-found state. Gallery wraps around. Guest counter stops at min and max. Back link returns to `/catalog`. Mobile stacks content; at 768px and up the booking card is sticky on the right.

## Phase 6: Navigation and responsive QA

**Goal:** The three views work together with no full page reloads and pass the checks.

**Scope:** Check every internal link uses `<Link>`. Check Home to Room to Catalog to Room flows in the browser. Check 375px and 768px layouts. Check focus rings and 44px tap targets.

**Exit criteria:** `npm run lint` and `npm run build` pass. Dev server runs. Each flow verified by hand. Any gaps reported as issues rather than silently added.

## Phase 7: Optional challenges (only on approval)

**Goal:** Two optional features from the brief. Start only if the user approves.

**Scope:**
- Real map on Catalog pinning each listing by coordinates. Requires approval for `react-leaflet` or the Google Maps SDK.
- Check-in and check-out fields in `BookingCard` with a computed total. Native `<input type="date">` needs no dependency. A picker library needs approval.

**Exit criteria:** Each feature works without breaking phases 1 to 6. Lint and build still pass.

## Dependency order

```
1 Foundation
 └─ 2 Home layout
     └─ 3 Home behavior
         └─ 4 Catalog
             └─ 5 Room detail
                 └─ 6 QA
                     └─ 7 Optional (approval)
```

Phases are sequential because each one reuses components from the previous phase. Within a phase, tasks follow the dependencies listed in [tasks.md](./tasks.md).
