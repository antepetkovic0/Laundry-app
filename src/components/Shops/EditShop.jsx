import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useLocationQuery } from "../../hooks/useLocationQuery";
import { editShop, fetchShopBySlugName } from "../../api/shop";
import { EDIT_SHOP, FETCH_SPECIFIC_SHOP } from "../../store/actions/shops";

import HeaderBackLink from "../CaretLink/HeaderBackLink";
import ShopForm from "./ShopForm";

const EditShop = () => {
  const query = useLocationQuery();
  const slug = query.get("slug");

  const { list } = useSelector((state) => state.shops);
  const { actions } = useSelector((state) => state.ui.loader);

  const targetShop = list?.find((item) => item.slug === slug);
  const isFormSubmitting = actions.some((action) => action.name === EDIT_SHOP);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!targetShop) {
      dispatch(fetchShopBySlugName(FETCH_SPECIFIC_SHOP, slug));
    }
  }, [slug]);

  const handleSubmit = (formData) => {
    dispatch(editShop(EDIT_SHOP, { id: targetShop.id, ...formData }, history));
  };

  if (!targetShop) return <div>Nothing to find here</div>;

  return (
    <>
      <HeaderBackLink to="/dashboard/shops" title="Edit shop" />
      <ShopForm
        data={targetShop}
        onSubmit={handleSubmit}
        isSubmitting={isFormSubmitting}
      />
    </>
  );
};

export default EditShop;
