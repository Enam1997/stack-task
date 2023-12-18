import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user-auth/UserSlice";
import { usersApi } from "../feature/users-slice/usersSlice";
import userSignUpReducer from "../feature/user-auth/UserRegistrationSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    usersignup: userSignUpReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;
