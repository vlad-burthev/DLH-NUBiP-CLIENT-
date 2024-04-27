import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import { usersApi } from "../services/usersApi";

export const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  user: userSlice,
});
