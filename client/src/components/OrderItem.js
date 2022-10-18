import React from "react";
import styled from "styled-components";

import fakeImg from "../assets/img/fakeImg.png";

const OrderItemContainer = styled.div`
  border: 1px solid ${(props) => props.theme.gray};
  padding: 0.5rem;

  & > p {
    font-size: 1rem;
  }

  & > div {
    padding: 0 0.5rem;
  }

  table {
    width: 100%;
    border: 1px solid ${(props) => props.theme.gray};
    border-collapse: collapse;

    td {
      align-content: stretch;
      flex-grow: 0;
      width: 100%;
      border: 1px solid ${(props) => props.theme.gray};
    }

    .order-info {
      flex-grow: 1;

      img {
        width: 3rem;
        height: 3rem;
      }
    }
  }
`;

const OrderItem = () => {
  return (
    <OrderItemContainer>
      <p>2022-10-07</p>
      <div>
        <table>
          <thead>
            <th>
              <td colSpan={3}>주문번호 #23879</td>
            </th>
          </thead>
          <tbody>
            <tr className="flex-box">
              <td className="order-info flex-box">
                <img src={fakeImg} alt="상품 이미지"></img>
                <div>
                  <p>게시글 제목제목제목제목제목제목제목제목제목제목</p>
                  <p>20cm 말랑말랑 솜인형옷 ★한정상품★ 외 1건</p>
                </div>
              </td>
              <td className="order-total">총 60,300원</td>
              <td className="order-status">
                <p>입금확인중</p>
                <p>게시글로 이동</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </OrderItemContainer>
  );
};

export default OrderItem;
