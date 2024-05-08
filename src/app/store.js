import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../features/Users/usersSlice";
import { messagesReducer } from "../features/Messages/messagesSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    messages: messagesReducer,
  },
});
