import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { FETCH_SHOP_PRODUCTS } from "../../store/actions/products";
import { fetchProducts } from "../../api/product";
import ProductItem from "./ProductItem";
import DeleteProductDialog from "./DeleteProductDialog";

const Products = ({ shopId }) => {
  const { list, count, lastFetched } = useSelector(
    (state) => state.products?.[shopId] ?? {}
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(FETCH_SHOP_PRODUCTS, shopId));
  }, []);

  if (!list || !list.length)
    return <p>Shop did not listed any of products yet!</p>;

  return (
    <>
      {list.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
      <DeleteProductDialog />
    </>
  );
};

Products.propTypes = {
  shopId: PropTypes.string.isRequired,
};

export default Products;
