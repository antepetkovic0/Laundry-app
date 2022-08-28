export const calculateDiscountedPrice = (price, discount) => {
  const revertedDiscountForMultiply = 1 - Number(`0.${discount}`);
  console.log(revertedDiscountForMultiply);
  console.log(price * revertedDiscountForMultiply);
  return price * revertedDiscountForMultiply;
};
