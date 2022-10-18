import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import titleImg from "../assets/img/title.png";

const LoginResetContainer = styled.main`
  padding-top: 4rem;
  text-align: center;

  * {
    width: 100%;
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 4rem;
  }

  h2 {
    margin-bottom: 0.7rem;
    text-align: left;
    font-size: 1rem;
    font-weight: 500;
  }

  .email {
    & > div {
      margin-bottom: 1.5rem;
    }

    input {
      ${(props) => props.theme.input}
    }
  }

  .fill-btn {
    ${(props) => props.theme.input};
    background-color: ${(props) => props.theme.pointColor};
    border: none;
    color: #fff;
    cursor: pointer;
  }

  .notice-msg {
    display: none;
    margin-top: 5rem;
    line-height: 2;

    &.send {
      display: block;
    }
  }

  .to-main {
    display: block;
    width: 100%;

    img {
      margin-top: 3rem;
      width: 5rem;
    }
  }
`;

const LoginReset = () => {
  return (
    <LoginResetContainer>
      <div className="wrapper">
        <div className="inner3">
          <h1>비밀번호 찾기</h1>

          <div className="email">
            <h2>이메일 입력</h2>
            <div>
              <input type="email" placeholder="이메일" />
            </div>
            <button className="fill-btn" type="button">
              인증 메일 보내기
            </button>
          </div>

          <div className="to-main">
            <Link to="/">
              <img src={titleImg} alt="메인화면 돌아가기" />
            </Link>
          </div>

          <div className="notice-msg send">
            <p>인증 메일을 보냈습니다!</p>
            <p>
              <span className="alert">메일함</span>을 확인해주세요.
            </p>
          </div>
        </div>
      </div>
    </LoginResetContainer>
  );
};

export default LoginReset;
