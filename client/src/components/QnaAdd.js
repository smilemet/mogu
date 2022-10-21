import React from "react";
import styled from "styled-components";

const QnaAddContainer = styled.div`
  border: 1px solid ${(props) => props.theme.gray};
  border-radius: 0.3rem;
  padding: 1rem;

  .input-container.flex-box {
    align-items: center;

    & + div {
      margin-top: 0.5rem;
    }

    p {
      width: 3rem;
      margin-bottom: 0;
    }
  }
`;

const QnaAdd = () => {
  return (
    <QnaAddContainer>
      <div className="input-container flex-box">
        <p>질문: </p>
        <input type="text" placeholder="질문 내용"></input>
      </div>
      <div className="input-container flex-box">
        <p>답변: </p>
        <input type="text" placeholder="답변 내용"></input>
      </div>
    </QnaAddContainer>
  );
};

export default QnaAdd;
