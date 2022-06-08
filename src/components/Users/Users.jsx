import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../api/user";
import { FETCH_USERS } from "../../store/actions/users";
import WithLoading from "../../hocs/WithLoading";
import Input from "../Input/Input";
import UserList from "./UserList";
import { isRequestOutdated } from "../../utils/date";

const Users = () => {
  const { list, lastFetched } = useSelector((state) => state.users);

  const [query, setQuery] = useState("");
  // todo: filter by roles
  const [filterByRole, setFilterByRole] = useState("ALL");

  const filteredUsers = list.filter(
    (user) => user.firstName.includes(query) || user.lastName.includes(query)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!lastFetched || isRequestOutdated(lastFetched)) {
      dispatch(fetchUsers(FETCH_USERS));
    }
  }, []);

  return (
    <>
      <h2>Users</h2>
      <p>Intro message to users page. Feel free to search all users.</p>
      <div style={{ display: "flex" }}>
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search shops by name"
          iconName="search"
        />
        <div>filter</div>
      </div>
      <UserList users={filteredUsers} />
    </>
  );
};

export default WithLoading(Users, FETCH_USERS);
