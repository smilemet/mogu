import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import titleImg from "../assets/img/title.png";

const LoginNewPwContainer = styled.div`
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

  .new-pw {
    & > div {
      margin-bottom: 1.5rem;

      p {
        text-align: right;
        font-size: ${(props) => props.theme.smallFont};
        color: ${(props) => props.theme.alertText};
      }
    }

    input {
      ${(props) => props.theme.input};
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

  .notice-msg {
    display: none;
    margin-top: 5rem;
    line-height: 2;

    span {
      color: ${(props) => props.theme.alertText};
    }

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

const LoginNewPw = () => {
  const ref = useRef();
  const ref2 = useRef();

  const [pw, setPw] = useState();
  const [alertMsg, setAlertMsg] = useState();

  const onSetPw = useCallback(
    (e) => {
      setPw({ ...pw, new: e.currentTarget.value });
    },
    [pw]
  );

  const onPwCheck = useCallback(
    (e) => {
      setPw({ ...pw, confirm: e.currentTarget.value });
    },
    [pw]
  );

  useEffect(() => {
    if (pw?.confirm) {
      if (pw.new === pw.confirm) setAlertMsg("");
      else setAlertMsg("비밀번호가 일치하지 않습니다.");
    }
  }, [pw]);

  return (
    <LoginNewPwContainer>
      <div className="inner3">
        <h1>비밀번호 재설정</h1>

        <form className="new-pw">
          <h2>새 비밀번호 입력</h2>
          <div>
            <input type="password" ref={ref} onBlur={onSetPw} placeholder="새 비밀번호 입력" />
            <input type="password" ref={ref2} onBlur={onPwCheck} placeholder="비밀번호 확인" />
            <p>{alertMsg}</p>
          </div>
          <button className="fill-btn" type="submit">
            비밀번호 변경
          </button>
        </form>

        <div className="to-main">
          <Link to="/">
            <img src={titleImg} alt="메인화면 돌아가기" />
          </Link>
        </div>

        <div className="notice-msg send">
          <p>비밀번호를 변경했습니다!</p>
        </div>
      </div>
    </LoginNewPwContainer>
  );
};

export default LoginNewPw;
