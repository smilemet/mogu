import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MyInfo from "../../components/MyInfo.js";
import OrderItem from "../../components/OrderItem.js";
import Selection2 from "../../components/Selection2.js";

const RecordBuyDetailContainer = styled.div`
  padding-top: 6rem;

  section {
    margin-bottom: 3.5rem;

    &.order-title .summary {
      padding: 3rem 0 1rem;

      & > div {
        width: 100%;
        text-align: center;

        p:nth-child(1) {
          margin-bottom: 1.5rem;
        }

        .bigger {
          font-size: 1.5rem;
        }
      }
    }

    &.order-items {
      & > div {
        margin-bottom: 0.5rem;
      }
    }

    &.order-btn {
      a {
        width: 100%;
      }

      .additional {
        margin-right: 1rem;

        button {
          ${(props) => props.theme.button}
          padding: 2rem 0;
        }
      }

      .join-list button {
        ${(props) => props.theme.buttonFill}
        padding: 2rem 0;
      }

      button {
        width: 100%;
        cursor: pointer;
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
          <h2>공동구매 현황</h2>

          <section className="order-title">
            <h3>공구 내용</h3>
            <OrderItem />
            <div className="summary flex-box">
              <div>
                <p>현재 참여인원 수</p>
                <p className="bigger">47명</p>
              </div>
              <div>
                <p>현재 참여인원 수</p>
                <p className="bigger">47명</p>
              </div>
            </div>
          </section>

          <section className="order-items">
            <h3>공구 중인 상품</h3>
            <Selection2 />
            <Selection2 />
            <Selection2 />
          </section>

          <section className="order-btn flex-box">
            <Link className="additional" to="/mypage/sell">
              <button>추가 금액 요청하기</button>
            </Link>
            <Link className="join-list" to="/mypage/sell/id/check">
              <button>참여 명단 확인하기</button>
            </Link>
          </section>
        </div>
      </div>
    </RecordBuyDetailContainer>
  );
};

export default RecordBuyDetail;
