import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../../../styled/theme";
import CaretLink from "../CaretLink";

const Box = styled.div`
  height: 20rem;
  border-radius: 0.8rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${theme.bg.def};
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.07);
`;

const ShopInfo = styled.div`
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

const Shop = ({ shop }) => (
  <Box>
    <ShopInfo>
      <Image>
        <img src={shop.image} alt="shop" />
      </Image>
      <Info>
        <p>{shop.name}</p>
        <p>{shop.address}</p>
        <p>{shop.about}</p>
      </Info>
    </ShopInfo>
    <Actions>
      <CaretLink linkTo={`/dashboard/shops/${shop.slug}`} />
    </Actions>
  </Box>
);

Shop.propTypes = {
  shop: PropTypes.shape.isRequired,
};

export default Shop;
