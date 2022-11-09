import React from "react";

import styled from "styled-components";

const OrderSuccessContainer = styled.main`
  padding-top: 12rem;

  &,
  * {
    width: 100%;
    text-align: center;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
  }

  p.alert {
    margin-top: 1rem;
  }
`;

const OrderSuccess = () => {
  return (
    <OrderSuccessContainer>
      <div className="wrapper">
        <div className="inner2">
          <h2>공동구매 신청이 완료되었습니다!</h2>
          <p>총대님에게 입금 확인 요청을 보냈습니다.</p>
          <p className="alert">잠시 후 메인 메이지로 이동합니다.</p>
        </div>
      </div>
    </OrderSuccessContainer>
  );
};

export default OrderSuccess;
