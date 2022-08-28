import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { calculateDiscountedPrice } from "../../../utils/calculateDiscountedPrice";
import Button from "../../core/Button/Button";
import EmptyMessage from "../../shared/messages/EmptyMessage/EmptyMessage";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("rendered");

  const subTotal = useMemo(() => {
    if (!cart.length) return 0;

    const sumTotal = cart.reduce(
      (sum, product) =>
        sum +
        product.total *
          calculateDiscountedPrice(product.price, product.discount),
      0
    );

    return sumTotal.toFixed(2);
  }, [cart]);

  return (
    <>
      <h3>Cart</h3>
      <>
        {cart.length ? (
          <>
            <div className="cart-list">
              {cart.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
            <div className="pricing-box">
              <div className="row">
                <div className="row__label">Sub Total</div>
                <div className="row__amount">
                  <span className="row__amount-prefix">$</span>
                  <span>{subTotal}</span>
                </div>
              </div>
              <div className="row">
                <div className="row__label">Shipping</div>
                <div className="row__amount">
                  <span className="row__amount-prefix">$</span>
                  <span>10.00</span>
                </div>
              </div>
              <div className="row">
                <div className="row__label">Tax</div>
                <div className="row__amount">
                  <span className="row__amount-prefix">%</span>
                  <span>25</span>
                </div>
              </div>
              <div className="row">
                <div className="row__label">Total</div>
                <div className="row__amount">
                  <span className="row__amount-prefix">$</span>
                  <span>
                    {(
                      parseFloat(subTotal) +
                      10 +
                      parseFloat(subTotal) * 0.25
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <Button text="Make order" fullWidth />
          </>
        ) : (
          <EmptyMessage />
        )}
      </>
    </>
  );
};

export default Cart;
