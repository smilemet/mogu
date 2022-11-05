import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { verifyMail } from "../../slices/VerityMailSlice.js";

import titleImg from "../../assets/img/title.png";
import RegexHelperTF from "../../utils/RegexHelperTF.js";

import Swal from "sweetalert2";

const JoinInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const emailRef = useRef();
  const passwordRef = useRef();
  const nicknameRef = useRef();

  const { data: verifyResult } = useSelector((state) => state.verifyMail);

  const [noticeMsg, setNoticeMsg] = useState("");
  const [input, setInput] = useState({});
  const [alertMsg, setAlertMsg] = useState({});

  //페이지 첫 마운트 시 해시코드 검증
  useEffect(() => {
    dispatch(verifyMail(params.code));
  }, [dispatch, params.code]);

  useEffect(() => {
    if (verifyResult?.email) {
      setNoticeMsg("이메일이 인증되었습니다.");
    } else {
      let timerInterval;

      Swal.fire({
        title: "이메일 유효시간 만료",
        html: "3초 뒤 이메일 인증 페이지로 이동합니다.",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => Swal.showLoading(),
        willClose: () => clearInterval(timerInterval),
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
        }
      });

      setTimeout(() => {
        navigate("/account/join");
      }, 3000);
    }
  }, [verifyResult, navigate]);

  const onCheck = useCallback(
    async (e) => {
      let inputType = e.currentTarget.dataset.type;
      let inputValue = e.currentTarget.value.trim();

      const noPwMsg = "비밀번호를 입력해주세요.";
      const invalidPwMsg = "비밀번호는 영문자, 특수문자 및 숫자가 포함된 8~16자로 입력해주세요.";
      const misMatchPwMsg = "비밀번호가 틀렸습니다.";
      const noNickname = "닉네임을 입력해주세요.";

      // 암호 검증
      if (inputType === "password") {
        setInput({ ...input, password: inputValue });

        RegexHelperTF.value(inputValue)
          ? setAlertMsg({ ...alertMsg, password: null })
          : setAlertMsg({ ...alertMsg, password: noPwMsg });

        RegexHelperTF.password(inputValue)
          ? setAlertMsg({ ...alertMsg, password: null })
          : setAlertMsg({ ...alertMsg, password: invalidPwMsg });
      } else if (inputType === "passwordCheck") {
        if (!input.password) return;

        RegexHelperTF.compareTo(inputValue, input.password)
          ? setAlertMsg({ ...alertMsg, password2: null })
          : setAlertMsg({ ...alertMsg, password2: misMatchPwMsg });
      } else if (inputType === "nickname") {
        setInput({ ...input, nickname: inputValue });

        RegexHelperTF.value(inputValue)
          ? setAlertMsg({ ...alertMsg, nickname: null })
          : setAlertMsg({ ...alertMsg, nickname: noNickname });
      }
    },
    [alertMsg, input]
  );

  return (
    <JoinInfoContainer>
      <div className="wrapper">
        <div className="inner3">
          <h1>회원가입</h1>

          <div className="notice-msg send">
            <span className="alert">{noticeMsg}</span>
          </div>

          <div className="user-info">
            <h2>회원정보 입력</h2>
            <div>
              <input type="email" ref={emailRef} value={verifyResult?.email || "null"} readOnly />
              <input
                type="password"
                ref={passwordRef}
                onBlur={onCheck}
                placeholder="새 비밀번호 입력"
                data-type="password"
              />
              <input type="password" onBlur={onCheck} placeholder="비밀번호 확인" data-type="passwordCheck" />
              <p className="alert">{alertMsg.password || alertMsg.password2}</p>
            </div>
            <div>
              <input
                type="text"
                ref={nicknameRef}
                onBlur={onCheck}
                placeholder="닉네임 입력"
                data-type="nickname"
              />
              <p className="alert">{alertMsg.nickname}</p>
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
      </div>
    </JoinInfoContainer>
  );
};

const JoinInfoContainer = styled.main`
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

export default JoinInfo;
