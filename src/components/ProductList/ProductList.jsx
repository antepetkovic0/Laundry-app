import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../styled/theme";
import { Roles } from "../../utils/constants";
import Icon from "../Icon/Icon";
import DeleteShop from "../../containers/DeleteShop/DeleteShop";
import CaretLink from "../CaretLink/CaretLink";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 12px;
`;

const CardContainer = styled.div`
  height: 20rem;
  border-radius: 0.8rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${theme.bg.def};
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.07);
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Image = styled.div`
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 0.8rem;
  }
`;

const Info = styled.div`
  margin: 0 1rem;
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p:first-child {
    font-weight: 700;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ActionGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const ActionItem = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: ${theme.neutral.two};
  fill: ${theme.text.alt};
  border-radius: 0.4rem;

  &:hover {
    background-color: ${theme.neutral.three};
  }

  transition: all 0.2s;
`;

const ProductList = ({ products, roleTitle }) => {
  const renderProductsList = () => {};

  if (!shops.length) return <p>There is no created shops.</p>;

  return (
    <>
      <h3>Products</h3>
      <ListContainer>
        {products.length ? (
          products.map((product) => (
            <ProductItem key={shop.id} product={product} />
          ))
        ) : (
          <div>Shop does not contain any products</div>
        )}
      </ListContainer>
      {roleTitle === Roles.SERVICE && <DeleteShop />}
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
  roleTitle: PropTypes.string.isRequired,
  onDeleteShop: PropTypes.func.isRequired,
};

export default ProductList;
