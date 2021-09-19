import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { breakpoint } from "../../../../styled/breakpoint";
import Back from "../../../../components/Link/Back";
import Button from "../../../../components/Button/Button";
import Create from "../Product/Create";
import ProductList from "../Product/ProductList";

const ShopBox = styled.div`
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

  const [productCreating, setProductCreating] = useState(false);

  const shop = shops.find((item) => item.slug === slug);
  // console.log("prodc", shop.products);

  const startProductCreation = () => {
    setProductCreating(true);
  };
  const finishProductCreation = () => {
    setProductCreating(false);
  };

  if (!shop) return <div>no specific shop</div>;

  return (
    <div>
      <Back to="/dashboard/shops" title="Shop info" />
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
      <ProductList products={shop.products} />
      <div style={{ textAlign: "right", marginTop: "1.6rem" }}>
        {!productCreating && (
          <Button
            type="button"
            text="Add product"
            onClick={startProductCreation}
          />
        )}
      </div>
      {productCreating && (
        <Create shopId={shop.id} closeForm={finishProductCreation} />
      )}
    </div>
  );
};

export default SpecificShop;
