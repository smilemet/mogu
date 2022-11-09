import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/axios";

const URL = "/product";

/**
 * 메인 화면에서 여러 productList를 동시에 가져올 때 사용하는 thunk
 * sort : 조회수순
 * @param payload size : 불러올 목록 수 || 기본값 30
 * @param payload page : 페이지네이션 || 기본값 1
 * @param payload sort : views, favorite, ordered, random || 기본값 createdAt
 * @param payload category : 카테고리 (선택)
 * @param payload ongoing : 모집중인 게시글만 가져오기 T/F (선택)
 */
export const getProductPopular = createAsyncThunk(
  "ProductsSlice/getProductPopular",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      const { data } = await axios.get(URL, {
        params: {
          size: 6,
          page: 1,
          sort: "views",
          ongoing: true,
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
 * sort : 조회수순
 * @param payload 위와 동일
 */
export const getProductNews = createAsyncThunk(
  "ProductsSlice/getProductNews",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      const { data } = await axios.get(URL, {
        params: {
          size: 6,
          page: 1,
          sort: "createdAt",
          ongoing: true,
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
 * sort : 랜덤게시글
 * @param payload 위와 동일
 */
export const getProductRecommend = createAsyncThunk(
  "ProductsSlice/getProductRecommend",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      const { data } = await axios.get(URL, {
        params: {
          size: 6,
          page: 1,
          sort: "random",
          ongoing: true,
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
    [getProductPopular.pending]: (state, { payload }) => {
      return { ...state.data, loading: true };
    },
    [getProductPopular.fulfilled]: (state, { payload }) => {
      return {
        data: { ...state.data, popular: payload },
        loading: false,
        error: null,
      };
    },
    [getProductPopular.rejected]: (state, { payload }) => {
      return {
        data: { ...state.data, popular: payload },
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error",
        },
      };
    },
    [getProductNews.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getProductNews.fulfilled]: (state, { payload }) => {
      return {
        data: { ...state.data, news: payload },
        loading: false,
        error: null,
      };
    },
    [getProductNews.rejected]: (state, { payload }) => {
      return {
        data: { ...state.data, news: payload },
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error",
        },
      };
    },
    [getProductRecommend.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getProductRecommend.fulfilled]: (state, { payload }) => {
      return {
        data: { ...state.data, recommend: payload },
        loading: false,
        error: null,
      };
    },
    [getProductRecommend.rejected]: (state, { payload }) => {
      return {
        data: { ...state.data, recommend: payload },
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
