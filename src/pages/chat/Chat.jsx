import styles from "./chat.module.scss";
import Header from "../../components/header/Header";
import Room from "../../components/room/Room";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset, selectCurrentUser } from "../../features/Users/usersSlice";

const Chat = ({ socket }) => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectCurrentUser);

  useEffect(() => {
    return () => {
      dispatch(reset());
      socket.disconnect();
    };
  }, []);

  if (!name) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <Room socket={socket} />
    </div>
  );
};

export default Chat;
