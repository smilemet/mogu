import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout.js";
import Main from "../pages/Main.js";

import Product from "../pages/product/Product.js";
import ProductCreate from "../pages/product/ProductCreate.js";
import ProductDetail from "../pages/product/ProductDetail.js";

import Seek from "../pages/seek/Seek.js";
import SeekDetail from "../pages/seek/SeekDetail.js";

import Login from "../pages/auth/Login.js";
import LoginReset from "../pages/auth/LoginReset.js";
import LoginNewPw from "../pages/auth/LoginNewPw.js";
import Join from "../pages/auth/Join.js";
import JoinInfo from "../pages/auth/JoinInfo.js";

import UserPage from "../pages/user/UserPage.js";
import Favorite from "../pages/user/Favorite.js";
import UserEdit from "../pages/user/UserEdit.js";
import RecordBuy from "../pages/user/RecordBuy.js";
import RecordSell from "../pages/user/RecordSell.js";

import RecordBuyDetail from "../pages/user/RecordBuyDetail.js";
import RecordSellDetail from "../pages/user/RecordSelllDetail.js";
import RecordSellCheck from "../pages/user/RecordSellCheck.js";

import Order from "../pages/order/Order.js";
import OrderSuccess from "../pages/order/OrderSuccess.js";

import NotFound from "../pages/NotFound.js";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Product />} />
          <Route path="/seek" element={<Seek />} />

          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/seek/detail" element={<SeekDetail />} />

          <Route path="/product/write" element={<ProductCreate />} />
          <Route path="/seek/write" element={<ProductDetail />} />

          <Route path="/product/id/edit" element={<ProductDetail />} />
          <Route path="/seek/id/edit" element={<ProductDetail />} />

          <Route path="/order/id" element={<Order />} />
          <Route path="/order/success" element={<OrderSuccess />} />

          <Route path="/userid" element={<UserPage />} />
          <Route path="/mypage/favorite" element={<Favorite />} />
          <Route path="/mypage/edit" element={<UserEdit />} />
          <Route path="/mypage/buy" element={<RecordBuy />} />
          <Route path="/mypage/sell" element={<RecordSell />} />

          <Route path="/mypage/buy/id" element={<RecordBuyDetail />} />
          <Route path="/mypage/sell/id" element={<RecordSellDetail />} />
          <Route path="/mypage/sell/id/check" element={<RecordSellCheck />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/account/login" element={<Login />} />
        <Route path="/account/password/reset" element={<LoginReset />} />
        <Route path="/account/password/reset/:token" element={<LoginNewPw />} />
        <Route path="/account/join" element={<Join />} />
        <Route path="/account/join/:code" element={<JoinInfo />} />
      </Routes>
    </>
  );
};

export default Router;
