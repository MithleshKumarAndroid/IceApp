import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as Storage from "../../utily/Storage";

export interface loginState {
  userId?: number;
  userName?: string | undefined;
  userEmail?: string | undefined;
}

const initialState: loginState = {
  userId: undefined,
  userName: "",
  userEmail: "",
};

export const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userEmail = action.payload.email;
      state.userId = 1;
      Storage.storeData("UserId", "1");
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    logout: (state) => {
      state.userId = undefined;
    },
  },
});
// Action creators are generated for each case reducer function
export const { login, setUserId, logout } = LoginSlice.actions;
export default LoginSlice.reducer;
