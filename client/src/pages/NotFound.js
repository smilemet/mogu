import React from "react";

import styled from "styled-components";

const NotFoundContainer = styled.main`
  padding-top: 4rem;

  h2 {
    padding-top: 3rem;
    margin-bottom: 0.7rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <div className="wrapper">
        <div className="inner">
          <h2>페이지를 찾을 수 없습니다.</h2>
        </div>
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;
