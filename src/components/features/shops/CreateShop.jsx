import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createShop } from "../../../api/shops";
import { CREATE_SHOP } from "../../../store/actions/shops";

import ShopForm from "./ShopForm/ShopForm";
import CaretBackLink from "../../shared/navigations/CaretBackLink/CaretBackLink";

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
    <div className="create-shop">
      <CaretBackLink href="/app/shops" title="Create shop" />
      <ShopForm
        data={{ name: "", slug: "", address: "", image: "", about: "" }}
        onSubmit={handleSubmit}
        formSubmitting={isFormSubmitting}
      />
    </div>
  );
};

export default CreateShop;
