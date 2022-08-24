import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import WithLoading from "../../../hocs/WithLoading";
import { fetchUsers } from "../../../api/users";
import { FETCH_USERS } from "../../../store/actions/users";
import { useDebounce } from "../../../hooks/useDebounce";
import { useInput } from "../../../hooks/useInput";
import { isRequestOutdated } from "../../../utils/date";
import InputField from "../../shared/fields/InputField/InputField";
import UserList from "./UserList/UserList";

const Users = () => {
  const dispatch = useDispatch();
  const { list, lastFetched } = useSelector((state) => state.users);

  const [search, { handleInputChange }] = useInput();
  const debouncedSearch = useDebounce(search, 500);

  const filteredUsers = list.filter(
    (user) =>
      user.firstName.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      user.lastName.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  useEffect(() => {
    if (!lastFetched || isRequestOutdated(lastFetched)) {
      dispatch(fetchUsers(FETCH_USERS));
    }
  }, []);

  return (
    <div className="users">
      <h2 className="users__title">Users</h2>
      <p className="users__description">
        Intro message to users page. Feel free to search all users.
      </p>
      <div className="users__search">
        <InputField
          value={search}
          onChange={handleInputChange}
          placeholder="Search users by name"
          iconName="search"
        />
      </div>
      <UserList users={filteredUsers} />
    </div>
  );
};

// export default Users;
export default WithLoading(Users, FETCH_USERS);
