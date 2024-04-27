import { store } from "../store/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export enum UserRole {
  user = "user",
  admin = "admin",
}

export interface I_User {
  email: string | null;
  role: UserRole | null;
  faculty_id: number | null;
}
