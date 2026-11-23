const DAY_MS = 24 * 60 * 60 * 1000;

export const countNights = (checkIn: string, checkOut: string): number => {
  if (!checkIn || !checkOut) return 0;
  const nights = Math.round((Date.parse(checkOut) - Date.parse(checkIn)) / DAY_MS);
  return Math.max(nights, 0);
};

export const addDays = (date: string, days: number): string =>
  new Date(Date.parse(date) + days * DAY_MS).toISOString().slice(0, 10);
