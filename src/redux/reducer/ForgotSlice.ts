import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as Storage from "../../utily/Storage";
import axios from "axios";
import {Base_Url, Forgot_Api} from "../../Service/Api";
import { Alert } from "react-native";
import Toast from 'react-native-simple-toast';

export  const ForgotPasswordApi = createAsyncThunk(
     "user/forgot",
    async (pars) => {
      return await  axios({
            method :"POST",
            url:Base_Url+Forgot_Api,
            data: pars,
        }).then((res)=>{
            return res;
        }).catch((Error)=>{
            console.log("-----Error--->", Error);
            return Error;
        })
    }
)

export interface forgotState{
    loader ?: boolean;
} 
const initialState :forgotState={
    loader : false
}
const ForgotSlice= createSlice({
    name:"Forgot",
    initialState,
    reducers:{},
    extraReducers : {
        [ForgotPasswordApi.pending.type]:(state, action)=>{
            state.loader= true
        },
        [ForgotPasswordApi.fulfilled.type]:(state, action)=>{
            state.loader= false;
            if(action.payload.data.status === "Failed")
            {
                Alert.alert("Warning", "This email does not exist. Please try again" )
            }
            else if(action.payload.data.status === "Success" )
            {
                Toast.show(action.payload.data.message)
            }
        },
        [ForgotPasswordApi.rejected.type]:(state, action)=>{
            state.loader= false;
        }
    }
})
export default ForgotSlice.reducer;