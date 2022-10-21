import React from "react";
import styled from "styled-components";

import fakeImg from "../assets/img/fakeImg.png";

const OrderJoinContainer = styled.table`
  table-layout: fixed;
  width: 100%;
  border: 1px solid ${(props) => props.theme.gray};
  border-collapse: collapse;

  * {
    word-break: break-all;
    font-size: 14px;
  }

  th,
  td {
    padding: 0.5rem 0;
    border: 1px solid ${(props) => props.theme.gray};
    vertical-align: middle;

    &,
    * {
      text-align: center;
    }
  }

  th:nth-child(1) {
    width: 5%;
  }

  th:nth-child(2) {
    width: 10.5%;
  }

  th:nth-child(3) {
    width: 57%;
  }

  th:nth-child(6) {
    width: 12%;
  }

  .td2 {
    P:nth-child(1) {
      margin-bottom: 0.3rem;
    }
    p:nth-child(2) {
      margin-bottom: 1rem;
      font-size: ${(props) => props.theme.smallFont};
    }
  }

  .td3 {
    padding: 0.5rem 1rem;

    .items {
      display: grid;
      grid-template-columns: 3rem auto minmax(0px, 6rem) minmax(0, 4rem);
      align-items: center;
      margin-bottom: 0.5rem;

      &:last-of-type {
        margin-bottom: 0;
      }

      p {
        text-align: right;
        padding-left: 0.5rem;
        text-align: left;
      }

      img {
        width: 3rem;
        height: 3rem;
      }
    }
  }

  .td6 {
    p:nth-child(1) {
      margin-bottom: 0.3rem;
      font-size: ${(props) => props.theme.smallFont};
      color: ${(props) => props.theme.darkGray};
    }

    p:nth-child(2) {
      margin-bottom: 1rem;
    }
  }

  .alert {
    margin-top: 0.5rem;
    text-decoration: underline;
  }
`;

const OrderJoin = () => {
  return (
    <OrderJoinContainer>
      <thead>
        <tr>
          <th>
            <p>체크</p>
          </th>
          <th>
            <p>주문정보</p>
          </th>
          <th>
            <p>주문상품</p>
          </th>
          <th>
            <p>총액</p>
          </th>
          <th>
            <p>상태</p>
          </th>
          <th>
            <p>최근입금정보</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={2} className="td1">
            <input type="checkbox" name="checkbox" />
          </td>
          <td rowSpan={2} className="td2">
            <div>
              <p>#2013843792</p>
              <p>2022-10-02</p>
              <p>홍길동</p>
            </div>
          </td>
          <td className="td3">
            <div className="items">
              <img src={fakeImg} alt="상품 이미지"></img>
              <p>
                <span className="bold">20cm 말랑말랑 솜인형옷 ★한정상품★</span>
                <span> / </span>
                <span>20,100원</span>
                <span> / </span>
                <span>1개</span>
              </p>
            </div>
            <div className="items">
              <img src={fakeImg} alt="상품 이미지"></img>
              <p>
                <span className="bold">20cm 말랑말랑 솜인형옷 ★한정상품★</span>
                <span> / </span>
                <span>20,100원</span>
                <span> / </span>
                <span>1개</span>
              </p>
            </div>
            <div className="items">
              <img src={fakeImg} alt="상품 이미지"></img>
              <p>
                <span className="bold">20cm 말랑말랑 솜인형옷 ★한정상품★</span>
                <span> / </span>
                <span>20,100원</span>
                <span> / </span>
                <span>1개</span>
              </p>
            </div>
          </td>
          <td rowSpan={2} className="td4">
            60,300원
          </td>
          <td rowSpan={2} className="td5">
            <p>입금완료</p>
            <p className="alert">상태변경</p>
          </td>
          <td rowSpan={2} className="td6">
            <p>2022-10-02 18:25</p>
            <p>한국은행 홍길동</p>
            <p>60,300원</p>
          </td>
        </tr>
      </tbody>
    </OrderJoinContainer>
  );
};

export default OrderJoin;
