import { useEffect } from "react";
import UsersCounter from "./components/usersCounter/UsersCounter";
import UsersList from "./components/usersList/UsersList";
import styles from "./users.module.scss";
import { useDispatch } from "react-redux";
import { addNewUser, removeUser } from "./usersSlice";

const Users = ({ socket }) => {
  const dispatch = useDispatch();

  const leaveUserEvent = (leaveUserId) => {
    dispatch(removeUser({ id: leaveUserId }));
  };

  const newUserEvent = (user) => {
    dispatch(addNewUser({ user }));
  };

  useEffect(() => {
    socket.on("leaveUser", leaveUserEvent);
    socket.on("newUser", newUserEvent);

    return () => {
      socket.off("leaveUser", leaveUserEvent);
      socket.off("newUser", newUserEvent);
    };
  }, []);

  return (
    <div className={styles.users}>
      <UsersCounter />
      <UsersList socket={socket} />
    </div>
  );
};

export default Users;
