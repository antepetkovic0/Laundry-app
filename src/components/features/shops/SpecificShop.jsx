import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import WithLoading from "../../../hocs/WithLoading";
import { fetchShopBySlugName } from "../../../api/shops";
import { FETCH_SPECIFIC_SHOP } from "../../../store/actions/shops";

import EmptyMessage from "../../shared/messages/EmptyMessage/EmptyMessage";
import CaretBackLink from "../../shared/navigations/CaretBackLink/CaretBackLink";
import Products from "../products/Products";

const SpecificShop = () => {
  const { slug } = useParams();
  const { list } = useSelector((state) => state.shops);

  const shop = list?.find((item) => item.slug === slug);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!shop) {
      dispatch(fetchShopBySlugName(FETCH_SPECIFIC_SHOP, slug));
    }
  }, [slug]);

  if (!shop) return <EmptyMessage />;

  return (
    <div className="shop">
      <CaretBackLink href="/app/shops" title={shop.name} />
      <div className="shop__image-box">
        <img
          className="shop__image"
          src={shop.image}
          alt="Shop"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/8/8e/Shop.svg";
          }}
        />
      </div>
      <p>
        Address: <span>{shop.address}</span>
      </p>
      <p>
        About: <span>{shop.about}</span>
      </p>
      <Products shopId={shop.id} />
    </div>
  );
};

export default WithLoading(SpecificShop, FETCH_SPECIFIC_SHOP);
