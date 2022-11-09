import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/axios";

const URL = "/seek";

/**
 * 쿼리 조건에 맞는 공구모아요 게시글을 가져온다.
 * @param payload size : 불러올 목록 수 || 기본값 30
 * @param payload page : 페이지네이션 || 기본값 1
 * @param payload sort : views, favorite, random || 기본값 createdAt
 * @param payload category : 카테고리 (선택)
 */
export const getSeekList = createAsyncThunk(
  "SeekSlice/getSeekList",
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

const SeekSlice = createSlice({
  name: "seekList",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getSeekList.pending]: (state, { payload }) => {
      return { state, loading: true };
    },
    [getSeekList.fulfilled]: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },
    [getSeekList.rejected]: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error",
        },
      };
    },
  },
});

export default SeekSlice.reducer;
