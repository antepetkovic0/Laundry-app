import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../styled/theme";
import { Roles } from "../../../../utils/constants";
import CaretLink from "../CaretLink";
import Shop from "./Shop";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 12px;
`;

const Anchor = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  background-color: ${theme.bg.def};
  border: 0.2rem dotted ${theme.gray.dark};
  padding: 0.8rem;
  border-radius: 0.8rem;
`;

const ShopList = () => {
  const { Role } = useSelector((state) => state.profile);
  const { shops } = useSelector((state) => state.dashboard);

  return (
    <>
      {Role.title === Roles.SERVICE && (
        <Anchor to="/dashboard/shops/create">Create shop</Anchor>
      )}
      {!shops ? (
        <p style={{ textAlign: "center" }}>
          There are no attachments on selected page
        </p>
      ) : (
        <List>
          {shops.map((shop) => (
            <Shop key={shop.id} shop={shop} />
          ))}
        </List>
      )}
    </>
  );
};

// ShopList.propTypes = {
//   shops: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default ShopList;
