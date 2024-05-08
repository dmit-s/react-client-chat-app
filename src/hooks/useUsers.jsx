import { useSelector } from "react-redux";
import { selectUsers } from "../features/Users/usersSlice";

const useUsers = () => {
  const users = useSelector(selectUsers);

  return users;
};

export default useUsers;
