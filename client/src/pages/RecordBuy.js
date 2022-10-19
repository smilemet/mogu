import React from "react";
import OrderList from "../components/OrderList.js";

const RecordBuy = () => {
  return (
    <>
      <OrderList pageTitle="주문내역" data={Array(5).fill(true)} />
    </>
  );
};

export default RecordBuy;
