import styles from "./usersListItem.module.scss";

const UsersListItem = ({ id, name, avatar, socket }) => {
  return (
    <li className={styles.item}>
      {socket.id === id && <small className={styles.item__symbol}>you</small>}
      <div className={styles.item__avatar}>
        <img src={avatar} alt={name} />
      </div>
      <span className={styles.item__name}>{name}</span>
    </li>
  );
};

export default UsersListItem;
