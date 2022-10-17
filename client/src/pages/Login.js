import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
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

  .login {
    margin-bottom: 3.5rem;

    input {
      ${(props) => props.theme.input}
      margin-bottom: 0.5rem;
    }

    p {
      margin-bottom: 1.5rem;
      text-align: right;
      text-decoration: underline;
      color: ${(props) => props.theme.darkGray};
      font-size: ${(props) => props.theme.smallFont};
    }
  }

  .join-us {
    * {
      margin-bottom: 0.5rem;
    }
  }

  .fill-btn {
    ${(props) => props.theme.input};
    background-color: ${(props) => props.theme.pointColor};
    border: none;
    color: #fff;
  }

  .normal-btn {
    ${(props) => props.theme.input};
  }
`;

const Login = () => {
  return (
    <LoginContainer>
      <div className="inner3">
        <h1>─ 모두의 공구, MOGU! ─</h1>

        <form className="login">
          <h2>로그인</h2>
          <div>
            <input placeholder="이메일" />
          </div>
          <div>
            <input placeholder="비밀번호" />
            <p>로그인에 어려움이 있나요?</p>
          </div>
          <button className="fill-btn" type="submit">
            로그인
          </button>
        </form>

        <div className="join-us">
          <h2>회원가입</h2>
          <button className="fill-btn" type="button">
            이메일로 가입하기
          </button>
          <button className="normal-btn" type="button">
            트위터로 가입하기
          </button>
          <button className="normal-btn" type="button">
            구글 아이디로 가입하기
          </button>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
