import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./slices/AuthSlice.js";
import UserSlice from "./slices/UserSlice.js";
import CategorySlice from "./slices/CategorySlice.js";
import ProductSlice from "./slices/ProductSlice.js";
import SeekSlice from "./slices/SeekSlice.js";
import SearchSlice from "./slices/SearchSlice.js";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
    category: CategorySlice,
    productList: ProductSlice,
    seekList: SeekSlice,
    search: SearchSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
