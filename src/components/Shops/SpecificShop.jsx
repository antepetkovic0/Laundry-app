import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import WithLoading from "../../hocs/WithLoading";
import { fetchShopBySlugName } from "../../api/shop";
import { FETCH_SPECIFIC_SHOP } from "../../store/actions/shops";

import HeaderBackLink from "../CaretLink/HeaderBackLink";
import ShopItem from "./ShopItem";
import Products from "../Products/Products";
import CaretLink from "../CaretLink/CaretLink";

const SpecificShop = () => {
  const { slug } = useParams();
  const { list, searchedBySlug } = useSelector((state) => state.shops);

  const targetShop = list?.find((item) => item.slug === slug);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!targetShop && !searchedBySlug) {
      dispatch(fetchShopBySlugName(FETCH_SPECIFIC_SHOP, slug));
    }
  }, [slug]);

  if (!targetShop) return <div>No shop!</div>;

  return (
    <>
      <HeaderBackLink to="/dashboard/shops" title={targetShop.name} />
      <ShopItem shop={targetShop} />
      <CaretLink linkTo={`/dashboard/shops/${slug}/create`} iconName="done" />
      <Products shopId={targetShop.id} />
    </>
  );
};

export default WithLoading(SpecificShop, FETCH_SPECIFIC_SHOP);
