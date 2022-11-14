import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/axios.js";

/**
 * 검색어에 해당하는 공구모아요 게시글을 가져온다.
 * @param payload query : 검색어
 */
export const getSearch = createAsyncThunk(
  "SearchSlice/getSearch",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      if (!payload) throw new Error("검색어가 없습니다.");
      const { query, sort } = payload;

      const { data } = await axios.get("/search", { params: { query, sort } });
      result = data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    searchResult: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getSearch.pending]: (state, { payload }) => {
      return { state, loading: true };
    },
    [getSearch.fulfilled]: (state, { payload }) => {
      return {
        searchResult: payload,
        loading: false,
        error: null,
      };
    },
    [getSearch.rejected]: (state, { payload }) => {
      return {
        searchResult: payload,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.message ? payload.message : "Server Error",
        },
      };
    },
  },
});

export default SearchSlice.reducer;
