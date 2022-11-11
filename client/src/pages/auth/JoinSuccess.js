import React from "react";

import styled from "styled-components";

const JoinSuccessContainer = styled.main`
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

const JoinSuccess = () => {
  return (
    <JoinSuccessContainer>
      <div className="wrapper">
        <div className="inner2">
          <h2>회원 가입이 완료되었습니다!</h2>
          <p>이제 MOGU!에서 공동구매에 참여해보세요.</p>
        </div>
      </div>
    </JoinSuccessContainer>
  );
};

export default JoinSuccess;
