import { Icon } from "./Icon";

interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
}

export const RatingStars = ({ rating, reviewCount }: RatingStarsProps) => (
  <p className="flex items-center gap-1 text-sm text-ink">
    <Icon name="star" filled className="h-3.5 w-3.5" />
    <span className="font-medium">{rating.toFixed(2)}</span>
    {reviewCount !== undefined && (
      <span className="text-muted">({reviewCount})</span>
    )}
  </p>
);
