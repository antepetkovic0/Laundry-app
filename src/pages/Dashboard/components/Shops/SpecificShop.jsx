import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Back from "../../../../components/Link/Back";
import { breakpoint } from "../../../../styled/breakpoint";

const ShopBox = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakpoint.tablet} {
    flex-direction: row;
  }
`;

const Image = styled.div`
  display: flex;
  /* width: -webkit-fill-available; */
  justify-content: center;

  img {
    width: 100%;
    max-width: 30rem;
  }
`;

const Info = styled.div`
  margin: 3rem 0 0 0;
  @media ${breakpoint.tablet} {
    margin: 0 0 0 3rem;
  }
`;

const SpecificShop = () => {
  const { slug } = useParams();
  const { shops } = useSelector((state) => state.dashboard);
  console.log("shop slug", slug);
  const shop = shops.find((item) => item.slug === slug);

  if (!shop) return <div>no specific shop</div>;

  return (
    <div>
      <Back to="/dashboard/shops" title={`Shop ${shop.name}`} />
      <ShopBox>
        <Image>
          <img src={shop.image} alt={shop.slug} />
        </Image>
        <Info>
          <h1>{shop.name}</h1>
          <h3>
            Address: <span>{shop.address}</span>
          </h3>
          <p>
            About: <span>{shop.about}</span>
          </p>
        </Info>
      </ShopBox>
    </div>
  );
};

export default SpecificShop;
