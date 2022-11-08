import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/axios";

const URL = "/product";

/**
 * 메인 화면에서 여러 productList를 동시에 가져올 때 사용하는 thunk
 * @param payload size : 불러올 목록 수, 기본값 30
 * @param payload page : 페이지네이션
 * @param payload sort : views, favorite, ordered, 기본값 createdAt
 * @param payload category : 카테고리 (선택)
 * @param payload ongoing : 모집중인 게시글만 가져오기 T/F (선택)
 */
export const getProductList1 = createAsyncThunk(
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

/**
 * 메인 화면에서 여러 productList를 동시에 가져올 때 사용하는 thunk
 * @param payload 위와 동일
 */
export const getProductList2 = createAsyncThunk(
  "ProductSlice/getProductList2",
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

/**
 * 메인 화면에서 여러 productList를 동시에 가져올 때 사용하는 thunk
 * @param payload 위와 동일
 */
export const getProductList3 = createAsyncThunk(
  "ProductSlice/getProductList3",
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

const ProductsSlice = createSlice({
  name: "productLists",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getProductList1.pending]: (state, { payload }) => {
      return { ...state.data, loading: true };
    },
    [getProductList1.fulfilled]: (state, { payload }) => {
      return {
        data: { ...state.data, list1: payload },
        loading: false,
        error: null,
      };
    },
    [getProductList1.rejected]: (state, { payload }) => {
      return {
        data: { ...state.data, list1: payload },
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error",
        },
      };
    },
    [getProductList2.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getProductList2.fulfilled]: (state, { payload }) => {
      return {
        data: { ...state.data, list2: payload },
        loading: false,
        error: null,
      };
    },
    [getProductList2.rejected]: (state, { payload }) => {
      return {
        data: { ...state.data, list2: payload },
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error",
        },
      };
    },
    [getProductList3.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getProductList3.fulfilled]: (state, { payload }) => {
      return {
        data: { ...state.data, list3: payload },
        loading: false,
        error: null,
      };
    },
    [getProductList3.rejected]: (state, { payload }) => {
      return {
        data: { ...state.data, list3: payload },
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error",
        },
      };
    },
  },
});

export default ProductsSlice.reducer;
