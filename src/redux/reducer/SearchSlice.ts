import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  Base_Url,
  searchFranchaising_Url,
  Franchaising_Category,
  Franchaising_Category_Product_Url,
  Clover_Base_Url,
} from "../../Service/Api";
import Toast from "react-native-simple-toast";
import * as Storage from "../../utily/Storage";

export const getSearchFranchies = createAsyncThunk(
  "Search",
  async (pars: any) => {
    return await axios({
      method: "POST",
      url: Base_Url + searchFranchaising_Url,
      data: pars,
    })
      .then((res) => {
        return res?.data;
      })
      .catch((Error) => {
        return Error;
      });
  }
);

export const getFranchiesCategory = createAsyncThunk(
  "Category",
  async (ID: any) => {
    return await axios({
      method: "GET",
      url: Clover_Base_Url + ID + "/" + "categories",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer 8b78a63f-b7db-51aa-6351-a2f6bc1ebe60",
      },
    })
      .then((res) => {
        return res?.data;
      })
      .catch((Error) => {
        console.log("-getFranchiesCategory----Error--->", Error);
        return Error;
      });
  }
);

export const getFranchiesCategoryProduct = createAsyncThunk(
  "Product",
  async (pars: any) => {
    let mURL =
      Clover_Base_Url +
      pars.marchantId +
      "/" +
      "categories/" +
      pars.catId +
      "/items";

      console.log("---mURL------>", mURL);
      // https://sandbox.dev.clover.com/v3/merchants/05M56WAC9C491/categories/VRV6CAK2YC7H8/items
      // https://sandbox.dev.clover.com/v3/merchants/05M56WAC9C491/categories/1Q3784HGHDN9R/items?expand=categories

    return await axios({
      method: "GET",
      url: mURL,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer 8b78a63f-b7db-51aa-6351-a2f6bc1ebe60",
      },
    })
      .then((res) => {

        console.log("-getFranchiesCategoryProduct---res?.data---->", res?.data.elements);
        return res?.data;
      })
      .catch((Error) => {
        return Error;
      });
  }
);

export interface searchState {
  loader?: boolean;
  data?: [] | any;
  category?: [] | any;
  product?: [];
}

const initialState: searchState = {
  loader: false,
  data: [],
  category: [],
  product: [],
};

const SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {},
  extraReducers: {
    [getSearchFranchies.pending.type]: (state, action) => {
      state.loader = true;
    },
    [getSearchFranchies.fulfilled.type]: (state, action) => {
      state.loader = false;
      if (action.payload?.status.toLowerCase() === "success") {
        state.data = action.payload?.franchaising;
      } else {
        state.data = [];
      }
    },
    [getSearchFranchies.rejected.type]: (state, action) => {
      state.loader = false;
    },
    [getFranchiesCategory.pending.type]: (state, action) => {
      state.loader = true;
    },
    [getFranchiesCategory.fulfilled.type]: (state, action) => {
      state.loader = false;
      state.category = action?.payload?.elements;
    },
    [getFranchiesCategory.rejected.type]: (state, action) => {
      state.loader = false;
    },
    [getFranchiesCategoryProduct.pending.type]: (state, action) => {
      state.loader = true;
    },
    [getFranchiesCategoryProduct.fulfilled.type]: (state, action) => {
      state.loader = false;
      state.product = action.payload?.elements;
      // console.log("---action.payload?.elements---->",action.payload?.elements );
    },
    [getFranchiesCategoryProduct.rejected.type]: (state, action) => {
      state.loader = true;
    },
  },
});
export default SearchSlice.reducer;
