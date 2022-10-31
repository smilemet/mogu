import { configureStore } from "@reduxjs/toolkit";

import CategorySlice from "./slices/CategorySlice.js";

const store = configureStore({
  reducer: { category: CategorySlice },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
