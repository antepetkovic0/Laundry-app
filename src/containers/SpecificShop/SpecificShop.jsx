import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchShopBySlugName } from "../../api/shop";
import HeaderBackLink from "../../components/CaretLink/HeaderBackLink";
import ShopItem from "../../components/ShopItem/ShopItem";
import { FETCH_SPECIFIC_SHOP } from "../../store/actions/shops";

const SpecificShop = () => {
  const { slug } = useParams();
  const { title } = useSelector((state) => state.profile.role);
  const { list, searchedBySlug } = useSelector((state) => state.shops);

  // const products = useSelector((state) => state.products);
  // [{ shopId: 222, products: []}]

  // { shopId: [products]}

  const targetShop = list?.find((item) => item.slug === slug);

  // const targetShopProduts = products?.[targetShop];

  const dispatch = useDispatch();

  useEffect(() => {
    if (!targetShop && !searchedBySlug) {
      dispatch(fetchShopBySlugName(FETCH_SPECIFIC_SHOP, slug));
    }

    // if (targetShop && !products) {
    //   dispatch(fetchShopProducts(FETCH_SHOP_PRODUCTS, targetShop.id));
    // }
  }, [slug]);

  if (!targetShop && searchedBySlug) return <div>No shop</div>;

  return (
    <>
      <HeaderBackLink to="/dashboard/shops" title={targetShop.name} />
      <ShopItem shop={targetShop} />
      ddd
    </>
  );

  // shop item
  // product list
};

export default SpecificShop;
