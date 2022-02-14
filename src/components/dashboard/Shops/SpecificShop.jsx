import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { breakpoint } from "../../../styled/breakpoint";
import Back from "../../Link/Back";
import Button from "../../Button/Button";
import ProductForm from "../../../pages/Dashboard/components/Product/Form";
import ProductList from "../../../pages/Dashboard/components/Product/ProductList";
import { ProductFormContext } from "../../../pages/Dashboard/components/Product/ProductFormContext";
import { Roles } from "../../../utils/constants";

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
  const { Role } = useSelector((state) => state.profile);
  const { shops } = useSelector((state) => state.dashboard);

  const shop = shops.find((item) => item.slug === slug);
  if (!shop) return <div>No specific shop!</div>;

  const [productCreateOrEdit, setProductCreateOrEdit] = useState(false);
  const [productEditMode, setProductEditMode] = useState(false);
  const [productForm, setProductForm] = useState({
    name: "",
    slug: "",
    price: "",
    discount: 0,
    image: "",
    content: "",
  });

  const productFormRef = useRef();

  const contextGetter = {
    productCreateOrEdit,
    productEditMode,
    productForm,
  };

  const contextSetter = {
    setProductCreateOrEdit,
    setProductEditMode,
    setProductForm,
  };

  productFormRef.current = contextGetter;

  const startProductChange = () => {
    setProductEditMode(false);
    setProductForm({
      name: "",
      slug: "",
      price: "",
      discount: 0,
      image: "",
      content: "",
    });
    setProductCreateOrEdit(true);
  };
  const finishProductChange = () => {
    setProductCreateOrEdit(false);
  };

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
      <ProductFormContext.Provider
        value={{ ...contextGetter, ...contextSetter }}
      >
        <ProductList products={shop.products} />
        {Role.title === Roles.SERVICE && (
          <>
            <div style={{ textAlign: "right", marginTop: "1.6rem" }}>
              {!productCreateOrEdit && (
                <Button
                  type="button"
                  text="Add product"
                  onClick={startProductChange}
                />
              )}
            </div>
            {productCreateOrEdit && (
              <ProductForm
                initialState={productForm}
                shopId={shop.id}
                closeForm={finishProductChange}
                isEditMode={productEditMode}
              />
            )}
          </>
        )}
      </ProductFormContext.Provider>
    </div>
  );
};

export default SpecificShop;
