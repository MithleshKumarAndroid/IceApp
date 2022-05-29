import React from "react";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as Storage from "../../utily/Storage";
import axios from "axios";
import {Base_Url, Login_Api, Signup_Api} from "../../Service/Api";
import { Alert } from "react-native";
import Toast from 'react-native-simple-toast';

export const UserLogin  =  createAsyncThunk(
    "user/Login",
    async (pars, thunkAPI) => {
      return await axios({
            method:"POST",
            url:Base_Url+Login_Api,
            data: pars
          }).then((res)=>{
            return res;
          }).catch((Error)=>{
            Toast.show("Please try again")
            return Error;
          })
    }
)



export interface loginState {
  userId?: number;
  userName?: string | undefined;
  userEmail?: string | undefined;
  loader ?:boolean
}
const initialState: loginState = {
  userId: undefined,
  userName: "",
  userEmail: "",
  loader:false
};

export const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    login: (state, action) => {
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    logout: (state) => {
      state.userId = undefined;
    },
  },
  extraReducers:{
    [UserLogin.pending.type ]:(state, action)=>{
    state.loader=true;
    },
    [UserLogin.fulfilled.type]:(state, action)=>{
      state.loader=false;
      if(action.payload.data.message  === "Wrong email or password!Try Again")
      {
        Toast.show(action.payload.data.message)
      }
      else if(action.payload.data.message ==="Authentication successfully")
      {
        state.userId = action.payload.data.userId;
          state.userEmail= action.payload.data.email;
          state.userName= action.payload.data;
          Storage.storeData("UserId", JSON.stringify(action.payload.data.userId));
         Toast.show("Login Successfully")
      }
     
    },
    [UserLogin.rejected.type]:(state, action)=>{
      state.loader=false;
    }
  }
});

export const { login, setUserId, logout } = LoginSlice.actions;
export default LoginSlice.reducer;
