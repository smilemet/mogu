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
import LoginNewPw from "../pages/LoginNewPw.js";
import Join from "../pages/Join.js";
import JoinInfo from "../pages/JoinInfo.js";

import UserPage from "../pages/UserPage.js";
import Favorite from "../pages/Favorite.js";
import UserEdit from "../pages/UserEdit.js";
import RecordBuy from "../pages/RecordBuy.js";
import RecordSell from "../pages/RecordSell.js";

import RecordBuyDetail from "../pages/RecordBuyDetail.js";
import RecordSellDetail from "../pages/RecordSelllDetail.js";
import RecordSellCheck from "../pages/RecordSellCheck.js";

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

          <Route path="/product/write" element={<ProductDetail />} />
          <Route path="/seek/write" element={<ProductDetail />} />

          <Route path="/product/id/edit" element={<ProductDetail />} />
          <Route path="/seek/id/edit" element={<ProductDetail />} />

          <Route path="/userid" element={<UserPage />} />
          <Route path="/mypage/favorite" element={<Favorite />} />
          <Route path="/mypage/edit" element={<UserEdit />} />
          <Route path="/mypage/buy" element={<RecordBuy />} />
          <Route path="/mypage/sell" element={<RecordSell />} />

          <Route path="/mypage/buy/id" element={<RecordBuyDetail />} />
          <Route path="/mypage/sell/id" element={<RecordSellDetail />} />
          <Route path="/mypage/sell/id/check" element={<RecordSellCheck />} />
        </Route>

        <Route path="/account/login" element={<Login />} />
        <Route path="/account/password/reset" element={<LoginReset />} />
        <Route path="/account/password/reset/token" element={<LoginNewPw />} />
        <Route path="/account/join" element={<Join />} />
        <Route path="/account/join/token" element={<JoinInfo />} />
      </Routes>
    </>
  );
};

export default Router;
