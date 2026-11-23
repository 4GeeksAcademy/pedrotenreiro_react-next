# Context: Vacation Rental Front End

## Purpose

A vacation rental platform front end with three views: a **Home** page for discovering stays, a **Catalog** page for comparing search results, and a **Room detail** page for evaluating and booking one stay.

The goal is to validate the component architecture before writing a custom design system. We learn which components are needed, what data each one needs, and how they connect across views.

## User

- **Traveler** planning a short trip who is browsing on a phone most of the time.
- Wants to find a place quickly by destination or category, compare options by price and rating, and check the details (photos, amenities, host, guest count, price) before booking.

## Pages

### 1. Home (`/`)

- **Navbar**: logo, search input, user menu icons.
- **Category row**: horizontally scrollable, icon + label per category (Beach, Mansions, Trending, etc.). One category is active at a time.
- **Listing grid**: cards with photo placeholder, title, price per night, and star rating. Single column on mobile, multiple columns on desktop.
- **Loading state**: shown while listings load (simulated with `useEffect` and `setTimeout`).
- **Search**: typing in the navbar search filters the cards in real time.

### 2. Catalog (`/catalog`)

- **Results header**: result count and a price sort control (ascending / descending).
- **Listing grid**: reuses the Home listing card.
- **Map area**: to the right of the list on desktop, below the list on mobile. A gray "Map" placeholder by default. Optional: a real map with pins.

### 3. Room detail (`/rooms/[id]`)

- **Back link**: returns to the Catalog.
- **Photo gallery**: current photo index, previous / next buttons.
- **Listing header**: title, star rating, review count, location.
- **Host row**: avatar placeholder, host name, years hosting.
- **Amenities**: grid of icon + label pairs.
- **Booking card**: nightly price, guest counter (min/max range), CTA button. Optional: date fields with a computed total.
- **Loading state**: shown while the room loads, using the `id` from the URL.

## Components (planned)

| Component | Used on | Responsibility |
| --- | --- | --- |
| `Navbar` | Home, Catalog, Room | Layout of logo, search, user menu |
| `Logo` | Navbar | Brand mark link to Home |
| `SearchInput` | Navbar | Controlled text input |
| `UserMenu` | Navbar | Menu icon button |
| `CategoryRow` | Home | Horizontal list of category tabs |
| `CategoryTab` | CategoryRow | One icon + label button |
| `ListingGrid` | Home, Catalog | Responsive grid of cards |
| `ListingCard` | Home, Catalog | Photo, title, price, rating; links to room |
| `RatingStars` | ListingCard, Room header | Star + rating value |
| `LoadingSpinner` | Home, Room | Loading indicator |
| `ResultsHeader` | Catalog | Count and sort control |
| `SortSelect` | ResultsHeader | Ascending / descending price |
| `MapPlaceholder` | Catalog | Gray box with "Map" text |
| `PhotoGallery` | Room | Photo display and prev / next |
| `RoomHeader` | Room | Title, rating, reviews, location |
| `HostInfo` | Room | Avatar, name, years hosting |
| `AmenityList` | Room | Grid of amenity items |
| `AmenityItem` | AmenityList | One icon + label |
| `BookingCard` | Room | Price, guest counter, CTA |
| `GuestCounter` | BookingCard | Increase / decrease within min and max |
| `BackLink` | Room | `<Link>` back to Catalog |

Each component lives in its own file in `/components`, is a `const` function component, and stays under ~80 lines of JSX and logic.

## Data

Types go in `/types`.

- **`Listing`**: `id`, `title`, `location`, `pricePerNight`, `rating`, `reviewCount`, `category`, `photo`, `coordinates` (for the optional map).
- **`Room`**: extends `Listing` with `photos[]`, `description`, `amenities[]`, `host` (`name`, `avatar`, `yearsHosting`), `maxGuests`, `minGuests`.
- **`Category`**: `id`, `label`, `icon`.
- **`AmenityItem`**: `id`, `label`, `icon`.

Mock data is hardcoded in a local module and returned through `setTimeout`.

## Navigation

- All internal links use Next.js `<Link>`. No plain `<a href>` for internal routes.
- Clicking a card on Home or Catalog goes to `/rooms/[id]`.
- The Room page returns to `/catalog`.
- No full page reloads between the three views.

## Responsive strategy

- Mobile-first. Design at **375px**, then adjust at **768px and above**.
- Home and Catalog grids: 1 column on mobile, 2 columns at 768px, 3 or more on wide screens.
- Catalog: list and map stacked on mobile; side by side at 768px and above.
- Room page: gallery, then content, then booking card stacked on mobile. At 768px and above, the booking card sits in a sticky right column.

## Visual design

This section is based on the three reference screenshots (home, search results, and room page). It describes the visual role of each element. It does not copy the brand, logo, copy, or imagery.

### Structure observed in the references

- **Home**: a compact top bar with a centered, pill-shaped search input. Under it, a horizontal scroll row of round or pill category tabs with icons and labels. Below that, several titled horizontal carousels, each with a heading, a circular arrow button on the right, and a row of cards. A footer with link groups and a bottom bar with language, currency, and legal links.
- **Search results**: a top bar with a back control, a summary of the search, and a filter row of pill chips. A "map" preview block sits at the top of the list. Cards are stacked in a single vertical column on mobile. A bottom tab bar with three or four icons. The map and list are separate views that toggle.
- **Room detail**: a full-width photo at the top with a counter in the corner. Below it, a stacked content flow: title, rating summary, a short highlights list with icons, host info, amenities, a map, a calendar, and a review section. The booking summary is a card that appears inline on mobile and in a side column on wider screens.

### Colour

- **Background**: white (`#FFFFFF`) for pages and cards. A very light gray (`#F7F7F7`) for subtle sections.
- **Text**: near-black (`#222222`) for headings and body. Mid-gray (`#6A6A6A`) for secondary text such as location and dates.
- **Borders and dividers**: light gray (`#DDDDDD`).
- **Accent**: one warm red-pink for the logo, active category, primary CTA, and focus states. Use a Tailwind token such as `rose-500` or a custom accent. Do not reuse the reference's exact hue.
- **Rating stars**: near-black, not gold.
- **Badges** ("guest favorite" style): a white pill with a dark border and dark text, placed on the photo's top-left corner.
- **Heart / favorite button**: white circle with a semi-transparent shadow, placed on the photo's top-right corner.
- **Loading placeholder**: light gray blocks with a subtle pulse.

Suggested Tailwind mapping: `text-neutral-900`, `text-neutral-500`, `border-neutral-200`, `bg-neutral-50`, `bg-white`, and one accent (`rose-500` for the primary CTA and active state).

### Typography

- One sans-serif family (system UI or a Google font). Weights: 400 for body, 500 for labels, 600 for card titles and prices, 700 for section headings.
- Approximate sizes: page section headings about 22px on mobile and 24px on desktop. Card titles about 15px. Body about 14px to 16px. Secondary metadata about 13px.
- Prices are bold and visually stronger than the title, with the "per night" text in the secondary color.

### Spacing and shape

- Page horizontal padding: about 16px on mobile, 24px at 768px, and up to 80px on wide screens.
- Card grid gap: about 16px vertical and 24px horizontal. Section gap: about 40px.
- Card photos use a rounded corner, about 12px. Cards with no border or shadow at rest.
- Photo aspect ratio: about 1:1 for listing cards, and a wide ratio (about 3:2 or 16:9) for the room gallery.
- Buttons: fully rounded pills for category chips and the search bar. Rounded 8px for the primary CTA.
- Tap targets: at least 44px tall on mobile.

### Imagery and placeholders

- Listing photo placeholders are neutral gray boxes with an icon or the first letter of the title. Dots or a counter indicate the number of photos.
- Avatars are circles with a neutral background and an initial or icon.
- Icons: a single line-icon style with a consistent stroke width (e.g. 1.5 to 2px).

### Responsive adaptation

| Element | Mobile (375px) | Tablet and desktop (768px and above) |
| --- | --- | --- |
| Navbar | Logo icon and a compact search pill. User menu on the right. | Full search bar in the center with logo on the left and menu on the right. |
| Category row | Horizontal scroll with snap, no visible scrollbar. | Same row, wider, with more categories visible. |
| Listing grid | 1 column. | 2 columns at 768px, 3 or 4 at larger widths. |
| Catalog layout | List above map (or map hidden behind a toggle). | Two columns: list on the left, sticky map on the right. |
| Room gallery | Full-width single photo with prev / next buttons and a counter. | Photo grid on the top with a "show all" action; prev / next remain available. |
| Room content | Single column. | Two columns: content on the left, sticky booking card on the right. |
| Booking card | Stacked after content. | Sticky side card. |
| Footer | Link groups stacked. | Link groups in a multi-column row. |

### Interaction notes

- Hover: cards show a subtle opacity or shadow change on desktop only. Buttons darken slightly.
- Active category: accent color with an underline or filled pill. Only one at a time.
- Focus: visible ring in the accent color for all interactive elements.
- Sort control: a native-looking select or segmented control with "Price: low to high" and "Price: high to low".
- Guest counter: minus and plus buttons; minus disabled at the minimum, plus disabled at the maximum.
