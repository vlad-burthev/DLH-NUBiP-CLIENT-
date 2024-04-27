import { createSlice } from "@reduxjs/toolkit";
import { I_User } from "../../interfaces";

interface I_InitialState {
  isAdmin: boolean;
  isLogin: boolean;
  user: I_User;
}
const initialState: I_InitialState = {
  isAdmin: false,
  isLogin: false,
  user: {
    email: null,
    role: null,
    faculty_id: null,
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setIsLogin: (state, { payload }) => {
      state.isLogin = payload;
    },
    setIsAdmin: (state, { payload }) => {
      state.isAdmin = payload;
    },
  },
});

export const { setUser, setIsLogin, setIsAdmin } = userSlice.actions;
export default userSlice.reducer;
