interface PriceSummaryProps {
  pricePerNight: number;
  nights: number;
}

export const PriceSummary = ({ pricePerNight, nights }: PriceSummaryProps) => {
  if (nights === 0) {
    return <p className="text-sm text-muted">Select your dates to see the total.</p>;
  }

  return (
    <div className="flex items-center justify-between text-sm text-ink">
      <span>
        €{pricePerNight} × {nights} {nights === 1 ? "night" : "nights"}
      </span>
      <span className="font-semibold">€{pricePerNight * nights}</span>
    </div>
  );
};
