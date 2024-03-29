import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import AnchorLink from "../../../core/AnchorLink/AnchorLink";
import Icon from "../../../core/Icon/Icon";

const ProductCard = ({ product }) => {
  const { slug } = useParams();

  return (
    <div className="product-card">
      <div className="product-card__image-box">
        <AnchorLink href={`/app/shops/${slug}/${product.slug}`}>
          <img
            className="product-card__image"
            src={product.image}
            alt="Product"
          />
        </AnchorLink>
      </div>
      <div className="product-card__content">
        <div className="product-card__description">
          <div className="product-card__name">{product.name}</div>
          <h3 className="product-card__price">{product.price}$</h3>
        </div>
        <div className="product-card__cart action-icon-item">
          <Icon name="shopping_cart" />
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
