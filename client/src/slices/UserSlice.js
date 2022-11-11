import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/axios";

/**
 * 회원가입을 진행한다.
 * @param payload 이메일, 비밀번호, 닉네임, 플랫폼(로컬)
 */
export const joinUser = createAsyncThunk(
  "UserSlice/joinUser",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    if (!payload) throw new Error("입력된 정보를 확인해주세요.");

    try {
      const { data } = await axios.post("/user", {
        params: {
          email: payload.email,
          password: payload.password,
          nickname: payload.nickname,
          platform: "local",
        },
      });

      if (!data.success) throw new Error(data.message);

      result = data;
    } catch (err) {
      result = rejectWithValue(err.response || err);
    }

    return result;
  }
);

export const getUserList = createAsyncThunk(
  "UserSlice/getUserList",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      if (!payload) throw new Error("메시지");

      result = await axios.get(URL);
    } catch (err) {
      result = rejectWithValue(err.message);
    }

    return result;
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState: {
    isJoined: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [joinUser.pending]: (state, { payload }) => {
      return { state, loading: true };
    },
    [joinUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isJoined: { success: true },
        loading: false,
        error: null,
      };
    },
    [joinUser.rejected]: (state, { payload }) => {
      return {
        ...state,
        isJoined: { success: false, message: payload.message },
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error",
        },
      };
    },
  },
});

export default UserSlice.reducer;
