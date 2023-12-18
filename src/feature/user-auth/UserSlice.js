import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredential)=>{

        const request = await axios.post(`https://reqres.in/api/login`, userCredential);
        const response = await request.data;
        localStorage.setItem('user', JSON.stringify(response));
        return response;

    }
)

const userSlice =createSlice(
    {
        name:"user",
        initialState:{
            loading: false,
            user: null,
            error: null
        },
        extraReducers:(builder)=>{
            builder
            .addCase(loginUser.pending, (state)=>{
                state.loading= true;
                state.user = null;
                state.error =null;
            })
            .addCase(loginUser.fulfilled, (state,action)=>{
                state.loading= null;
                console.log("check user data when")
                console.log(action.payload)
                state.user = action.payload;
                state.error =null;
            })
            .addCase(loginUser.rejected, (state,action)=>{
                state.loading= null;
                state.user = null;
                console.log(action.error.message);
                if(action.error.message === 'Request failed with status code 400'){
                    state.error= 'Access denied! Invailid Credential'

                }
                else{
                    state.error =action.error.message;
                }   
            })
        },
        reducers:{
            logoutUser: (state)=>{
                console.log("cehck user data")
                console.dir(state)
                state.user = null;
                localStorage.removeItem("user");
                console.log(state.user)

            }
        }
    }
);

export const {logoutUser} = userSlice.actions

export default userSlice.reducer;