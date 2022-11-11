import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "../../config/axios.js";

import { joinUser } from "../../slices/UserSlice.js";

import RegexHelper from "../../utils/RegexHelper.js";

import titleImg from "../../assets/img/title.png";

import Swal from "sweetalert2";

const JoinInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();
  const nicknameRef = useRef();

  const { isJoined } = useSelector((state) => state.user);

  const [noticeMsg, setNoticeMsg] = useState("");
  const [alertMsg, setAlertMsg] = useState({});
  const [result, setResult] = useState("");

  /** 주어진 해시코드가 유효한지 검증한다. */
  const checkHash = async (hash) => {
    try {
      if (!hash) throw new Error("해시코드가 전달되지 않았습니다.");

      const { data } = await axios.get("/auth/email/verify/" + hash);

      if (!data.success) throw new Error(data.error);

      setResult(data);
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: err.message,
        confirmButtonColor: "#cb54e5",
      });
    }
  };

  /** 페이지 첫 마운트 시 해시코드 검증 */
  useEffect(() => {
    checkHash(params.hash);
  }, [params.hash]);

  useEffect(() => {
    if (!result) return;

    if (result.email) {
      setNoticeMsg("이메일이 인증되었습니다.");
    } else {
      let timerInterval = null;

      Swal.fire({
        title: "유효하지 않은 주소입니다.",
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
  }, [navigate, result]);

  /** input box 이동 시마다 regex체크를 진행한다. */
  const onCheck = useCallback(
    async (e) => {
      const inputType = e.currentTarget.dataset.type;

      try {
        const password = passwordRef.current.value.trim();
        const passwordCheck = passwordCheckRef.current.value.trim();
        const nickname = nicknameRef.current.value.trim();

        if (inputType === "password") {
          RegexHelper.value(password, "비밀번호를 입력해주세요.");
          RegexHelper.password(
            password,
            "비밀번호는 영문자, 특수문자 및 숫자가 포함된 8~16자로 입력해주세요."
          );
          setAlertMsg({ ...alertMsg, password: null });
        }

        if (inputType === "passwordCheck") {
          RegexHelper.compareTo(passwordCheck, password, "비밀번호가 일치하지 않습니다.");
          setAlertMsg({ ...alertMsg, password2: null });
        }

        if (inputType === "nickname") {
          RegexHelper.value(nickname, "닉네임을 입력해주세요.");
          RegexHelper.maxLength(nickname, 15, "닉네임은 15글자 이하로 입력해주세요.");
          setAlertMsg({ ...alertMsg, nickname: null });
        }
      } catch (err) {
        inputType === "password"
          ? setAlertMsg({ ...alertMsg, password: err.message })
          : inputType === "passwordCheck"
          ? setAlertMsg({ ...alertMsg, password2: err.message })
          : setAlertMsg({ ...alertMsg, nickname: err.message });
      }
    },
    [alertMsg]
  );

  /** 회원가입 버튼 클릭 시 DB에 유저를 등록한다. */
  const onJoinMogu = useCallback(
    async (e) => {
      e.preventDefault();

      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const nickname = nicknameRef.current.value;

      dispatch(joinUser({ email, password, nickname }));
    },
    [dispatch]
  );

  /** 회원가입 버튼 클릭 후 에러 처리 */
  useEffect(() => {
    if (isJoined) {
      if (!isJoined.success) {
        Swal.fire({
          icon: "error",
          text: isJoined.message,
          confirmButtonColor: "#cb54e5",
        });
      } else {
        window.location.href = process.env.REACT_APP_ORIGIN + "/account/join/success";
      }
    }
  }, [isJoined]);

  return (
    <JoinInfoContainer>
      <div className="wrapper">
        <div className="inner3">
          <h1>회원가입</h1>

          <div className="notice-msg send">
            <span className="alert">{noticeMsg}</span>
          </div>

          <div className="user-info">
            <form onSubmit={onJoinMogu}>
              <h2>회원정보 입력</h2>
              <div>
                <input type="email" ref={emailRef} value={result.email || "null"} readOnly />
                <input
                  type="password"
                  ref={passwordRef}
                  onBlur={onCheck}
                  placeholder="새 비밀번호 입력"
                  data-type="password"
                />
                <input
                  type="password"
                  ref={passwordCheckRef}
                  onBlur={onCheck}
                  placeholder="비밀번호 확인"
                  data-type="passwordCheck"
                />
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
              <button className="fill-btn" type="submit">
                회원가입 완료!
              </button>
            </form>
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
    form > div {
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
