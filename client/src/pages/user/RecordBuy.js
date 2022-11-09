import React from "react";
import OrderList from "../../components/OrderList.js";

const RecordBuy = () => {
  const orderItem = {
    orderno: 23879,
    createAt: "날짜",
    updateAt: "날짜",
    postTitle: "게시글 제목제목제목제목제목제목제목제목제목제목",
    postURL: "",
    item: [
      { name: "20cm 말랑말랑 솜인형옷 ★한정상품★", count: 1, price: 20100 },
      { name: "20cm 말랑말랑 솜인형옷 ★한정상품★", count: 1, price: 20100 },
      { name: "20cm 말랑말랑 솜인형옷 ★한정상품★", count: 1, price: 20100 },
    ],
    status: "입금확인중",
  };

  return (
    <>
      <OrderList pageTitle="주문내역" data={Array(5).fill(orderItem)} />
    </>
  );
};

export default RecordBuy;
