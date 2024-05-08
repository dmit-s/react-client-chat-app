import styles from "./chatWindow.module.scss";
import Messages from "../../features/Messages/Messages";
import Form from "../form/Form";
import { useEffect, useRef } from "react";
import useMessages from "../../hooks/useMessages";

const ChatWindow = ({ socket }) => {
  const messages = useMessages();
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
  }, [messages]);

  return (
    <div className={styles.wrapper}>
      <Messages socket={socket} />
      <div className={styles.container}>
        <Form socket={socket} />
      </div>
      <div ref={ref}></div>
    </div>
  );
};

export default ChatWindow;
