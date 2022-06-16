import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../styled/theme";
import { Roles } from "../../utils/constants";
import Icon from "../Icon/Icon";
import DeleteShop from "./DeleteShop";
import CaretLink from "../CaretLink/CaretLink";
import { isRequestOutdated } from "../../utils/date";
import { fetchShops } from "../../api/shop";
import { FETCH_SHOPS } from "../../store/actions/shops";
import WithLoading from "../../hocs/WithLoading";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 12px;
`;

const CardContainer = styled.div`
  height: 20rem;
  border-radius: 0.8rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${theme.bg.def};
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.07);
`;

const Content = styled.div`
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

export const ActionGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const ActionItem = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: ${theme.neutral.two};
  fill: ${theme.text.alt};
  border-radius: 0.4rem;

  &:hover {
    background-color: ${theme.neutral.three};
  }

  transition: all 0.2s;
`;

const ShopList = ({ search }) => {
  const { list, lastFetched } = useSelector((state) => state.shops);
  const { title } = useSelector((state) => state.profile.role);

  const filteredList = list.filter((shop) => shop.name.includes(search));

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!lastFetched || isRequestOutdated(lastFetched)) {
      dispatch(fetchShops(FETCH_SHOPS));
    }
  }, []);

  if (!list.length) return <p>There is no created shops.</p>;

  return (
    <>
      <ListContainer>
        {filteredList.map((shop) => (
          <CardContainer key={shop.id}>
            <Content>
              <Image>
                <img src={shop.image} alt="Shop" />
              </Image>
              <Info>
                <p>{shop.name}</p>
                <p>{shop.address}</p>
              </Info>
            </Content>
            <Actions>
              <ActionGroup>
                {title === Roles.SERVICE && (
                  <>
                    <ActionItem>
                      <CaretLink
                        linkTo={`/dashboard/shops/edit?slug=${shop.slug}`}
                        iconName="edit"
                      />
                    </ActionItem>
                    <ActionItem onClick={() => null}>
                      <Icon name="delete" />
                    </ActionItem>
                  </>
                )}
                <CaretLink linkTo={`/dashboard/shops/${shop.slug}`} />
              </ActionGroup>
            </Actions>
          </CardContainer>
        ))}
      </ListContainer>
      {title === Roles.SERVICE && <DeleteShop />}
    </>
  );
};

// ShopList.defaultProps = {
//   shops: null,
// };

ShopList.propTypes = {
  // shops: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     name: PropTypes.string,
  //   })
  // ),
  // onDeleteShop: PropTypes.func.isRequired,
  // roleTitle: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};

export default WithLoading(ShopList, FETCH_SHOPS);
