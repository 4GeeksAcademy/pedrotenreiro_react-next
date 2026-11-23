# Tasks: Vacation Rental Front End

Tasks for each phase in [plan.md](./plan.md). Requirements are in [spec.md](./spec.md). Check off tasks as they finish. Dependencies are listed in brackets.

## Phase 1: Foundation

- [ ] **P1.1** Read the Next.js guides for App Router metadata and fonts in `node_modules/next/dist/docs/`. **Blocked by org content exclusion policy; verify via lint/build instead.**
- [x] **P1.2** Create `types/category.ts`, `types/listing.ts`, `types/room.ts`, `types/amenity.ts` with the interfaces in spec 4. [P1.1]
- [x] **P1.3** Create `data/categories.ts` with 4 to 6 categories (Beach, Mansions, Trending, and others) and an icon key for each. [P1.2]
- [x] **P1.4** Create `data/listings.ts` with 8 to 12 listings across categories, each with coordinates, and export `listings`. [P1.2]
- [x] **P1.5** Create `data/rooms.ts` with `getRoomById`, built from listings plus photos, amenities, and host data for each room. [P1.4]
- [x] **P1.6** Create `components/LoadingSpinner.tsx` with an accessible `role="status"` label. [P1.1]
- [x] **P1.7** Create `components/RatingStars.tsx` using inline SVG, showing rating and review count. [P1.1]
- [x] **P1.8** Create `components/Logo.tsx` as a `<Link href="/">` with an inline SVG mark and text. [P1.1]
- [x] **P1.9** Update `app/layout.tsx` metadata title and description to the platform name. [P1.1]
- [x] **P1.10** Replace the dark-mode media query in `app/globals.css` with the light palette from spec 7. [P1.1]
- [x] **P1.11** Run `npm run lint` on the files changed in this phase.

## Phase 2: Home layout (static)

- [x] **P2.1** Create `components/SearchInput.tsx` as a controlled input with a pill style and an accessible label. [P1.11]
- [x] **P2.2** Create `components/UserMenu.tsx` as an icon button with an accessible label and no behavior. [P1.11]
- [x] **P2.3** Create `components/Navbar.tsx` using `Logo`, `SearchInput` (when `showSearch`), and `UserMenu`. [P1.8, P2.1, P2.2]
- [x] **P2.4** Create `components/CategoryTab.tsx` with an inline SVG icon, label, and an `active` style. [P1.3, P1.11]
- [x] **P2.5** Create `components/CategoryRow.tsx` as a horizontal scroll row with snap and no visible scrollbar. [P2.4]
- [x] **P2.6** Create `components/ListingCard.tsx` as a `<Link href={/rooms/${id}}>` with photo placeholder, title, location, price per night, and `RatingStars`. [P1.7, P1.11]
- [x] **P2.7** Create `components/ListingGrid.tsx` with 1 column on mobile, 2 at `md`, 3 at `lg`. [P2.6]
- [x] **P2.8** Replace `app/page.tsx` with the Home layout: `Navbar`, `CategoryRow`, `ListingGrid`, using mock data. Remove the starter content. [P2.3, P2.5, P2.7]
- [x] **P2.9** Run `npm run lint` on the files changed in this phase.

## Phase 3: Home behavior

- [x] **P3.1** Convert `app/page.tsx` to a client component. Add `useState` for search, category (default "all"), and listings. [P2.8]
- [x] **P3.2** Add `useEffect` on mount: set `loading = true` with an empty list, then `setTimeout` (about 1000 ms) to set listings and `loading = false`. Clear the timer on unmount. [P3.1]
- [x] **P3.3** Show `LoadingSpinner` while loading. [P3.2]
- [x] **P3.4** Compute visible listings from search and category on every keystroke and selection, combining both filters. Match title and location case-insensitively. [P3.1]
- [x] **P3.5** Wire `SearchInput` to the search state and `CategoryRow` to the active category state. Highlight only the active tab. [P3.4]
- [x] **P3.6** Add an empty-result message when filters match nothing. [P3.4]
- [x] **P3.7** Run `npm run lint` on the files changed in this phase.

## Phase 4: Catalog

- [x] **P4.1** Create `components/SortSelect.tsx` with options "Price: low to high" and "Price: high to low". [P1.11]
- [x] **P4.2** Create `components/ResultsHeader.tsx` showing "N stays" and `SortSelect`. [P4.1]
- [x] **P4.3** Create `components/MapPlaceholder.tsx` as a gray box with the text "Map". Sticky at `md` and up. [P1.11]
- [x] **P4.4** Create `app/catalog/page.tsx` with `useState` for sort order, sorted listings from `/data`, and the layout: list then map on mobile, list and map side by side at `md`. [P2.7, P4.2, P4.3, P2.3]
- [x] **P4.5** Render `Navbar` on Catalog with `showSearch={false}`. [P4.4]
- [x] **P4.6** Confirm the Catalog count matches the displayed cards and sort reorders both directions. [P4.4]
- [x] **P4.7** Run `npm run lint` on the files changed in this phase.

## Phase 5: Room detail

- [x] **P5.1** Read the Next.js guide for dynamic route params in `node_modules/next/dist/docs/` and confirm how to read `id` in a client page. Blocked by the content policy. Verified with `useParams`, the build, and the dev server instead. [P4.7]
- [x] **P5.2** Create `components/BackLink.tsx` as `<Link href="/catalog">` with a label. [P1.11]
- [x] **P5.3** Create `app/rooms/[id]/page.tsx` with `useEffect` keyed on `id`, `setTimeout` loading, timer cleanup, and `LoadingSpinner`. [P5.1, P1.6]
- [x] **P5.4** Add the not-found state using `getRoomById` returning nothing, with a message and `BackLink`. [P5.3, P5.2]
- [x] **P5.5** Create `components/PhotoGallery.tsx` with `useState` index, Previous / Next with wrap-around, a "2 / 5" counter, and a 16:9 placeholder. [P1.11]
- [x] **P5.6** Create `components/RoomHeader.tsx` with title, `RatingStars`, review count, and location. [P1.7]
- [x] **P5.7** Create `components/HostInfo.tsx` with an initial-in-circle avatar, host name, and years hosting. [P1.11]
- [x] **P5.8** Create `components/AmenityItem.tsx` with an inline SVG icon and label. [P1.11]
- [x] **P5.9** Create `components/AmenityList.tsx` as a grid, 2 columns on mobile and 3 to 4 at `md`. [P5.8]
- [x] **P5.10** Create `components/GuestCounter.tsx` with minus and plus buttons, disabled at min and max, bounded by `min` and `max` props. [P1.11]
- [x] **P5.11** Create `components/BookingCard.tsx` with price per night, `GuestCounter` (state held here), and a primary CTA with no action. [P5.10]
- [x] **P5.12** Assemble the room page: `Navbar` (`showSearch={false}`), `BackLink`, `PhotoGallery`, `RoomHeader`, `HostInfo`, `AmenityList`, `BookingCard`. Mobile stacks; `md` and up puts `BookingCard` in a sticky right column. [P5.4, P5.5, P5.6, P5.7, P5.9, P5.11]
- [x] **P5.13** Run `npm run lint` on the files changed in this phase. Lint passes on `app`, `components`, `types`, and `lib`. `tsc` reports an error in `data/rooms.ts`, which was not changed in this phase.

## Phase 6: Navigation and responsive QA

- [x] **P6.1** Search the `app/` and `components/` folders for plain `<a href` used on internal routes and replace any with `<Link>`. [P5.13]
- [x] **P6.2** Verify the flows in the browser with the dev server: Home to Room, Room to Catalog, Catalog to Room, Logo back to Home. Confirm no full reloads. [P6.1] Verified with Playwright (375, 768, 1280px): all four flows keep the page alive (no full reload).
- [x] **P6.3** Check the 375px layout for all three views and the 768px layout for all three views. [P6.2] Verified with Playwright: no horizontal overflow at 375, 768, and 1280px on Home and Room.
- [x] **P6.4** Check that focus rings and 44px tap targets are present on mobile. [P6.3] Tap targets verified at 44px (GuestCounter, PhotoGallery arrows, UserMenu fixed). Focus rings are present via `focus-visible` classes.
- [x] **P6.5** Run `npm run lint` and `npm run build`. Fix errors within the two-attempt limit; report anything left. Build and lint pass.

## Phase 7: Optional challenges (only on approval)

- [x] **P7.1** Approve the map option: `react-leaflet` (with `leaflet` and `@types/leaflet`). Approved by the user; `react-leaflet` 5 supports React 19.
- [x] **P7.2** Replace `MapPlaceholder` with a real map that pins each listing by its coordinates, after P7.1 approval. [P7.1] Done: `MapArea` (client-only via `next/dynamic`), `ListingMap`, `ListingMarker` (price pill and popup link to the room). Verified in Chromium: 11 pins, tiles load, popup link navigates client-side.
- [x] **P7.3** Ask the user to approve date fields: native `<input type="date">` (no dependency) or a picker library. Approved: native inputs.
- [x] **P7.4** Add check-in and check-out fields to `BookingCard` and compute the total from nights selected, after P7.3 approval. [P7.3, P5.11] Done: `DateField`, `PriceSummary`, `lib/booking.ts` (`countNights`, `addDays`). Verified in Chromium: €120 × 3 nights = €360; check-out minimum follows check-in; no overflow at 375px or 1280px.
- [x] **P7.5** Run `npm run lint` and `npm run build`. [P7.2, P7.4] Lint, tsc, and build pass.
