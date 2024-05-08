import styles from "./home.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser, updateUsers } from "../../features/Users/usersSlice";
import { useEffect } from "react";
import { updateMessages } from "../../features/Messages/messagesSlice";
import getRandomUsername from "../../utils/getRandomUsername";
import getRandomAvatar from "../../utils/getRandomAvatar";

const Home = ({ socket, isConnected }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usersEvent = (users) => {
    dispatch(updateUsers({ users }));
  };

  const messagesEvent = (messages) => {
    dispatch(updateMessages({ messages }));
  };

  useEffect(() => {
    socket.connect();
    socket.on("users", usersEvent);
    socket.on("messages", messagesEvent);
  }, []);

  const handleClick = async () => {
    const avatar = await getRandomAvatar();
    const user = {
      id: socket.id,
      name: getRandomUsername(),
      avatar,
    };

    dispatch(setCurrentUser({ user }));

    socket.emit("addUser", user);

    navigate("/room");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.enter}>
        <span className={styles.enter__title}>Welcome</span>
        <button
          onClick={handleClick}
          className={styles.enter__btn}
          type="button"
          disabled={!isConnected}
        >
          ВХОД
        </button>
      </div>
    </div>
  );
};

export default Home;
