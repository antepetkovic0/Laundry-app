import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Product from "./Product";

const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;
const List = styled.div``;

const ProductList = ({ products }) => (
  <div>
    <Title>Products</Title>
    <>
      {!products.length ? (
        <p>Shop did not listed any of products yet!</p>
      ) : (
        <List>
          {products.map((p) => (
            <Product key={p.id} product={p} />
          ))}
        </List>
      )}
    </>
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ProductList;
