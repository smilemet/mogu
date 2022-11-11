import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./slices/AuthSlice.js";
import UserSlice from "./slices/UserSlice.js";
import CategorySlice from "./slices/CategorySlice.js";
import ProductSlice from "./slices/ProductSlice.js";
import ProductsSlice from "./slices/ProductsSlice.js";
import SeekSlice from "./slices/SeekSlice.js";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
    category: CategorySlice,
    productList: ProductSlice,
    productLists: ProductsSlice,
    seekList: SeekSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
