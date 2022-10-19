import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

import fakeImg from "../assets/img/fakeImg.png";

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
        padding: 0.3rem 0.7rem;
        font-size: ${(props) => props.theme.smallFont};
        color: #fff;
        border-radius: 0.2rem;
      }
    }
  }
`;

const OrderItem = () => {
  return (
    <OrderItemContainer>
      <Link to="/">
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
                <th colSpan="3">주문번호 #23879</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="order-info">
                  <div className="flex-box">
                    <img src={fakeImg} alt="상품 이미지"></img>
                    <div className="post">
                      <p className="bold">게시글 제목제목제목제목제목제목제목제목제목제목</p>
                      <p>20cm 말랑말랑 솜인형옷 ★한정상품★ 외 1건</p>
                    </div>
                  </div>
                </td>
                <td className="order-total">
                  <p>총 60,300원</p>
                </td>
                <td className="order-status">
                  <p className="alert">입금확인중</p>
                  <button>게시글로 이동</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Link>
    </OrderItemContainer>
  );
};

export default OrderItem;
