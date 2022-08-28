/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { TAG_APPEARANCE } from "../../../../constants/tagAppearance";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "../../../../store/actions/cart";
import { calculateDiscountedPrice } from "../../../../utils/calculateDiscountedPrice";
import Icon from "../../../core/Icon/Icon";
import Tag from "../../../core/Tag/Tag";

import QuantityPicker from "./QuantityPicker/QuantityPicker";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = () => {
    dispatch(decreaseProductQuantity(product.id));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseProductQuantity(product.id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={product.image} alt="Product" />
        {product.discount && (
          <div className="cart-item__discount">
            <Tag
              text={`${product.discount}%`}
              appearance={TAG_APPEARANCE.DANGER}
            />
          </div>
        )}
      </div>
      <div className="cart-item__content">
        <div className="cart-item__name">{product.name}</div>
        <div className="cart-item__price-box">
          <span className="cart-item__dollar">$</span>
          <span
            className={`cart-item__price ${
              product.discount ? "cart-item__price--old" : ""
            }`}
          >
            {product.price}
          </span>
          {product.discount && (
            <span className="cart-item__price">
              &rarr; {calculateDiscountedPrice(product.price, product.discount)}
            </span>
          )}
        </div>
        <div className="cart-item__action-box">
          <div className="cart-item__quantity">
            <QuantityPicker
              quantity={product.total}
              decreaseQuantity={handleDecreaseQuantity}
              increaseQuantity={handleIncreaseQuantity}
            />
          </div>
          <div className="cart-item__remove">
            <Icon name="delete" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
