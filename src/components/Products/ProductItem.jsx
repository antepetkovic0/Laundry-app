import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../styled/theme";
import { DIALOG_TYPE, Roles } from "../../utils/constants";
import { TableAction, TableActionsGroup } from "../../pages/Dashboard/style";
import Icon from "../Icon/Icon";
import { showDialog } from "../../store/actions/dialog";
import QuantityPicker from "../../pages/Dashboard/components/Product/QuantityPicker";
import CaretLink from "../CaretLink/CaretLink";

const Box = styled.div`
  height: 20rem;
  border-radius: 0.8rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${theme.bg.def};
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.07);
`;

const ProductInfo = styled.div`
  display: flex;
  flex: 1;
`;

const InfoWrapepr = styled.div`
  display: flex;
  flex: 1;
  margin-right: 1.6rem;
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

const Num = styled.div`
  background-color: ${theme.bg.def};
  color: ${theme.gray.dark};
  border-radius: 0.4rem;
  padding: 0.4rem 1rem;
  font-weight: 500;
  margin-right: 0.4rem;
`;

const NumBox = styled.div`
  align-self: flex-end;
  padding: 0.4rem;
  border-radius: 0.8rem;
  background-color: ${theme.neutral.two};
  display: flex;
  height: fit-content;
  align-items: center;
  font-weight: 500;
`;

const NumbersWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${NumBox}:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProductItem = ({ product }) => {
  const params = useParams();
  // console.log(params);
  const { title } = useSelector((state) => state.profile.role);

  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(
      showDialog(DIALOG_TYPE.PRODUCT_DELETE, {
        productId: product.id,
        shopId: product.shopId,
      })
    );
  };

  return (
    <Box>
      <ProductInfo>
        <InfoWrapepr>
          <Image>
            <img src={product.image} alt="shop" />
          </Image>
          <Info>
            <p>{product.name}</p>
            <p>{product.content}</p>
          </Info>
        </InfoWrapepr>
        <NumbersWrapper>
          <NumBox>
            <Num>{product.price}</Num>
            kn
          </NumBox>
          <NumBox>
            <Num>{product.discount}</Num>%
          </NumBox>
        </NumbersWrapper>
      </ProductInfo>
      <Actions>
        {title === Roles.SERVICE && (
          <>
            <TableActionsGroup>
              <TableAction onClick={() => null}>
                <CaretLink
                  linkTo={`/dashboard/shops/${params.slug}/edit/${product.slug}`}
                  iconName="edit"
                />
                <CaretLink
                  linkTo={`/dashboard/shops/${params.slug}/${product.slug}`}
                  iconName="edit"
                />
              </TableAction>
              <TableAction onClick={handleDeleteProduct}>
                <Icon name="delete" />
              </TableAction>
            </TableActionsGroup>
          </>
        )}
        {title === Roles.USER && <QuantityPicker />}
      </Actions>
    </Box>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default ProductItem;
