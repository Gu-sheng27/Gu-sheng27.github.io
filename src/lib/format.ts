/** Dates read as book dates: "11 November 2026", never 11/11/26. */
const long = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const short = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

export const formatDate = (date: Date): string => long.format(date);
export const formatDateShort = (date: Date): string => short.format(date);

/** Relative-to-published label, e.g. "Updated 3 June 2026". */
export const updatedLabel = (pubDate: Date, updatedDate?: Date): string | undefined => {
  if (!updatedDate) return undefined;
  if (updatedDate.getTime() === pubDate.getTime()) return undefined;
  return `Updated ${formatDate(updatedDate)}`;
};