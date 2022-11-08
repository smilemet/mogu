import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/axios";

const URL = "/product";

/**
 * 쿼리 조건에 맞는 공구모아요 게시글을 가져온다.
 * @param payload 쿼리 조건(size(d: 30), page(d: 1), sort, [category, status])
 */
export const getProductList = createAsyncThunk(
  "ProductSlice/getProductList",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      result = await axios.get(URL);

      console.log();
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

const ProductSlice = createSlice({
  name: "",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getProductList.pending]: (state, { payload }) => {
      return { state, loading: true };
    },
    [getProductList.fulfilled]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: null,
      };
    },
    [getProductList.rejected]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error",
        },
      };
    },
  },
});

export default ProductSlice.reducer;
