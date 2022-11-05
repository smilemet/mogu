import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./slices/AuthSlice.js";
import CategorySlice from "./slices/CategorySlice.js";
import SendMailSlice from "./slices/SendMailSlice.js";
import VerityMailSlice from "./slices/VerityMailSlice.js";

const store = configureStore({
  reducer: { auth: AuthSlice, category: CategorySlice, mail: SendMailSlice, verifyMail: VerityMailSlice },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
