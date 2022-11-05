import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/axios";

/**
 * 인증 링크가 유효한지 확인하고, 해당 email을 리턴한다.
 * @param payload 해시코드
 */
export const verifyMail = createAsyncThunk(
  "VerityMailSlice/verifyMail",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      if (!payload) throw new Error("해시코드가 전달되지 않았습니다.");

      const { data } = await axios.get(`auth/email/verify/${payload}`);

      if (!data.success) throw new Error();

      result = data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

const VerityMailSlice = createSlice({
  name: "verifyMail",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [verifyMail.pending]: (state, { payload }) => {
      return { state, loading: true };
    },
    [verifyMail.fulfilled]: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },
    [verifyMail.rejected]: (state, { payload }) => {
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

export default VerityMailSlice.reducer;
