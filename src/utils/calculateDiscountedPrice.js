export const calculateDiscountedPrice = (price, discount) => {
  const revertedDiscountForMultiply = 1 - Number(`0.${discount}`);
  return price * revertedDiscountForMultiply;
};
