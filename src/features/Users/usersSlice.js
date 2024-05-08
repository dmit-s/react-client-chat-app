import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    id: null,
    name: null,
    avatar: null,
  },
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, { payload }) => {
      return {
        ...state,
        users: [...state.users, payload.user],
      };
    },

    setCurrentUser: (state, { payload }) => {
      return {
        ...state,
        currentUser: payload.user,
      };
    },
    updateUsers: (state, { payload }) => {
      return {
        ...state,
        users: payload.users,
      };
    },

    reset: () => {
      return initialState;
    },

    removeUser: (state, { payload }) => {
      return {
        ...state,
        users: state.users.filter((u) => u.id !== payload.id),
      };
    },
  },
});

// actions
export const { addNewUser, setCurrentUser, updateUsers, removeUser, reset } =
  usersSlice.actions;
// reducer
export const usersReducer = usersSlice.reducer;
// selectors
export const selectCurrentUser = (state) => state.users.currentUser;
export const selectUsers = (state) => state.users.users;
export const selectCountUsers = (state) => state.users.users.length;
