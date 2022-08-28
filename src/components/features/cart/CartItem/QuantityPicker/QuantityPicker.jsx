import React from "react";
import PropTypes from "prop-types";

import Icon from "../../../../core/Icon/Icon";

const QuantityPicker = ({ quantity, increaseQuantity, decreaseQuantity }) => (
  <div className="quantity-picker">
    <div
      className="quantity-picker__icon"
      role="button"
      tabIndex="0"
      onClick={decreaseQuantity}
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          decreaseQuantity();
        }
      }}
    >
      <Icon name="lock" size={16} />
    </div>
    <div className="quantity-picker__number">{quantity}</div>
    <div
      className="quantity-picker__icon"
      role="button"
      tabIndex="0"
      onClick={increaseQuantity}
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          increaseQuantity();
        }
      }}
    >
      <Icon name="done" size={16} />
    </div>
  </div>
);

QuantityPicker.propTypes = {
  quantity: PropTypes.number.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
};

export default QuantityPicker;
