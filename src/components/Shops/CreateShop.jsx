import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createShop } from "../../api/shop";
import { CREATE_SHOP } from "../../store/actions/shops";

import HeaderBackLink from "../CaretLink/HeaderBackLink";
import ShopForm from "./ShopForm";

const CreateShop = () => {
  const { firstName, lastName } = useSelector((state) => state.profile);
  const { actions } = useSelector((state) => state.ui.loader);

  const isFormSubmitting = actions.some(
    (action) => action.name === CREATE_SHOP
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (formData) => {
    const shopData = { ...formData, firstName, lastName };
    dispatch(createShop(CREATE_SHOP, shopData, history));
  };

  return (
    <>
      <HeaderBackLink to="/dashboard/shops" title="Create shop" />
      <ShopForm
        data={{ name: "", slug: "", address: "", image: "", about: "" }}
        onSubmit={handleSubmit}
        formSubmitting={isFormSubmitting}
      />
    </>
  );
};

export default CreateShop;
