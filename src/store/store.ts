import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { usersApi } from "../services/usersApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
