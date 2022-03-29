import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchShops } from "../../../api/shop";

import { theme } from "../../../styled/theme";
import { Roles } from "../../../utils/constants";
import Input from "../../Input/Input";
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
  border-radius: 4px;
  font-weight: 500;
  margin-left: 0.8rem;
  /* margin: 1.6rem 0; */
`;

const SearchContainer = styled.div`
  display: flex;
  margin: 1.6rem 0;

  & > div:first-child {
    margin-bottom: 0;
    flex: 1;
  }
`;

const AllShops = () => {
  const { role } = useSelector((state) => state.profile);
  const { list, loading, error } = useSelector((state) => state.shops);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!list.length) {
      dispatch(fetchShops());
    }
  }, []);

  if (error) return <div>{error}</div>;

  if (loading) return <div className="loader" />;

  return (
    <>
      <h2>Shops</h2>
      <p>
        Intro message to shops page. Feel free to search all available services.
      </p>
      <SearchContainer>
        <Input placeholder="Search shops" iconName="search" />
        {role.title === Roles.SERVICE && (
          <Anchor to="/dashboard/shops/create">Create shop</Anchor>
        )}
      </SearchContainer>

      {!list.length ? (
        <p>There is no created shops.</p>
      ) : (
        <List>
          {list.map((shop) => (
            <Shop key={shop.id} shop={shop} />
          ))}
        </List>
      )}
    </>
  );
};

export default AllShops;
