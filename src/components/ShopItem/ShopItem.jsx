import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoint } from "../../styled/breakpoint";

const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoint.tablet} {
    flex-direction: row;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-height: 15rem;
    max-width: 30rem;
  }
`;

const Info = styled.div`
  margin: 3rem 0 0 0;
  @media ${breakpoint.tablet} {
    margin: 0 0 0 3rem;
  }
`;

const ShopItem = ({ shop }) => {
  console.log("sho", shop);
  const { image, name, address, about } = shop;

  return (
    <div>
      {/* <Back to="/dashboard/shops" title="Shop info" /> */}
      <ShopContainer>
        <Image>
          <img
            src={image}
            alt="shop"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://upload.wikimedia.org/wikipedia/commons/8/8e/Shop.svg";
            }}
          />
        </Image>
        <Info>
          <h1>{name}</h1>
          <h3>
            Address: <span>{address}</span>
          </h3>
          <p>
            About: <span>{about}</span>
          </p>
        </Info>
      </ShopContainer>
    </div>
  );
};

ShopItem.propTypes = {
  shop: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
};

export default ShopItem;
