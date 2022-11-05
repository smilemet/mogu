import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/axios.js";

/**
 * 로그인을 시도하고 성공 시 토큰을 발급하여 localStorage에 저장한다.
 * @param payload 아이디와 비밀번호
 */
export const setLogin = createAsyncThunk(
  "AuthSlice/setLogin",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      if (!payload) throw new Error("아이디와 비밀번호가 입력되지 않았습니다.");

      const { data } = await axios.post("/auth/login", {
        email: payload.email,
        password: payload.password,
      });

      if (data) {
        localStorage.setItem(
          "moguToken",
          JSON.stringify({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          })
        );
      }

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
  },
  reducers: {},
  extraReducers: {
    [setLogin.pending]: (state, { payload }) => {
      return { state, loading: true };
    },
    [setLogin.fulfilled]: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },
    [setLogin.rejected]: (state, { payload }) => {
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

export default AuthSlice.reducer;
