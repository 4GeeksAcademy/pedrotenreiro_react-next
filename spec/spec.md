# Spec: Vacation Rental Front End

Source of truth: [context.md](../context.md) and the product brief. Anything not listed here is out of scope.

## 1. Goal

Build three views in Next.js (App Router, TypeScript, Tailwind CSS) using React components:

| Route | View | Purpose |
| --- | --- | --- |
| `/` | Home | Discover stays: search, category filter, listing grid |
| `/catalog` | Catalog | Compare results: count, price sort, grid, map placeholder |
| `/rooms/[id]` | Room detail | Evaluate one stay: gallery, header, host, amenities, booking card |

Navigation between views uses `<Link>` and never reloads the page.

## 2. Constraints

- **Mobile-first.** Base classes target 375px. Use `md:` (768px and up) for wider layouts.
- **Tailwind CSS only** for styling. No UI component library (no shadcn, MUI, Ant Design, Chakra).
- **Dependencies.** Use what is installed. The only addition is `react-leaflet` with `leaflet` and their types, approved for the Catalog map. Icons are inline SVG. Stars are inline SVG.
- **Folders:** `/app` for routes, `/components` for UI, `/types` for interfaces. Mock data lives in `/data` (see Open questions).
- **Components:** one component per file, `const` function components, no class components, under ~80 lines of JSX and logic.
- **Comments:** only where code needs clarification.
- **No real backend.** All data is hardcoded and returned through `setTimeout` where the brief asks for a loading state.

## 3. Current project structure

```
app/
  favicon.ico
  globals.css       Tailwind import, CSS variables, dark mode via prefers-color-scheme
  layout.tsx        Root layout, Geist fonts, metadata still says "Create Next App"
  page.tsx          Starter page with placeholder content (to be replaced)
public/             Starter SVGs (next, vercel, file, globe, window)
context.md          Product context and visual reference
screenshots/        Three reference screenshots (not used at runtime)
spec/               This specification
package.json        next 16.4.6, react 19.3.0, tailwindcss 4.3.3, TypeScript 5
tsconfig.json       Path alias "@/*" maps to the repo root
AGENTS.md           Requires reading node_modules/next/dist/docs before writing Next.js code
```

Missing and to be created: `components/`, `types/`, `data/`, `app/catalog/`, `app/rooms/[id]/`.

## 4. Data model

Defined in `/types`:

- **`Category`**: `id`, `label`, `icon` (icon key from an inline SVG map).
- **`Listing`**: `id`, `title`, `location`, `pricePerNight`, `rating`, `reviewCount`, `category` (`Category["id"]`), `photo` (placeholder token), `coordinates` `{ lat, lng }` (stored now, used only by the optional map).
- **`Room`**: extends `Listing` with `photos: string[]`, `description`, `amenities: AmenityItem[]`, `host: { name, avatar, yearsHosting }`, `minGuests`, `maxGuests`.
- **`AmenityItem`**: `id`, `label`, `icon`.

Mock data in `/data` exports:
- `categories: Category[]` (Beach, Mansions, Trending, and a few more)
- `listings: Listing[]` (about 8 to 12 entries across categories)
- `getRoomById(id: string): Room | undefined`

## 5. Views and behavior

### 5.1 Home (`/`)

- **Navbar** (shared, see 5.4): logo, search input, user menu icon.
- **Category row**: horizontally scrollable on mobile with snap and hidden scrollbar. Each tab shows an icon and a label. Clicking a tab sets the active category. Only one tab is active at a time. The default is "all" (no category filter).
- **Listing grid**: 1 column on mobile, 2 at `md`, 3 at `lg`. Each card links to `/rooms/[id]`.
- **Search**: `useState` holds the typed value. Every keystroke recomputes the visible listings by matching title or location (case-insensitive). The search and category filters combine.
- **Loading**: `useEffect` on mount sets `loading = true` with an empty list, then `setTimeout` (about 1000 ms) sets the listings and `loading = false`. While loading, show a `LoadingSpinner`. The timer is cleared on unmount.
- **Empty result**: when filters match nothing, show a short text message.

### 5.2 Catalog (`/catalog`)

- **Navbar** (shared).
- **Results header**: "N stays" count and `SortSelect`. Sort options: Price ascending, Price descending. `useState` holds the order and the list is sorted on each change.
- **Catalog grid**: one column on mobile, two columns from `lg` (the list shares the width with the map). Home stays at two columns from `md` and three from `lg`.
- **Currency**: all prices are shown in euros (€).
- **Layout**: mobile shows the listing grid first, then the map placeholder below. `md` and up shows the list on the left and the map placeholder on the right, sticky.
- **Listing grid**: reuses `ListingGrid` and `ListingCard` from Home.
- **Map placeholder**: a gray box with the text "Map". No real map in the base scope.
- Catalog data comes synchronously from `/data`. The brief does not request a loading state here.

### 5.3 Room detail (`/rooms/[id]`)

- **Navbar** (shared).
- **BackLink**: `<Link href="/catalog">` labeled as a return to the catalog.
- **Loading**: `useEffect` keyed on the `id` from the route. `setTimeout` (about 1000 ms) sets the room data. Show `LoadingSpinner` until then. The timer is cleared on unmount or when `id` changes.
- **Not found**: when `getRoomById` returns nothing, show a short message and a `BackLink`.
- **PhotoGallery**: `useState` for the current index. Previous and Next buttons cycle through the photo array with wrap-around. Shows a counter ("2 / 5"). Photos are gray placeholders.
- **RoomHeader**: title, `RatingStars`, review count, location.
- **HostInfo**: avatar placeholder (initial in a circle), host name, years hosting.
- **AmenityList**: responsive grid (2 columns on mobile, 3 or 4 at `md`). Each `AmenityItem` shows an icon and a label.
- **BookingCard**: nightly price, `GuestCounter`, and a primary CTA button. The CTA has no action in the base scope (no booking flow).
- **GuestCounter**: value bounded by `minGuests` and `maxGuests`. Minus is disabled at the minimum and plus at the maximum.
- **Layout**: mobile stacks gallery, header, host, amenities, then the booking card. `md` and up puts the booking card in a sticky right column.

### 5.4 Shared navigation

- **Navbar** appears on all three views.
  - **Logo**: `Logo` links to `/` with `<Link>`.
  - **Search**: `SearchInput` is a controlled input that filters only on Home. Catalog and Room render the navbar without it (see Open questions).
  - **UserMenu**: an icon button with no menu behavior in the base scope.
- **Cards**: `ListingCard` is a `<Link>` to `/rooms/[id]`.
- **Back**: Room's `BackLink` goes to `/catalog`.
- No plain `<a href>` for internal routes.

## 6. Components

Matches the table in [context.md](../context.md). One file per component in `/components`.

| Component | Props (summary) | Owns state |
| --- | --- | --- |
| `Navbar` | `showSearch`, `searchValue?`, `onSearchChange?` | No |
| `Logo` | none | No |
| `SearchInput` | `value`, `onChange` | No |
| `UserMenu` | none | No |
| `CategoryRow` | `activeId` (`CategoryFilter`), `onSelect` | No (renders "All" plus the categories) |
| `CategoryTab` | `id`, `label`, `icon`, `active`, `onSelect` | No |
| `ListingGrid` | `listings` | No |
| `ListingCard` | `listing` | No |
| `RatingStars` | `rating`, `reviewCount?` | No |
| `LoadingSpinner` | `label?` | No |
| `ResultsHeader` | `count`, `sortOrder`, `onSortChange` | No |
| `SortSelect` | `value`, `onChange` | No |
| `MapArea` | `ListingMap`, `ListingMarker` (react-leaflet, client-only) | No |
| `PhotoGallery` | `photos`, `title` | Current index |
| `RoomHeader` | `room` | No |
| `HostInfo` | `host` | No |
| `AmenityList` | `amenities` | No |
| `AmenityItem` | `amenity` | No |
| `BookingCard` | `pricePerNight`, `minGuests`, `maxGuests` | Guest count |
| `GuestCounter` | `value`, `min`, `max`, `onChange` | No |
| `BackLink` | `href`, `label` | No |

Pages (`app/page.tsx`, `app/catalog/page.tsx`, `app/rooms/[id]/page.tsx`) own data loading and filter/sort state. Presentational components stay stateless where possible.

## 7. Visual rules (from context.md, scoped)

- **Colors**: background `#FFFFFF`, subtle surface `#F7F7F7`, text `#222222`, secondary text `#6A6A6A`, borders `#DDDDDD`. One accent for active category, primary CTA, and focus rings (`rose-500`, not the reference hue).
- **Type**: one sans family. Card titles ~15px, body 14 to 16px, metadata 13px, section headings ~22px mobile and ~24px desktop. Prices are bold.
- **Spacing**: page padding 16px mobile, 24px at `md`, larger on wide screens. Grid gap 16px vertical, 24px horizontal.
- **Shape**: photo corners ~12px. Category tabs and search as pills. Primary CTA ~8px radius.
- **Photos**: listing cards 1:1, room gallery 16:9 or 3:2.
- **Touch**: interactive elements at least 44px tall on mobile.
- **Focus**: visible accent ring on all interactive elements.

## 8. Out of scope

These appear in the visual reference or the earlier notes but are not requested. Do not implement them:

- Footer, language and currency selectors, bottom tab bar
- Favorite (heart) buttons and "guest favorite" badges
- Reviews section, highlights list, calendar, "show all photos" grid
- Map / list toggle on Catalog
- Login, user account, booking submission, payments
- Pagination, real API, persistence, dark mode
- Additional filters beyond category and price sort

The optional challenges (interactive map, date picker with total price) are kept in a separate phase and only start after the user approves them.

## 9. Decisions

1. **Mock data** lives in `/data`, except the room detail data, which lives in `/lib/room-details.ts` (user-approved, because `/data` was blocked by an organization content policy). `/lib/room-details.ts` builds each `Room` from the `/data` listings and adds the room-only fields: photos, amenities, host, and guest range.
6. **Catalog grid** is one column on mobile and two columns from `lg`.
7. **Currency** is euros (€) for all prices.
2. **Navbar** appears on all three views. The search input filters only on Home; Catalog and Room render the navbar without it.
3. **Palette** is light only. The dark-mode media query is removed.
4. **Optional map** is approved: `react-leaflet` on Catalog, pinning each listing by coordinates. The date fields are approved as native `<input type="date">` with no picker library. The total is computed from the nights between check-in and check-out.
5. **Context visual section**: items in section 8 are excluded from the build.
