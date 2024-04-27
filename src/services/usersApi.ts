import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

enum User_Endpoint {
  check = "check-auth",
  login = "login",
  registration = "registration",
  delete = "delete",
}

interface I_LoginData {
  email: string;
  password: string;
}
interface I_RegData {
  email: string;
  password: string;
  facultyId: number;
}

export const usersApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/users/",
  }),
  endpoints: (builder) => ({
    checkAuthUser: builder.query<string, string>({
      query: () => {
        return {
          url: User_Endpoint.check,
          method: "GET",
          credentials: "include",
        };
      },
    }),
    loginUser: builder.mutation({
      query: (loginData: I_LoginData) => ({
        url: User_Endpoint.login,
        method: "POST",
        body: loginData,
        credentials: "include",
      }),
    }),
    registrationUser: builder.mutation({
      query: (regData: I_RegData) => ({
        url: User_Endpoint.registration,
        method: "POST",
        body: regData,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useLazyCheckAuthUserQuery,
  useLoginUserMutation,
  useRegistrationUserMutation,
} = usersApi;
