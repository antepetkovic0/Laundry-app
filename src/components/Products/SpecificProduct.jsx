/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchShopBySlugName } from "../../api/shop";
import { FETCH_SPECIFIC_SHOP } from "../../store/actions/shops";

import HeaderBackLink from "../CaretLink/HeaderBackLink";
import CaretLink from "../CaretLink/CaretLink";
import Button from "../core/Button/Button";
import Icon from "../Icon/Icon";
import { addProductToCart } from "../../store/actions/cart";

const SpecificProduct = () => {
  const params = useParams();
  const { slug, productSlug } = params;
  console.log("slug in prod", params);
  const { list, searchedBySlug } = useSelector((state) => state.shops);
  const targetShop = list?.find((item) => item.slug === slug);
  const { list: products } = useSelector(
    (state) => state.products?.[targetShop.id]
  );

  const product = products.find((p) => p.slug === productSlug);
  console.log(product);

  const productAlreadyInCart = useSelector((state) => state.cart?.[product.id]);

  const dispatch = useDispatch();

  const handleAddProductToCart = () => {
    dispatch(addProductToCart(product.id));
  };

  // useEffect(() => {
  //   if (!targetShop && !searchedBySlug) {
  //     dispatch(fetchShopBySlugName(FETCH_SPECIFIC_SHOP, slug));
  //   }
  // }, [slug]);

  // if (!targetShop) return <div>No shop!</div>;

  return (
    <div className="product">
      <HeaderBackLink
        to="/dashboard/shops"
        title="Shop"
        renderActionIcon={() => (
          <div onClick={() => console.log("clicked")}>
            <CaretLink linkTo="#" iconName="shopping_cart" />
            {/* <Icon name="shopping_cart" /> */}
          </div>
        )}
      />
      <div className="product__image">
        <img src={product.image} alt="product" />
      </div>
      <div className="general">
        <div className="general__name">{product.name}</div>
        <div className="general__discount">Save {product.discount}%</div>
      </div>
      <div className="details">
        <div className="details__title">About</div>
        <div className="details__content">{product.content}</div>
      </div>
      <div className="product__footer">
        <div className="price">
          <div className="price__currency">HRK</div>
          <div className="price__amount">{product.price}</div>
        </div>
        <Button
          text="Add to cart"
          onClick={handleAddProductToCart}
          isDisabled={productAlreadyInCart}
        />
      </div>
    </div>
  );
};

export default SpecificProduct;
