import React from "react";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as Storage from "../../utily/Storage";
import axios from "axios";
import { Base_Url, Profile_Api, Update_Profile } from "../../Service/Api";
import Toast from "react-native-simple-toast";
import { getUser } from "../../utily/Helper";
import * as NavigationService from "../../NavigationService";

export const getProfile = createAsyncThunk("getProfile", async (userId) => {
  let mUserId: any = await getUser();
  return await axios({
    method: "GET",
    url: Base_Url + Profile_Api + mUserId,
  })
    .then((res) => {
      return res;
    })
    .catch((Error) => {
      return Error;
    });
});

export const updateProfile = createAsyncThunk("updateProfile", async (pars :any) => {
  let mUserId = await getUser();
  return await axios({
    method: "PUT",
    url: Base_Url + Update_Profile + mUserId,
    data: pars,
  })
    .then((res) => {
      return res?.data;
    })
    .catch((Error) => {
      return Error;
    });
});

export interface profileState {
  loader?: boolean;
  user?: any;
}
const initialState: profileState = {
  loader: false,
  user: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    [getProfile.pending.type]: (state, action) => {
      state.loader = true;
    },
    [getProfile.fulfilled.type]: (state, action) => {
      state.loader = false;
      if (action.payload.status === 200) {
        state.user = action.payload.data.user[0];
      }
    },
    [getProfile.rejected.type]: (state, action) => {
      state.loader = false;
    },
    [updateProfile.pending.type]: (state, action) => {
      state.loader = true;
    },
    [updateProfile.fulfilled.type]: (state, action) => {
      state.loader = false;
      NavigationService.backPage();
      Toast.show(action.payload.message);
    },
    [updateProfile.rejected.type]: (state, action) => {
      state.loader = false;
    },
  },
});
export default profileSlice.reducer;
