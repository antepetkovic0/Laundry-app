export const getComputedFontSize = () => {
  const size = window.getComputedStyle(document.getElementsByTagName("html")[0])
    .fontSize;

  const woPX = size.slice(0, -2);
  return Number(woPX);
};
