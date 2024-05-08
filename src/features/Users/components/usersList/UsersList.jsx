import useUsers from "../../../../hooks/useUsers";
import UsersListItem from "./UsersListItem";
import styles from "./usersList.module.scss";

const UsersList = ({ socket }) => {
  const users = useUsers();

  return (
    <ul className={styles.list}>
      {users?.map((u) => (
        <UsersListItem id={u.id} key={u.id} {...u} socket={socket} />
      ))}
    </ul>
  );
};

export default UsersList;
