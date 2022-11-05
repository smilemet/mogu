import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./slices/AuthSlice.js";
import CategorySlice from "./slices/CategorySlice.js";

const store = configureStore({
  reducer: { auth: AuthSlice, category: CategorySlice },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
