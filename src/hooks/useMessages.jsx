import { useSelector } from "react-redux";
import { selectMessages } from "../features/Messages/messagesSlice";

const useMessages = () => {
  const messages = useSelector(selectMessages);

  return messages;
};

export default useMessages;
