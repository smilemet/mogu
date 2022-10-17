import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout.js";
import Main from "../pages/Main.js";
import Product from "../pages/Product.js";
import Seek from "../pages/Seek.js";
import ProductDetail from "../pages/ProductDetail.js";
import SeekDetail from "../pages/SeekDetail.js";

import Login from "../pages/Login.js";
import LoginReset from "../pages/LoginReset.js";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Product />} />
          <Route path="/seek" element={<Seek />} />

          <Route path="/product/detail" element={<ProductDetail />} />
          <Route path="/seek/detail" element={<SeekDetail />} />
        </Route>

        <Route path="/account/login" element={<Login />} />
        <Route path="/account/password/reset" element={<LoginReset />} />
      </Routes>
    </>
  );
};

export default Router;
