import React from "react";
import styled from "styled-components";

import fakeImg from "../assets/img/fakeImg.png";

const CommentContainer = styled.div`
  justify-content: space-between;
  align-items: center;

  .ballon {
    max-width: 100%;
    padding: 1.5rem 1.5rem 1rem;
    border: 1px solid ${(props) => props.theme.gray};
    border-radius: 1rem;
    line-height: 1.5;

    .date {
      margin-top: 0.5rem;
      text-align: right;
      font-size: ${(props) => props.theme.smallFont};
      color: ${(props) => props.theme.darkGray};
    }
  }

  .user {
    width: 7.5rem;
    flex-shrink: 0;
    text-align: center;

    .icon {
      ${(props) => props.theme.icon}
      width: 3rem;
      height: 3rem;
    }

    p {
      width: 50%;
      margin: 0 auto;
      text-align: center;
      word-break: break-all;
      font-size: ${(props) => props.theme.smallFont};
      color: ${(props) => props.theme.darkGray};
    }
  }
`;

const Comment = () => {
  return (
    <CommentContainer className="flex-box">
      <div className="ballon">
        <p>
          그랬더니 그래도 가는 기색이 없고, 뿐만 아니라 쌔근쌔근하고 심상치 않게 숨 소리가 점점
          거칠어진다. 이건 또 뭐야 싶어서 그때에야 비로소 돌아다보니 나 는 참으로 놀랐다. 우리가 이
          동네에 들어온 것은 근 삼 년째 되어 오지만 여태 껏 가무잡잡한 점순이의 얼굴이 이렇게까지
          홍당무처럼 새빨개진 법이 없었다.
        </p>
        <p className="date">2022-10-26</p>
      </div>
      <div className="user">
        <img className="icon" src={fakeImg} alt="유저 아이콘" />
        <p>닉네임최대길이열다섯글자</p>
      </div>
    </CommentContainer>
  );
};

export default Comment;
