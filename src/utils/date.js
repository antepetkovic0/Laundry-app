/* eslint-disable arrow-body-style */
export const isoToLocaleDate = (date, locale = "en-US") => {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
