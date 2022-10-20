import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import fakeImg from "../assets/img/fakeImg.png";
import { stringMoney } from "../utils/StringFormat.js";

const OrderItemContainer = styled.div`
  border: 1px solid ${(props) => props.theme.gray};
  padding: 0.5rem;
  padding-bottom: 0.7rem;

  .date {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .table-container {
    padding: 0 0.5rem;
  }

  table {
    table-layout: fixed;
    width: 100%;
    border: 1px solid ${(props) => props.theme.gray};
    border-collapse: collapse;

    th,
    td {
      padding: 0.5rem 1rem;
      border: 1px solid ${(props) => props.theme.gray};
      vertical-align: middle;
    }

    th {
      text-align: left;

      div {
        justify-content: space-between;
      }
    }

    col:nth-child(1) {
      width: 70%;
    }

    col:nth-child(2) {
      width: 15%;
    }

    col:nth-child(3) {
      width: 15%;
    }

    .order-info {
      img {
        width: 3rem;
        height: 3rem;
      }

      & > div {
        align-items: center;
      }

      .post {
        margin-left: 1rem;

        p:nth-child(1) {
          margin-bottom: 0.5rem;
        }

        p:nth-child(2) {
          font-size: ${(props) => props.theme.smallFont};
          color: ${(props) => props.theme.darkGray};
        }
      }
    }

    .order-total {
      text-align: center;
    }

    .order-status {
      text-align: center;

      button {
        ${(props) => props.theme.buttonFill};
        margin-top: 0.5rem;
        padding: 0.5rem 0.7rem;
        font-size: ${(props) => props.theme.smallFont};
        color: #fff;
        border-radius: 0.2rem;
      }
    }
  }
`;

const OrderItem = (props) => {
  const order = props.data;
  const orderItem = props.data.item;

  return (
    <OrderItemContainer>
      <p className="date">2022-10-07</p>
      <div className="table-container">
        <table>
          <colgroup>
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th colSpan="3">
                <div className="flex-box">
                  <p>주문번호 #{order.orderno}</p>
                  <p>
                    <Link to="/">자세히 보기</Link>
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="order-info">
                <div className="flex-box">
                  <img src={fakeImg} alt="상품 이미지"></img>
                  <div className="post">
                    <p className="bold">{order.postTitle}</p>
                    <p>
                      {orderItem.length > 1
                        ? orderItem[0].name + " 외 " + orderItem.length + "건"
                        : orderItem[0].name + "1건"}
                    </p>
                  </div>
                </div>
              </td>
              <td className="order-total">
                <p>{stringMoney(orderItem.reduce((a, b) => (a += b.price), 0))}원</p>
              </td>
              <td className="order-status">
                <p className="alert">{order.status}</p>
                <button>
                  <Link to="/product/detail">게시글로 이동</Link>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </OrderItemContainer>
  );
};

export default OrderItem;
