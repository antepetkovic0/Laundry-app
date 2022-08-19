import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../api/users";
import { FETCH_USERS } from "../../../store/actions/users";
import WithLoading from "../../../hocs/WithLoading";
import Input from "../../Input/Input";
import UserList from "./UserList/UserList";
import { isRequestOutdated } from "../../../utils/date";
import { useDebounce } from "../../../hooks/useDebounce";

const Users = () => {
  const { list, lastFetched } = useSelector((state) => state.users);

  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  const filteredUsers = list.filter(
    (user) =>
      user.firstName.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  const dispatch = useDispatch();

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
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search users by name"
          iconName="search"
        />
      </div>
      <UserList users={filteredUsers} />
    </div>
  );
};

export default WithLoading(Users, FETCH_USERS);
