import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import WithLoading from "../../../hocs/WithLoading";
import { fetchShopBySlugName } from "../../../api/shops";
import { FETCH_SPECIFIC_SHOP } from "../../../store/actions/shops";

import ShopItem from "../../Shops/ShopItem";
import Products from "../../Products/Products";
import CaretLink from "../../CaretLink/CaretLink";
import EmptyMessage from "../../shared/messages/EmptyMessage/EmptyMessage";
import CaretBackLink from "../../shared/navigations/CaretBackLink/CaretBackLink";

const SpecificShop = () => {
  const { slug } = useParams();
  const { list } = useSelector((state) => state.shops);

  const targetShop = list?.find((item) => item.slug === slug);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!targetShop) {
      dispatch(fetchShopBySlugName(FETCH_SPECIFIC_SHOP, slug));
    }
  }, [slug]);

  if (!targetShop) return <EmptyMessage />;

  return (
    <div className="shop">
      <CaretBackLink href="/app/shops" />
      <ShopItem shop={targetShop} />
      <CaretLink linkTo={`/dashboard/shops/${slug}/create`} iconName="done" />
      <Products shopId={targetShop.id} />
    </div>
  );
};

export default WithLoading(SpecificShop, FETCH_SPECIFIC_SHOP);
