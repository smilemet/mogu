import React, { useCallback, useEffect, useRef, useState } from "react";

import styled from "styled-components";

const UserEditContainer = styled.main`
  padding-top: 6rem;

  * {
    width: 100%;
  }

  .inner3 {
    max-width: 500px;
  }

  .section {
    margin-bottom: 3.5rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    text-align: left;
  }

  .alert {
    text-align: right;
  }

  .container {
    margin-bottom: 1rem;

    div {
      ${(props) => props.theme.input}

      input {
        outline: none;
        border: none;
      }
    }
  }

  .edit-btn {
    ${(props) => props.theme.buttonFill};
    color: #fff;
    cursor: pointer;
  }
`;

const UserEdit = () => {
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
    <UserEditContainer>
      <div className="wrapper">
        <div className="inner3">
          <form>
            <div className="section">
              <h2>회원정보 수정</h2>
              <div className="container">
                <h3>
                  <label htmlFor="name">이름</label>
                </h3>
                <div>
                  <input type="text" placeholder="이름을 입력해주세요." id="name" />
                </div>
              </div>
              <div className="container">
                <h3>
                  <label htmlFor="emal">이메일</label>
                </h3>
                <div>
                  <input type="email" placeholder="이메일을 입력해주세요." id="emal" />
                </div>
              </div>
              <div className="container">
                <h3>
                  <label htmlFor="pw">비밀번호 변경</label>
                </h3>
                <div>
                  <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    id="pw"
                    onBlur={onSetPw}
                  />
                </div>
              </div>
              <div className="container">
                <h3>
                  <label htmlFor="pw-repeat">변경 비밀번호 확인</label>
                </h3>
                <div>
                  <input
                    type="password"
                    placeholder="비밀번호를 한 번 더 입력해주세요."
                    id="pw-repeat"
                    onBlur={onPwCheck}
                  />
                </div>
                <p className="alert">{alertMsg}</p>
              </div>
            </div>

            <div className="section">
              <h2>입금정보 수정</h2>
              <div className="container">
                <h3>
                  <label htmlFor="bank">은행명</label>
                </h3>
                <div>
                  <input type="text" placeholder="은행명을 입력해주세요." id="bank" />
                </div>
              </div>
              <div className="container">
                <h3>
                  <label htmlFor="account-holder">예금주</label>
                </h3>
                <div>
                  <input
                    type="text"
                    placeholder="예금주 성함을 입력해주세요."
                    id="account-holder"
                  />
                </div>
              </div>
              <div className="container">
                <h3>
                  <label htmlFor="account-no">계좌번호</label>
                </h3>
                <div>
                  <input type="text" placeholder="'-'를 제외하고 입력해주세요." id="account-no" />
                </div>
              </div>
            </div>

            <div className="section">
              <h2>배송정보 수정</h2>
              <div className="container">
                <h3>
                  <label htmlFor="receiver">수신인</label>
                </h3>
                <div>
                  <input type="text" placeholder="수신인 성함을 입력해주세요." id="receiver" />
                </div>
              </div>
              <div className="container">
                <h3>
                  <label htmlFor="address">주소</label>
                </h3>
                <div>
                  <input type="text" placeholder="주소를 입력해주세요." id="address" />
                </div>
              </div>
              <div className="container">
                <h3>
                  <label htmlFor="address2">상세 주소</label>
                </h3>
                <div>
                  <input
                    type="password"
                    placeholder="동, 호수 등 상세주소를 입력해주세요."
                    id="address2"
                  />
                </div>
              </div>
              <div className="container">
                <h3>
                  <label htmlFor="post-code">우편번호</label>
                </h3>
                <div>
                  <input
                    type="password"
                    placeholder="우편번호 5자리를 입력해주세요."
                    id="post-code"
                  />
                </div>
              </div>
              <div className="container">
                <h3>
                  <label htmlFor="phone">연락처</label>
                </h3>
                <div>
                  <input type="password" placeholder="휴대폰 연락처를 입력해주세요." id="phone" />
                </div>
              </div>
            </div>

            <button className="edit-btn" type="submit">
              회원정보 수정하기
            </button>
          </form>
        </div>
      </div>
    </UserEditContainer>
  );
};

export default UserEdit;
