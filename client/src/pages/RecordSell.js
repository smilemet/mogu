import React from "react";
import OrderList from "../components/OrderList.js";

const RecordSell = () => {
  return (
    <>
      <OrderList pageTitle="판매내역" data={Array(5).fill(true)} />
    </>
  );
};

export default RecordSell;
