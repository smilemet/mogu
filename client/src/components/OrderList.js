import React from "react";
import styled from "styled-components";

import MypageList from "../components/layout/MypageList.js";
import OrderItem from "../components/OrderItem.js";

const OrderListContainer = styled.div`
  .order-list {
    margin-bottom: 3rem;

    li {
      margin-bottom: 0.5rem;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    .no-data {
      padding: 2rem 0;
      text-align: center;
    }
  }

  .page-nav {
    max-width: 25%;
    margin: 0 auto;
    margin-bottom: 3rem;

    ul {
      justify-content: space-between;
      font-size: ${(props) => props.theme.smallFont};
    }
  }
`;

const OrderList = (props) => {
  const option = [
    { id: "deposit", option: "입금확인중" },
    { id: "deposit-checked", option: "입금확인" },
    { id: "deposit-second", option: "2차입금요청" },
    { id: "deposit-second-checked", option: "2차입금확인" },
    { id: "sended", option: "배송완료" },
  ];

  return (
    <MypageList title={props.pageTitle} option={option} date={props.data}>
      <OrderListContainer>
        <ul className="order-list">
          {props.data?.map((v, i) => (
            <li>
              <OrderItem key={i} data={v} />
            </li>
          )) || <p className="no-data">데이터가 없습니다.</p>}
        </ul>

        <div className="page-nav">
          <ul className=" flex-box">
            <li className="prev">◀</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li className="next">▶</li>
          </ul>
        </div>
      </OrderListContainer>
    </MypageList>
  );
};

export default OrderList;
