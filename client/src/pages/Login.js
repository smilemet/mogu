import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.main`
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
    cursor: pointer;
  }

  .normal-btn {
    ${(props) => props.theme.input};
    cursor: pointer;
  }
`;

const Login = () => {
  return (
    <LoginContainer>
      <div className="wrapper">
        <div className="inner3">
          <h1>─ 모두의 공구, MOGU! ─</h1>

          <form className="login">
            <h2>로그인</h2>
            <div>
              <input type="email" placeholder="이메일" />
            </div>
            <div>
              <input type="password" placeholder="비밀번호" />
              <Link to="/account/password/reset">
                <p>로그인에 어려움이 있나요?</p>
              </Link>
            </div>
            <button className="fill-btn" type="submit">
              로그인
            </button>
          </form>

          <div className="join-us">
            <h2>회원가입</h2>
            <Link to="/account/join">
              <button className="fill-btn" type="button">
                이메일로 가입하기
              </button>
            </Link>
            <button className="normal-btn" type="button">
              트위터로 가입하기
            </button>
            <button className="normal-btn" type="button">
              구글 아이디로 가입하기
            </button>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
