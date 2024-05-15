import { useDispatch, useSelector } from "react-redux";
import MessagesItem from "./components/messagesItem/MessagesItem";
import styles from "./messages.module.scss";
import { addMessage } from "./messagesSlice";
import { useEffect } from "react";
import { selectCurrentUser } from "../Users/usersSlice";
import useMessages from "../../hooks/useMessages";

const Messages = ({ socket, scrollToBottom }) => {
  const dispatch = useDispatch();
  const messages = useMessages();
  const currentUser = useSelector(selectCurrentUser);

  const newMessageEvent = (message) => dispatch(addMessage({ message }));

  useEffect(() => {
    socket.on("newMessage", newMessageEvent);

    return () => {
      socket.off("newMessage", newMessageEvent);
    };
  }, []);

  return (
    <div className={styles.messages}>
      {messages.map((item, index) => (
        <MessagesItem
          key={index}
          {...item}
          currentUser={currentUser}
          socket={socket}
          scrollToBottom={scrollToBottom}
        />
      ))}
    </div>
  );
};

export default Messages;
