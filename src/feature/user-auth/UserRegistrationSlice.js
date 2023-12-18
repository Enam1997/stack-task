import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (userCredential) => {
    const request = await axios.post(
      `https://reqres.in/api/register`,
      userCredential
    );
    const response = await request.data;
    // localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);

const userSignUpSlice = createSlice({
  name: "usersignup",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = null;
        console.log("check user data when");
        console.log(action.payload);
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = null;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === "Request failed with status code 400") {
          state.error = "Access denied! Invailid Credential";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default userSignUpSlice.reducer;
