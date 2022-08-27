import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createProduct } from "../../../api/products";
import { CREATE_PRODUCT } from "../../../store/actions/products";
import CaretBackLink from "../../shared/navigations/CaretBackLink/CaretBackLink";
import ProductForm from "./ProductForm/ProductForm";

const CreateProduct = () => {
  const params = useParams();
  console.log(params);
  const { slug: shopSlug } = params;
  console.log("ss", shopSlug);

  const shops = useSelector((state) => state.shops.list);
  const shop = shops.find((s) => s.slug === shopSlug);

  const { actions } = useSelector((state) => state.ui.loader);
  const isFormSubmitting = actions.some(
    (action) => action.name === CREATE_PRODUCT
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (formData) => {
    const productData = { ...formData, shopId: shop.id };
    dispatch(createProduct(productData, history, shopSlug));
  };

  return (
    <div className="create-product">
      <CaretBackLink href={`/app/shops/${shopSlug}`} title="Create product" />
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
        formSubmitting={isFormSubmitting}
      />
    </div>
  );
};

export default CreateProduct;
