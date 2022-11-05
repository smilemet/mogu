import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import RegexHelperTF from "../../utils/RegexHelperTF.js";
import { setLogin } from "../../slices/AuthSlice.js";

import Swal from "sweetalert2";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const { data: loginResult } = useSelector((state) => state.auth);
  console.log(loginResult);

  const [input, setInput] = useState({});
  const [alertMsg, setAlertMsg] = useState("");

  /** 로그인 */
  const onLogin = useCallback(
    async (e) => {
      e.preventDefault();

      const email = emailRef.current.value.trim();
      const password = passwordRef.current.value;

      dispatch(setLogin({ email, password }));

      console.log(loginResult);

      try {
        if (loginResult && !loginResult.success) throw new Error(loginResult.message);

        navigate("/");
      } catch (err) {
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#cb54e5",
        });
      }
    },
    [dispatch, navigate, loginResult]
  );

  /** 입력값 확인 */
  const onCheck = useCallback(
    async (e) => {
      let inputType = e.currentTarget.dataset.type;
      let inputValue = e.currentTarget.value.trim();

      if (inputType === "email") {
        if (input.email === inputValue) return;
        setInput({ ...input, email: inputValue });

        RegexHelperTF.value(inputValue)
          ? setAlertMsg({ ...alertMsg, email: null })
          : setAlertMsg({ ...alertMsg, email: "이메일을 입력해주세요." });

        RegexHelperTF.email(inputValue)
          ? setAlertMsg({ ...alertMsg, email: null })
          : setAlertMsg({ ...alertMsg, email: "이메일을 확인해주세요." });
      }

      if (inputType === "password") {
        if (input.password === inputValue) return;
        setInput({ ...input, password: inputValue });

        RegexHelperTF.value(inputValue)
          ? setAlertMsg({ ...alertMsg, password: null })
          : setAlertMsg({ ...alertMsg, password: "비밀번호를 입력해주세요." });
      }
    },
    [alertMsg, input]
  );

  return (
    <LoginContainer>
      <div className="wrapper">
        <div className="inner3">
          <h1>─ 모두의 공구, MOGU! ─</h1>

          <form className="login" onSubmit={onLogin}>
            <h2>로그인</h2>
            <div>
              <input type="email" placeholder="이메일" onBlur={onCheck} data-type="email" ref={emailRef} />
              <p className="alert">{alertMsg.email}</p>
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호"
                onBlur={onCheck}
                data-type="password"
                ref={passwordRef}
              />
              <p className="alert">{alertMsg.password}</p>
              <Link to="/account/password/reset">
                <p className="is_failed">로그인에 어려움이 있나요?</p>
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
              트위터로 가입 / 로그인하기
            </button>
            <button className="normal-btn" type="button">
              구글로 가입 / 로그인하기
            </button>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

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

    & > div {
      margin-bottom: 0.5rem;
    }

    input {
      ${(props) => props.theme.input}
    }

    p {
      text-align: left;
      font-size: ${(props) => props.theme.smallFont};

      &.is_failed {
        margin-bottom: 1.5rem;
        text-align: right;
        text-decoration: underline;
        color: ${(props) => props.theme.darkGray};
      }
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

export default Login;
