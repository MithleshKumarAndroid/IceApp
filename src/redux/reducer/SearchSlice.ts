import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  Base_Url,
  searchFranchaising_Url,
  Franchaising_Category,
  Franchaising_Category_Product_Url,
} from "../../Service/Api";
import Toast from "react-native-simple-toast";

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
      url: Base_Url + Franchaising_Category + ID,
    })
      .then((res) => {
        return res?.data;
      })
      .catch((Error) => {
        return Error;
      });
  }
);

export const getFranchiesCategoryProduct = createAsyncThunk(
  "Product",
  async (pars: any) => {
    return await axios({
      method: "GET",
      url:
        Base_Url +
        Franchaising_Category_Product_Url +
        pars.franchId +
        "/" +
        pars.catId,
    })
      .then((res) => {
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
      state.category = action?.payload;
    },
    [getFranchiesCategory.rejected.type]: (state, action) => {
      state.loader = false;
    },
    [getFranchiesCategoryProduct.pending.type]: (state, action) => {
      state.loader = true;
    },
    [getFranchiesCategoryProduct.fulfilled.type]: (state, action) => {
      state.loader = false;
      state.product = action.payload;
    },
    [getFranchiesCategoryProduct.rejected.type]: (state, action) => {
      state.loader = true;
    },
  },
});
export default SearchSlice.reducer;
