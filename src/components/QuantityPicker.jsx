import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../styled/theme";

const QuantityBox = styled.div`
  background-color: ${theme.neutral.two};
  border-radius: 0.4rem;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Symbol = styled.div`
  background-color: ${theme.bg.def};
  border-radius: 0.4rem;
  padding: 0 0.8rem;
  font-weight: 700;
  color: ${theme.neutral.six};
  cursor: pointer;
`;

const Num = styled.div`
  font-weight: 500;
  color: ${theme.text.def};
`;

const AddToCart = styled.button`
  font-weight: 500;
  color: ${theme.white};
  background-color: ${theme.primary.def};
  border-radius: 0.4rem;
  padding: 0 0.4rem;
`;

const QuantityPicker = ({ isCartRelated }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <QuantityBox>
      <Symbol onClick={decreaseQuantity}>-</Symbol>
      <Num>{quantity}</Num>
      <Symbol onClick={increaseQuantity}>+</Symbol>
      <AddToCart disabled>Add to cart</AddToCart>
    </QuantityBox>
  );
};

QuantityPicker.defaultProps = {
  isCartRelated: false,
};

QuantityPicker.propTypes = {
  isCartRelated: PropTypes.bool,
};

export default QuantityPicker;
