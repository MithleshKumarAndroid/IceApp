import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  Base_Url,
  AddToProduct_Url,
  GetCartProduct_Url,
  AdditionToProduct_Url,
  DeleteProductFromCart_Url,
  Clover_Base_Url,
} from "../../Service/Api";
import Toast from "react-native-simple-toast";
import * as NavigationService from "../../NavigationService";
import { getUser } from "../../utily/Helper";

export const addCartProduct = createAsyncThunk(
  "addCart",
  async (pars: any, { dispatch }) => {
    return await axios({
      method: "POST",
      url: Clover_Base_Url + pars.id + "/" + "orders",
      data: { state: "open" },
      headers: {
        Accept: "application/json",
        Authorization: "Bearer 8b78a63f-b7db-51aa-6351-a2f6bc1ebe60",
      },
    })
      .then((res) => {
        let mPars = {
          marchentId: pars.id,
          ordrId: res.data.id,
          itemId: pars.itemId,
        };
        dispatch(addProductInOrder(mPars));
        return res.data.id;
      })
      .catch((Error) => {
        console.log("---Error------>", Error);
        return Error;
      });
  }
);

export const addProductInOrder = createAsyncThunk(
  "addProductOrder",
  async (pars: any, { dispatch }) => {
    let mPars = {
      item: { id: pars.itemId },
    };
    return await axios({
      method: "POST",
      url: Clover_Base_Url + pars.marchentId + "/" + "orders/" + pars.ordrId+"/line_items",
      data: mPars,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer 8b78a63f-b7db-51aa-6351-a2f6bc1ebe60",
      },
    })
      .then((res) => {
        if (res.status == 200) {
          Toast.show("Product Added successfully")
          // NavigationService.navigate("Cart")
          dispatch(getCartProduct(pars))
        }
        return res?.data;
      })
      .catch((Error) => {
        console.log("----Error---->", Error);
        return Error;
      });
  }
);

export const getCartProduct = createAsyncThunk("getCart", async (pars : any) => {
  let mUser_Id = await getUser();
  console.log("---getCartProduct---->", "3");
  let mUrl=Clover_Base_Url+pars.marchentId+"/orders/"+pars.ordrId+"/line_items?expand=taxRates"
  // https://sandbox.dev.clover.com/v3/merchants/05M56WAC9C491/orders/NKWC1ZKX26ETY/line_items?expand=taxRates
  return await axios({
    method: "GET",
    url: mUrl,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer 8b78a63f-b7db-51aa-6351-a2f6bc1ebe60",
    },
  })
    .then((res: any) => {
      console.log("----res?.data---->", res?.data);
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
        // dispatch(getCartProduct());
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
    formData.append("product_id", ID);
    formData.append("user_id", mUser_Id);

    return await axios({
      method: "POST",
      url: Base_Url + DeleteProductFromCart_Url,
      data: formData,
    })
      .then((res: any) => {
        // dispatch(getCartProduct());
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
  orderId?:number|undefined;
}

const initialState: cart = {
  loader: false,
  cartData: [],
  orderId:undefined
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
      state.orderId= action.payload;
      Toast.show(action.payload.messages);
      // if (action.payload.status === "Success") {
      //   NavigationService.navigate("Cart");
      // }
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
    [deleteProductFromCart.pending.type]: (state, action) => {
      state.loader = true;
    },
    [deleteProductFromCart.fulfilled.type]: (state, action) => {
      state.loader = false;
    },
    [deleteProductFromCart.rejected.type]: (state, action) => {
      state.loader = false;
    },
  },
});

export default CartSlice.reducer;
