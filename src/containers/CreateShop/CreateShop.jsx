import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createShop } from "../../api/shop";
import { CREATE_SHOP } from "../../store/actions/shops";
import HeaderBackLink from "../../components/CaretLink/HeaderBackLink";
import ShopForm from "../../components/ShopForm/ShopForm";

const CreateShop = () => {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    address: "",
    image: "",
    about: "",
  });

  const { firstName, lastName } = useSelector((state) => state.profile);
  const { actions } = useSelector((state) => state.ui.loader);

  const isFormSubmitting = actions.some(
    (action) => action.name === CREATE_SHOP
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmitShop = () => {
    const shopData = { ...form, firstName, lastName };
    dispatch(createShop(CREATE_SHOP, shopData, history));
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <HeaderBackLink to="/dashboard/shops" title="Create shop" />
      <ShopForm
        formData={form}
        onInputChange={handleInputChange}
        onSubmit={handleSubmitShop}
        isSubmitting={isFormSubmitting}
      />
    </>
  );
};

export default CreateShop;
