import { useDispatch, useSelector } from "react-redux";

import {
  fetchUsersRequest
} from "../redux/actions/userActions";

const UserList = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const loadUsers = () => {
    dispatch(fetchUsersRequest());
  };

  return (
    <div>
      <h1>User Directory</h1>

      <button onClick={loadUsers}>
        Load Users
      </button>

      {loading && <p>Loading...</p>}

      {error && (
        <p>Error: {error}</p>
      )}

      {users.map((user) => (
        <div key={user.id}>
          <h3>
            {user.firstName} {user.lastName}
          </h3>

          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;