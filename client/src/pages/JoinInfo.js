import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import titleImg from "../assets/img/title.png";

const JoinInfoContainer = styled.div`
  padding-top: 4rem;
  text-align: center;

  * {
    width: 100%;
  }

  h1 {
    font-size: 1.75rem;
  }

  h2 {
    margin-bottom: 0.7rem;
    text-align: left;
    font-size: 1rem;
    font-weight: 500;
  }

  .user-info {
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
    margin-top: 1rem;
    line-height: 2;
    margin-bottom: 3rem;

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

const JoinInfo = () => {
  const ref = useRef();
  const ref2 = useRef();

  const [pw, setPw] = useState();
  const [alertMsg, setAlertMsg] = useState();
  const [alertMsg2, setAlertMsg2] = useState();

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

  const onNameCheck = useCallback(
    (e) => {
      if (e.currentTarget.value.trim() === "") {
        setAlertMsg2("닉네임을 입력하세요.");
      } else {
        setAlertMsg2("");
      }
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
    <JoinInfoContainer>
      <div className="inner3">
        <h1>회원가입</h1>

        <div className="notice-msg send">
          <span>이메일이 인증되었습니다.</span>
        </div>

        <div className="user-info">
          <h2>회원정보 입력</h2>
          <div>
            <input type="password" ref={ref} onBlur={onSetPw} placeholder="새 비밀번호 입력" />
            <input type="password" ref={ref2} onBlur={onPwCheck} placeholder="비밀번호 확인" />
            <p>{alertMsg}</p>
          </div>
          <div>
            <input type="text" onBlur={onNameCheck} placeholder="닉네임 입력" />
            <p>{alertMsg2}</p>
          </div>
          <button className="fill-btn" type="button">
            회원가입 완료!
          </button>
        </div>

        <div className="to-main">
          <Link to="/">
            <img src={titleImg} alt="메인화면 돌아가기" />
          </Link>
        </div>
      </div>
    </JoinInfoContainer>
  );
};

export default JoinInfo;
