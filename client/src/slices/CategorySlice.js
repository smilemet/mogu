import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/axios";

const URL = "/category";

/**
 * 카테고리명을 모두 불러온다.
 * @param payload null
 */
export const getCategory = createAsyncThunk(
  "CategorySlice/getCategory",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      let { data } = await axios.get(URL);

      result = data.map((item) => {
        return item.name;
      });
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getCategory.pending]: (state, { payload }) => {
      return { state, loading: true };
    },
    [getCategory.fulfilled]: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },
    [getCategory.rejected]: (state, { payload }) => {
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

export default CategorySlice.reducer;
