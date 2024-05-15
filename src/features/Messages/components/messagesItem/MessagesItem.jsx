import { useEffect, useRef, useState } from "react";
import styles from "./messagesItem.module.scss";
import base64ToImage from "../../../../utils/base64ToImage";

const MessagesItem = ({
  message: { text, pic },
  sender: { id, name, avatar },
  socket,
  scrollToBottom,
}) => {
  const [image, setImage] = useState();

  useEffect(() => {
    pic && base64ToImage(pic).then((res) => setImage(res));
  }, []);

  return (
    <div className={styles.message}>
      <div className={styles.message__userInfo}>
        <div className={styles.message__userImg}>
          <img src={avatar} alt={name} />
        </div>
        <span className={styles.message__name}>{name}</span>
      </div>
      <div
        className={`${styles.message__body} ${
          socket.id === id ? styles.you : ""
        }`}
      >
        {text && <div className={styles.message__text}>{text}</div>}
        {pic && (
          <div className={styles.message__image}>
            {image && (
              <img src={image.src} alt="some image" onLoad={scrollToBottom} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesItem;
