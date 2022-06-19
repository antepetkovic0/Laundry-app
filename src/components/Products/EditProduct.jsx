import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { editProduct } from "../../api/product";
import HeaderBackLink from "../CaretLink/HeaderBackLink";
import ProductForm from "./ProductForm";

const EditProduct = () => {
  const params = useParams();
  const { slug, productSlug } = params;

  const { list } = useSelector((state) => state.shops);
  const shop = list.find((s) => s.slug === slug);

  const products = useSelector((state) => state.products[shop.id]);
  const product = products.list.find((p) => p.slug === productSlug);
  const { actions } = useSelector((state) => state.ui.loader);

  // const targetProduct = list?.find((item) => item.slug === slug);
  // const isFormSubmitting = actions.some((action) => action.name === EDIT_SHOP);

  const dispatch = useDispatch();
  const history = useHistory();

  // useEffect(() => {
  //   if (!targetShop) {
  //     dispatch(fetchShopBySlugName(FETCH_SPECIFIC_SHOP, slug));
  //   }
  // }, [slug]);

  const handleSubmit = (formData) => {
    const productData = { ...formData, id: product.id, shopId: shop.id };
    dispatch(editProduct(productData, history));
  };

  return (
    <>
      <HeaderBackLink to="/dashboard/shops" title="Edit product" />
      <ProductForm
        data={product}
        onSubmit={handleSubmit}
        isSubmitting={false}
      />
    </>
  );
};

export default EditProduct;
