export const isoToLocaleDate = (date, locale = "en-US") =>
  new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const isRequestOutdated = (time) => {
  if (!time) return true;
  const currentTime = new Date().getTime();
  return currentTime >= time + 5 * 60000;
};
