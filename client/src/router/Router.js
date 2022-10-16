import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout.js";
import Detail from "../pages/Detail.js";
import Main from "../pages/Main.js";
import Product from "../pages/Product.js";
import Seek from "../pages/Seek.js";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Product />} />
          <Route path="/seek" element={<Seek />} />

          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
