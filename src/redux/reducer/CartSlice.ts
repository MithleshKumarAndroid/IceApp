import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Base_Url, AddToProduct_Url } from "../../Service/Api";
import Toast from "react-native-simple-toast";
import * as NavigationService from "../../NavigationService";

export const addCartProduct = createAsyncThunk("getCart", async (pars: any) => {
  return await axios({
    method: "POST",
    url: Base_Url + AddToProduct_Url,
    data: pars,
  })
    .then((res) => {
      return res.data;
    })
    .catch((Error) => {
      return Error;
    });
});

export interface cart {
  loader?: boolean;
}

const initialState: cart = {
  loader: false,
};

const CartSlice = createSlice({
  name: "getCart",
  initialState,
  reducers: {},
  extraReducers: {
    [addCartProduct.pending.type]: (state, action) => {
      state.loader = true;
    },
    [addCartProduct.fulfilled.type]: (state, action) => {
      state.loader = false;
      Toast.show(action.payload.messages);
      if (action.payload.status === "Success") {
        NavigationService.navigate("Cart");
      }
    },
    [addCartProduct.rejected.type]: (state, action) => {
      state.loader = false;
    },
  },
});

export default CartSlice.reducer;
