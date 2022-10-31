import express from "express";

import auth from "./auth/index.js";
import category from "./category/index.js";
import host from "./host/index.js";
import image from "./image/index.js";
import order from "./order/index.js";
import product from "./product/index.js";
import search from "./search/index.js";
import seek from "./seek/index.js";
import user from "./user/index.js";

import test from "./test/index.js";

const api = express.Router();

api.get("/", (req, res) => {
  res.json("api");
});

api.use("/auth", auth);
api.use("/category", category);
api.use("/host", host);
api.use("/image", image);
api.use("/order", order);
api.use("/product", product);
api.use("/search", search);
api.use("/seek", seek);
api.use("/user", user);

api.use("/test", test);

export default api;
