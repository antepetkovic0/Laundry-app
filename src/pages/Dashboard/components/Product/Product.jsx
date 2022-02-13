import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../../../styled/theme";
import { DIALOG_TYPE, Roles } from "../../../../utils/constants";
import { TableAction, TableActionsGroup } from "../../style";
import Icon from "../../../../components/Icon/Icon";
import DeleteDialog from "./DeleteDialog";
import { showDialog } from "../../../../store/actions/dialog";
import { ProductFormContext } from "./ProductFormContext";
import QuantityPicker from "./QuantityPicker";

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

const Product = ({ product }) => {
  const { profile } = useSelector((state) => state);
  const { setProductCreateOrEdit, setProductEditMode, setProductForm } =
    useContext(ProductFormContext);

  const dispatch = useDispatch();

  const handleEditProduct = () => {
    setProductCreateOrEdit(true);
    setProductEditMode(true);
    setProductForm({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      discount: product.discount,
      image: product.image,
      content: product.content,
    });
  };

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
        {profile.Role.title === Roles.SERVICE && (
          <>
            <TableActionsGroup>
              <TableAction onClick={handleEditProduct}>
                <Icon name="edit" />
              </TableAction>
              <TableAction onClick={handleDeleteProduct}>
                <Icon name="delete" />
              </TableAction>
            </TableActionsGroup>
            <DeleteDialog />
          </>
        )}
        {profile.Role.title === Roles.USER && <QuantityPicker />}
      </Actions>
    </Box>
  );
};

Product.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default Product;
