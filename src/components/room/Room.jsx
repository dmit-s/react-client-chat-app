import Users from "../../features/Users/Users";
import ChatWindow from "../chatWindow/ChatWindow";
import styles from "./room.module.scss";

const Room = ({ socket }) => {
  return (
    <div className={styles.room}>
      <Users socket={socket} />
      <div className={styles.room__separator}></div>
      <ChatWindow socket={socket} />
    </div>
  );
};

export default Room;
