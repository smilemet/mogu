import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/axios.js";

/**
 * 토큰의 유무와 유효성을 체크하고 로그인 상태를 관리한다.
 * @param payload 액세스 토큰
 */
export const verifyToken = createAsyncThunk(
  "AuthSlice/verifyToken",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      const { data } = await axios.get("/auth/verify", {
        params: {
          token: payload,
        },
      });

      result = data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    data: null,
    loading: false,
    error: null,
    isLogin: false,
  },
  reducers: {},
  extraReducers: {
    [verifyToken.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [verifyToken.fulfilled]: (state, { payload }) => {
      return {
        loading: false,
        error: null,
        isLogin: true,
      };
    },
    [verifyToken.rejected]: (state, { payload }) => {
      return {
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error",
        },
        isLogin: false,
      };
    },
  },
});

export default AuthSlice.reducer;
