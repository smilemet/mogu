import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/axios";

const URL = "/product";

/**
 * 쿼리 조건에 맞는 공구모아요 게시글을 가져온다.
 * @param payload size : 불러올 목록 수 || 기본값 30
 * @param payload page : 페이지네이션 || 기본값 1
 * @param payload sort : views, favorite, ordered, random || 기본값 createdAt
 * @param payload category : 카테고리 (선택)
 * @param payload ongoing : 모집중인 게시글만 가져오기 T/F (선택)
 */
export const getProductList = createAsyncThunk(
  "ProductSlice/getProductList",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      const { data } = await axios.get(URL, {
        params: {
          size: payload.size,
          page: payload.page,
          sort: payload.sort,
          category: payload.category,
          ongoing: payload.ongoing,
        },
      });

      result = data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

const ProductSlice = createSlice({
  name: "productList",
  initialState: {
    productList: null,
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
        productList: payload,
        loading: false,
        error: null,
      };
    },
    [getProductList.rejected]: (state, { payload }) => {
      return {
        productList: payload,
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
