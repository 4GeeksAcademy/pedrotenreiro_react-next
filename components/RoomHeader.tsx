import { RatingStars } from "./RatingStars";

interface RoomHeaderProps {
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
}

export const RoomHeader = ({ title, location, rating, reviewCount }: RoomHeaderProps) => (
  <header className="flex flex-col gap-2">
    <h1 className="text-2xl font-semibold text-ink md:text-3xl">{title}</h1>
    <div className="flex flex-wrap items-center gap-2 text-sm text-ink">
      <RatingStars rating={rating} reviewCount={reviewCount} />
      <span aria-hidden="true" className="text-muted">·</span>
      <p className="text-muted">{location}</p>
    </div>
  </header>
);
