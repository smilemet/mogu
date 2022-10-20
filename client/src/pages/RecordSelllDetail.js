import React from "react";
import styled from "styled-components";

const RecordSellDetailContainer = styled.div`
  padding-top: 6rem;

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const RecordSellDetail = () => {
  return (
    <RecordSellDetailContainer>
      <h2>주문 상세보기</h2>
    </RecordSellDetailContainer>
  );
};

export default RecordSellDetail;
