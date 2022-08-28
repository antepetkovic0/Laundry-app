import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import WithLoading from "../../../hocs/WithLoading";
import { fetchShops } from "../../../api/shops";
import { FETCH_SHOPS } from "../../../store/actions/shops";
import { useInput } from "../../../hooks/useInput";
import { useDebounce } from "../../../hooks/useDebounce";
import { isRequestOutdated } from "../../../utils/date";
import { ROLES } from "../../../constants/roles";
import Button from "../../core/Button/Button";
import InputField from "../../shared/fields/InputField/InputField";
import ShopList from "./ShopList/ShopList";

const Shops = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { title } = useSelector((state) => state.profile.role);
  const { list, lastFetched } = useSelector((state) => state.shops);

  const [search, { handleInputChange }] = useInput();
  const debouncedSearch = useDebounce(search, 500);

  const filteredShops = list.filter((shop) =>
    shop.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  useEffect(() => {
    if (!lastFetched || isRequestOutdated(lastFetched)) {
      dispatch(fetchShops(FETCH_SHOPS));
    }
  }, []);

  return (
    <div className="shops">
      <h2 className="shops__title">Shops</h2>
      <p className="shops__description">
        Intro message to shops page. Feel free to search all available services.
      </p>
      <div className="shops__search">
        <InputField
          value={search}
          onChange={handleInputChange}
          placeholder="Search shops by name"
          iconName="search"
        />
        {title === ROLES.SERVICE && (
          <Button
            text="Create shop"
            onClick={() => history.push("/app/shops/create")}
          />
        )}
      </div>
      <ShopList shops={filteredShops} />
    </div>
  );
};

export default WithLoading(Shops, FETCH_SHOPS);
