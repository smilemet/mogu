import React from "react";
import styled from "styled-components";

const LoginResetContainer = styled.div`
  padding-top: 5rem;
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
    font-weight: bold;
  }

  .email {
    input {
      ${(props) => props.theme.input}
      margin-bottom: 1.5rem;
    }
  }

  .fill-btn {
    ${(props) => props.theme.input};
    background-color: ${(props) => props.theme.pointColor};
    border: none;
    color: #fff;
  }

  .notice-msg {
    margin-top: 5rem;
    line-height: 2;
    span {
      color: ${(props) => props.theme.alertText};
    }
  }
`;

const LoginReset = () => {
  return (
    <LoginResetContainer>
      <div className="inner3">
        <h1>비밀번호 찾기</h1>

        <div className="email">
          <h2>이메일 입력</h2>
          <div>
            <input placeholder="이메일" />
          </div>
          <button className="fill-btn" type="button">
            인증 메일 보내기
          </button>
        </div>

        <div className="notice-msg">
          <p>인증 메일을 보냈습니다!</p>
          <p>
            <span>메일함</span>을 확인해주세요.
          </p>
        </div>
      </div>
    </LoginResetContainer>
  );
};

export default LoginReset;
