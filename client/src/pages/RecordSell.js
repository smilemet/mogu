import React from "react";

import GridList from "../components/GridList.js";
import MypageList from "../components/layout/MypageList.js";
import ProductItem from "../components/ProductItem.js";

const RecordSell = () => {
  const option = [
    { id: "deposit", option: "입금확인중" },
    { id: "deposit-checked", option: "입금확인" },
    { id: "deposit-second", option: "2차입금요청" },
    { id: "deposit-second-checked", option: "2차입금확인" },
    { id: "sended", option: "배송완료" },
  ];

  return (
    <>
      <MypageList title={"주문 내역"} option={option} date={true}>
        <GridList data={Array(4).fill(true)}>
          <ProductItem />
        </GridList>
      </MypageList>
    </>
  );
};

export default RecordSell;
