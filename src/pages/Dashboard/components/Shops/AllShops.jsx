import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../../../../styled/theme";
import { Roles } from "../../../../utils/constants";
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
  border: 0.2rem solid ${theme.primary.def};
  padding: 0.8rem;
  border-radius: 0.8rem;
  font-weight: 500;
  margin-bottom: 1.6rem;
`;

const AllShops = () => {
  const { Role } = useSelector((state) => state.profile);
  const { shops } = useSelector((state) => state.dashboard);

  return (
    <>
      {Role.title === Roles.SERVICE && (
        <Anchor to="/dashboard/shops/create">Create shop</Anchor>
      )}
      {!shops.length ? (
        <p>There is no created shops.</p>
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

export default AllShops;
