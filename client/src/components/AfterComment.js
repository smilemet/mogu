import React from "react";
import styled from "styled-components";

import fakeImg from "../assets/img/fakeImg.png";

const AfterCommentContainer = styled.div`
  max-width: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid ${(props) => props.theme.gray};
  border-radius: 1rem;
  line-height: 1.5;

  .icon {
    ${(props) => props.theme.icon};
    margin-right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  .comment {
    width: 100%;

    .flex-box {
      justify-content: space-between;
    }

    .name {
      font-weight: bold;
    }

    .date {
      text-align: right;
      font-size: ${(props) => props.theme.smallFont};
    }
  }
`;

const AfterComment = () => {
  return (
    <AfterCommentContainer className="flex-box">
      <div className="user">
        <img className="icon" src={fakeImg} alt="유저 아이콘" />
      </div>
      <div className="comment">
        <div className="flex-box">
          <p className="name">진리는나의공구</p>
          <p className="date">2022-05-15</p>
        </div>
        <p>엄청 친절하셨어요! 덕분에 예쁜 옷 얻었습니다~ 감사합니다!!!!</p>
      </div>
    </AfterCommentContainer>
  );
};

export default AfterComment;
