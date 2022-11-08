import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/axios.js";

const URL = "/auth/email/send";

/**
 * 주어진 이메일로 인증 메일을 전송한다.
 * @param payload 이메일 주소, 유형(회원가입 or 비밀번호 재설정)
 */
export const sendMail = createAsyncThunk(
  "SendMailSlice/sendMail",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      if (!payload) throw new Error("이메일 주소가 입력되지 않았습니다.");

      result = await axios.post(URL, {
        email: payload.email,
        type: payload.type,
      });
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

const SendMailSlice = createSlice({
  name: "mail",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [sendMail.pending]: (state, { payload }) => {
      return { state, loading: true };
    },
    [sendMail.fulfilled]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: null,
      };
    },
    [sendMail.rejected]: (state, { payload }) => {
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

export default SendMailSlice.reducer;
