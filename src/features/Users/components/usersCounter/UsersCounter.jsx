import { useSelector } from "react-redux";
import styles from "./usersCounter.module.scss";
import { selectCountUsers } from "../../usersSlice";

const UsersCounter = () => {
  const count = useSelector(selectCountUsers);

  return (
    <span className={styles.wrapper}>
      Users: <span>{count}</span>
    </span>
  );
};

export default UsersCounter;
