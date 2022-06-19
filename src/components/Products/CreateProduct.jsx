import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HeaderBackLink from "../CaretLink/HeaderBackLink";
import ProductForm from "./ProductForm";
import { createProduct } from "../../api/product";

const CreateProduct = () => {
  const params = useParams();
  const { slug } = params;

  const shops = useSelector((state) => state.shops.list);
  const { actions } = useSelector((state) => state.ui.loader);

  const shop = shops.find((s) => s.slug === slug);

  // const isFormSubmitting = actions.some(
  //   (action) => action.name === CREATE_SHOP
  // );

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (formData) => {
    const productData = { ...formData, shopId: shop.id };
    dispatch(createProduct(productData, history, slug));
  };

  return (
    <>
      <HeaderBackLink to={`/dashboard/shops/${slug}`} title="Create product" />
      <ProductForm
        data={{
          name: "",
          slug: "",
          price: "",
          discount: "",
          image: "",
          content: "",
        }}
        onSubmit={handleSubmit}
        formSubmitting={false}
      />
    </>
  );
};

export default CreateProduct;
