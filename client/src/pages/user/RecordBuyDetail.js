import React from "react";
import styled from "styled-components";
import MyInfo from "../../components/MyInfo";
import OrderItem from "../../components/OrderItem";
import Selection2 from "../../components/Selection2";

const RecordBuyDetailContainer = styled.div`
  padding-top: 6rem;

  section {
    margin-bottom: 3.5rem;

    &.order-items {
      & > div {
        margin-bottom: 0.5rem;
      }
    }

    &.account-delivery {
      & > div > section {
        display: block;

        & > article {
          margin-right: 0;
        }
      }
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

const RecordBuyDetail = () => {
  return (
    <RecordBuyDetailContainer>
      <div className="wrapper">
        <div className="inner2">
          <h2>주문 상세보기</h2>

          <section>
            <h3>주문 내용</h3>
            <OrderItem />
          </section>

          <section className="order-items">
            <h3>주문 상품</h3>
            <Selection2 />
            <Selection2 />
            <Selection2 />
          </section>

          <section className="account-delivery">
            <MyInfo />
          </section>
        </div>
      </div>
    </RecordBuyDetailContainer>
  );
};

export default RecordBuyDetail;
