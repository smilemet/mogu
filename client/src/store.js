import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./slices/AuthSlice.js";
import CategorySlice from "./slices/CategorySlice.js";
import ProductSlice from "./slices/ProductSlice.js";
import ProductsSlice from "./slices/ProductsSlice.js";
import SeekSlice from "./slices/SeekSlice.js";
import SendMailSlice from "./slices/SendMailSlice.js";
import VerityMailSlice from "./slices/VerityMailSlice.js";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    category: CategorySlice,
    productList: ProductSlice,
    productLists: ProductsSlice,
    seekList: SeekSlice,
    mail: SendMailSlice,
    verifyMail: VerityMailSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
