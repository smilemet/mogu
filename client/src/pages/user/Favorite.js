import React from "react";

import GridList from "../../components/GridList.js";
import MypageList from "../../components/layout/MypageList.js";
import ProductItem from "../../components/ProductItem.js";

const Favorite = () => {
  const option = [
    { id: "recruiting", option: "모집중" },
    { id: "end", option: "모집종료" },
  ];

  return (
    <>
      <MypageList title={"찜 목록"} option={option} date={true}>
        <GridList data={Array(4).fill(true)}>
          <ProductItem />
        </GridList>
      </MypageList>
    </>
  );
};

export default Favorite;
