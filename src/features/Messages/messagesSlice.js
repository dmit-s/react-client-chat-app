import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, { payload }) => {
      return {
        messages: [...state.messages, payload.message],
      };
    },
    updateMessages: (_, { payload }) => {
      return {
        messages: payload.messages,
      };
    },
  },
});

// actions
export const { addMessage, updateMessages } = messagesSlice.actions;
// reducer
export const messagesReducer = messagesSlice.reducer;
// selectors
export const selectMessages = (state) => state.messages.messages;
