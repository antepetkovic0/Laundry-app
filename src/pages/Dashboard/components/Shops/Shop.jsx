import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../../../styled/theme";
import CaretLink from "../CaretLink";
import { TableAction, TableActionsGroup } from "../../style";
import Icon from "../../../../components/Icon/Icon";
import { DIALOG_TYPE, Roles } from "../../../../utils/constants";
import { showDialog } from "../../../../store/actions/dialog";
import DeleteDialog from "./DeleteDialog";

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

const Shop = ({ shop }) => {
  const { Role } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const handleDeleteShop = () => {
    dispatch(showDialog(DIALOG_TYPE.SHOP_DELETE, { shopId: shop.id }));
  };

  return (
    <Box>
      <ShopInfo>
        <Image>
          <img src={shop.image} alt="shop" />
        </Image>
        <Info>
          <p>{shop.name}</p>
          <p>{shop.address}</p>
        </Info>
      </ShopInfo>
      <Actions>
        <TableActionsGroup>
          {Role.title === Roles.SERVICE && (
            <>
              <TableAction>
                <Icon name="edit" />
              </TableAction>
              <TableAction onClick={handleDeleteShop}>
                <Icon name="delete" />
              </TableAction>
              <DeleteDialog />
            </>
          )}
          <CaretLink linkTo={`/dashboard/shops/${shop.slug}`} />
        </TableActionsGroup>
      </Actions>
    </Box>
  );
};

Shop.propTypes = {
  shop: PropTypes.shape.isRequired,
};

export default Shop;
