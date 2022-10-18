import React from "react";

import styled from "styled-components";

const UserEditContainer = styled.main`
  padding-top: 6rem;

  * {
    width: 100%;
  }

  .inner3 {
    max-width: 500px;
  }

  section {
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
    font-weight: 500;
  }

  .container {
    margin-bottom: 1rem;
  }
`;

const UserEdit = () => {
  return (
    <UserEditContainer>
      <div className="wrapper">
        <div className="inner3">
          <section>
            <h2>회원정보 수정</h2>
            <div className="container">
              <h3>
                <label htmlFor="">이름</label>
              </h3>
              <div>
                <input type="text" />
              </div>
            </div>
            <div className="container">
              <h3>
                <label htmlFor="">이메일</label>
              </h3>
              <div>
                <input type="email" />
              </div>
            </div>
            <div className="container">
              <h3>
                <label htmlFor="">비밀번호 변경</label>
              </h3>
              <div>
                <input type="password" />
              </div>
            </div>
            <div className="container">
              <h3>
                <label htmlFor="">변경 비밀번호 확인</label>
              </h3>
              <div>
                <input type="password" />
              </div>
            </div>
          </section>

          <section>
            <h2>입금정보 수정</h2>
            <div className="container">
              <h3>
                <label htmlFor="">은행명</label>
              </h3>
              <div>
                <input type="text" />
              </div>
            </div>
            <div className="container">
              <h3>
                <label htmlFor="">예금주</label>
              </h3>
              <div>
                <input type="text" />
              </div>
            </div>
            <div className="container">
              <h3>
                <label htmlFor="">계좌번호</label>
              </h3>
              <div>
                <input type="email" />
              </div>
            </div>
          </section>

          <section>
            <h2>배송정보 수정</h2>
            <div className="container">
              <h3>
                <label htmlFor="">수신인</label>
              </h3>
              <div>
                <input type="text" />
              </div>
            </div>
            <div className="container">
              <h3>
                <label htmlFor="">주소</label>
              </h3>
              <div>
                <input type="email" />
              </div>
            </div>
            <div className="container">
              <h3>
                <label htmlFor="">상세 주소</label>
              </h3>
              <div>
                <input type="password" />
              </div>
            </div>
            <div className="container">
              <h3>
                <label htmlFor="">우편번호</label>
              </h3>
              <div>
                <input type="password" />
              </div>
            </div>
            <div className="container">
              <h3>
                <label htmlFor="">연락처</label>
              </h3>
              <div>
                <input type="password" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </UserEditContainer>
  );
};

export default UserEdit;
