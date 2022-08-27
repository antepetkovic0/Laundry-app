import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { fetchProducts } from "../../../api/products";
import { FETCH_SHOP_PRODUCTS } from "../../../store/actions/products";
import { isRequestOutdated } from "../../../utils/date";

import ProductList from "./ProductList/ProductList";

const Products = ({ shopId }) => {
  const { list, lastFetched } = useSelector(
    (state) => state.products?.[shopId] ?? {}
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isRequestOutdated(lastFetched)) {
      dispatch(fetchProducts(FETCH_SHOP_PRODUCTS, shopId));
    }
  }, []);

  return <ProductList products={list} />;
};

Products.propTypes = {
  shopId: PropTypes.string.isRequired,
};

export default Products;
