import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user-auth/UserSlice";
import { usersApi } from "../feature/users-slice/usersSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;
