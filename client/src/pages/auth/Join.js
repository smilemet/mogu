import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import titleImg from "../../assets/img/title.png";
import { sendMail } from "../../slices/SendMailSlice.js";

import Swal from "sweetalert2";
import RegexHelperTF from "../../utils/RegexHelperTF";

const Join = () => {
  const dispatch = useDispatch();

  const emailRef = useRef();

  const [isSended, setIsSended] = useState(false);

  /** 이메일 전송 */
  const onSendMail = useCallback(
    async (e) => {
      console.log(process.env.REACT_APP_API_URL);
      e.preventDefault();

      const email = emailRef.current.value.trim();

      try {
        if (!email) throw new Error("이메일을 입력해주세요.");
        if (!RegexHelperTF.email(email)) throw new Error("이메일을 확인해주세요.");

        const { payload } = await dispatch(sendMail({ email, type: "register" }));
        const { data } = payload;

        if (!data.success) throw new Error(data.message);

        setIsSended(true);
      } catch (err) {
        setIsSended(false);
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#cb54e5",
        });
      }
    },
    [dispatch]
  );

  return (
    <JoinContainer>
      <div className="wrapper">
        <div className="inner3">
          <h1>회원가입</h1>

          <form onSubmit={onSendMail}>
            <div className="email">
              <h2>이메일 인증</h2>
              <div>
                <input type="email" placeholder="이메일" ref={emailRef} />
              </div>
            </div>

            <button className="fill-btn" type="submit">
              인증 메일 보내기
            </button>
          </form>

          <div className="to-main">
            <Link to="/">
              <img src={titleImg} alt="메인화면 돌아가기" />
            </Link>
          </div>

          {isSended && (
            <>
              <div className="notice-msg send">
                <p>인증 메일을 보냈습니다!</p>
                <p>
                  <span className="alert">메일함</span>을 확인해주세요.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </JoinContainer>
  );
};

const JoinContainer = styled.main`
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

export default Join;
