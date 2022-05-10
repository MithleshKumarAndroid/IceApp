import React from "react";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as Storage from "../../utily/Storage";
import axios from "axios";
import { Base_Url, Login_Api, Signup_Api } from "../../Service/Api";
import { Alert } from "react-native";
import Toast from 'react-native-simple-toast';
import { backPage } from "../../NavigationService";



export const UserRegister = createAsyncThunk(
    "user/Login",
    async (pars, thunkAPI) => {
        return await axios({
            method: "POST",
            url: Base_Url + Signup_Api,
            data: pars
        }).then((res) => {
            return res;
        }).catch((Error) => {
            console.log("--UserLogin--Error---->", Error);
            Toast.show("Please try again")
        })
    }
)

export interface RegisterState {
    loader?: boolean;
}
const initialState: RegisterState = {
    loader: false
}
export const RegisterSlice = createSlice({
    name: "Register",
    initialState,
    reducers: {},
    extraReducers: {
        [UserRegister.pending.type]: (state, action) => {
            state.loader = true;
        },
        [UserRegister.fulfilled.type]: (state, action) => {
            state.loader = false;
            if (action.payload.data.status === "Failed") {
                Toast.show(action.payload.data.message)
            }
            else if (action.payload.data.status === "Success") {
                Alert.alert("", "User is register successfully. Please login")
                backPage()
            }
        },
        [UserRegister.rejected.type]: (state, action) => {
            state.loader = false;
            console.log("------ERROR----->", action.payload.data);

        }
    }
})
// Action creators are generated for each case reducer function
export const { } = RegisterSlice.actions;
export default RegisterSlice.reducer;