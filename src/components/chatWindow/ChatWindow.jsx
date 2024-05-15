import styles from "./chatWindow.module.scss";
import Messages from "../../features/Messages/Messages";
import Form from "../form/Form";
import { useEffect, useRef } from "react";
import useMessages from "../../hooks/useMessages";

const ChatWindow = ({ socket }) => {
  const messages = useMessages();
  const endRef = useRef(null);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.wrapper}>
      <Messages socket={socket} scrollToBottom={scrollToBottom} />
      <div className={styles.container}>
        <Form socket={socket} />
      </div>
      <div ref={endRef}></div>
    </div>
  );
};

export default ChatWindow;
