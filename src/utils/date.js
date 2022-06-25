/* eslint-disable arrow-body-style */
export const isoToLocaleDate = (date, locale = "en-US") => {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const isRequestOutdated = (time) => {
  if (!time) return true;
  const currentTime = new Date().getTime();
  return currentTime >= time + 1 * 60000;
};
