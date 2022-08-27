import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { editProduct } from "../../../api/products";
import { EDIT_PRODUCT } from "../../../store/actions/products";
import { useLocationQuery } from "../../../hooks/useLocationQuery";
import CaretBackLink from "../../shared/navigations/CaretBackLink/CaretBackLink";
import ProductForm from "./ProductForm/ProductForm";

const EditProduct = () => {
  const { slug: shopSlug } = useParams();
  const query = useLocationQuery();
  const productSlug = query.get("productSlug");
  const history = useHistory();
  const dispatch = useDispatch();

  const shops = useSelector((state) => state.shops.list);
  const shop = shops?.find((item) => item.slug === shopSlug);

  const products = useSelector((state) => state.products?.[shop.id]?.list);
  const product = products.find((p) => p.slug === productSlug);

  const { actions } = useSelector((state) => state.ui.loader);
  const isFormSubmitting = actions.some(
    (action) => action.name === EDIT_PRODUCT
  );

  const handleSubmit = (formData) => {
    dispatch(
      editProduct(
        EDIT_PRODUCT,
        { id: product.id, shopId: shop.id, ...formData },
        history
      )
    );
  };

  return (
    <>
      <CaretBackLink
        href={`/app/shops/${shopSlug}/${productSlug}`}
        title="Edit product"
      />
      <ProductForm
        data={product}
        onSubmit={handleSubmit}
        formSubmitting={isFormSubmitting}
      />
    </>
  );
};

export default EditProduct;
