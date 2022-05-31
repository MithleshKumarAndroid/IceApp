import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  Base_Url,
  AddToProduct_Url,
  GetCartProduct_Url,
  AdditionToProduct_Url,
  DeleteProductFromCart_Url,
} from "../../Service/Api";
import Toast from "react-native-simple-toast";
import * as NavigationService from "../../NavigationService";
import { getUser } from "../../utily/Helper";

export const addCartProduct = createAsyncThunk(
  "addCart",
  async (pars: any, { dispatch }) => {
    return await axios({
      method: "POST",
      url: Base_Url + AddToProduct_Url,
      data: pars,
    })
      .then((res) => {
        dispatch(getCartProduct());
        return res.data;
      })
      .catch((Error) => {
        return Error;
      });
  }
);

export const getCartProduct = createAsyncThunk("getCart", async () => {
  let mUser_Id = await getUser();
  return await axios({
    method: "GET",
    url: Base_Url + GetCartProduct_Url + mUser_Id,
  })
    .then((res: any) => {
      return res?.data;
    })
    .catch((Error) => {
      return Error;
    });
});

export const decreaseProductQuantitry = createAsyncThunk(
  "AddProduct",
  async (pars: any, { dispatch }) => {
    return await axios({
      method: "POST",
      url: Base_Url + AdditionToProduct_Url,
      data: pars,
    })
      .then((res: any) => {
        dispatch(getCartProduct());
        return res.data;
      })
      .catch((Error) => {
        return Error;
      });
  }
);

export const deleteProductFromCart = createAsyncThunk(
  "deleteProduct",
  async (ID: any, { dispatch }) => {
    let mUser_Id = await getUser();
    let formData = new FormData();
    formData.append("product_id",ID );
    formData.append("user_id", mUser_Id);

    return await axios({
      method: "POST",
      url: Base_Url + DeleteProductFromCart_Url,
      data: formData,
    })
      .then((res: any) => {
        dispatch(getCartProduct())
        return res?.data;
      })
      .catch((Error) => {
        return Error;
      });
  }
);

export interface cart {
  loader?: boolean;
  cartData?: [] | any;
}

const initialState: cart = {
  loader: false,
  cartData: [],
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
    [getCartProduct.pending.type]: (state, action) => {
      state.loader = true;
    },
    [getCartProduct.fulfilled.type]: (state, action) => {
      state.loader = false;
      if (action.payload.response_status === 200) {
        state.cartData = action.payload?.data;
      } else {
        state.cartData = [];
      }
    },
    [getCartProduct.rejected.type]: (state, action) => {
      state.loader = true;
    },
    [decreaseProductQuantitry.pending.type]: (state, action) => {
      state.loader = true;
    },
    [decreaseProductQuantitry.fulfilled.type]: (state, action) => {
      state.loader = false;
    },
    [decreaseProductQuantitry.rejected.type]: (state, action) => {
      state.loader = false;
    },
    [deleteProductFromCart.pending.type]:(state, action)=>{
      state.loader = true
    },
    [deleteProductFromCart.fulfilled.type]:(state, action)=>{
      state.loader = false
    },
    [deleteProductFromCart.rejected.type]:(state, action)=>{
      state.loader = false
    }
  },
});

export default CartSlice.reducer;
