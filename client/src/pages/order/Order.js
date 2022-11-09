import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Selection2 from "../../components/Selection2";

const OrderContainer = styled.main`
  ${(props) => props.theme.mainPadding}

  &,
  * {
    width: 100%;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p + p {
    margin-top: 1rem;
  }

  p + div {
    margin-top: 3.6rem;
  }

  * + section,
  form {
    margin-top: 3rem;
  }

  input {
    ${(props) => props.theme.inputSomething}
  }

  label + * {
    margin-top: 0.5rem;
  }

  .notice-section {
    padding: 4rem 0;
    text-align: center;

    .accout {
      font-weight: bold;
      text-decoration: underline;
    }
  }

  .order-section {
    .total-price {
      font-size: 1rem;
      text-align: center;
      margin-top: 1rem;
    }

    .item-container {
      & > div + div {
        margin-top: 0.5rem;
      }
    }
  }

  .deposit-section .flex-box {
    & > * + * {
      margin-left: 1rem;
    }
  }

  input + label {
    display: block;
    margin-top: 0.7rem;
  }

  .call-btn {
    ${(props) => props.theme.buttonFill}
    margin-top: 3rem;
  }
`;

const Order = () => {
  return (
    <OrderContainer>
      <div className="wrapper">
        <div className="inner2">
          <section className="notice-section">
            <h2>입금을 완료해주세요!</h2>
            <p>48시간 내에 아래 계좌로 입금이 완료되지 않으면 주문이 취소됩니다.</p>
            <p className="alert">*이 창을 닫으면 계좌번호를 다시 열람할 수 없으니 꼭 바로 입금해주세요!</p>

            <div className="accout">
              <p>한국은행 123-112233-321321</p>
              <p>예금주 홍길동</p>
            </div>
          </section>

          <section className="order-section">
            <h3>공구 신청 내역</h3>
            <div className="item-container">
              <Selection2 />
              <Selection2 />
              <Selection2 />
            </div>
            <p className="total-price">총 60,300원</p>
          </section>

          <form>
            <section className="deposit-section">
              <h3>입금 정보</h3>
              <label htmlFor="bankname">
                은행명
                <span className="alert">*</span>
              </label>
              <input type="text" id="bankname" placeholder="ex) 1차 입금 > 현물도착 > 2차 입금" />

              <label htmlFor="accountname">
                예금주
                <span className="alert">*</span>
              </label>
              <input type="text" id="accountname" placeholder="ex) 1차 입금 > 현물도착 > 2차 입금" />

              <label htmlFor="deposit">
                입금액
                <span className="alert">*</span>
              </label>
              <input type="text" id="deposit" placeholder="ex) 1차 입금 > 현물도착 > 2차 입금" />

              <label htmlFor="deposittime">
                입금 시간
                <span className="alert">*</span>
              </label>
              <div className="flex-box">
                <input type="date" id="deposittime" placeholder="2022-10-02 18:23" />
                <input type="time" id="process" placeholder="2022-10-02 18:23" />
              </div>
            </section>

            <section>
              <h3>배송 정보</h3>
              <label htmlFor="deposit">
                수신인
                <span className="alert">*</span>
              </label>
              <input type="text" id="deposit" placeholder="ex) 1차 입금 > 현물도착 > 2차 입금" />

              <label htmlFor="deposit">
                주소
                <span className="alert">*</span>
              </label>
              <input type="text" id="deposit" placeholder="ex) 1차 입금 > 현물도착 > 2차 입금" />

              <label htmlFor="deposit">
                상세주소
                <span className="alert">*</span>
              </label>
              <input type="text" id="deposit" placeholder="ex) 1차 입금 > 현물도착 > 2차 입금" />

              <label htmlFor="deposit">
                우편번호
                <span className="alert">*</span>
              </label>
              <input type="text" id="deposit" placeholder="ex) 1차 입금 > 현물도착 > 2차 입금" />

              <label htmlFor="deposit">
                연락처
                <span className="alert">*</span>
              </label>
              <input type="text" id="deposit" placeholder="ex) 1차 입금 > 현물도착 > 2차 입금" />
            </section>

            <Link to="/order/success">
              <button className="call-btn" type="button">
                입금 확인 요청하기
              </button>
            </Link>
          </form>
        </div>
      </div>
    </OrderContainer>
  );
};

export default Order;
