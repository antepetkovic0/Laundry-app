import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { ROLES } from "../../../../constants/roles";
import AnchorLink from "../../../core/AnchorLink/AnchorLink";
import Icon from "../../../core/Icon/Icon";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products }) => {
  const { slug: shopSlug } = useParams();
  const { title } = useSelector((state) => state.profile.role);

  return (
    <div className="products">
      <h3>Products</h3>
      {!products ||
        (!products.length && <p>Shop did not listed any products yet...</p>)}
      <div className="product-list">
        {products?.map((product) => (
          <ProductCard product={product} />
        ))}
        {title === ROLES.SERVICE && (
          <AnchorLink href={`/app/shops/${shopSlug}/create`}>
            <div className="product-card product-card--create-new">
              <Icon name="done" />
              <p>Create new product</p>
            </div>
          </AnchorLink>
        )}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

export default ProductList;
