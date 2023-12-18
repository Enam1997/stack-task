import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user-auth/UserSlice";

const store = configureStore({
    reducer:{
        user: userReducer
    }
});

export default store;