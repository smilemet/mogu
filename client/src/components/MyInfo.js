import React from "react";

import styled from "styled-components";

const MyInfoContainer = styled.div`
  article {
    margin-bottom: 3.5rem;
    flex-direction: column;
    flex-grow: 1;

    &:first-of-type {
      margin-right: 2rem;
    }
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: bold;
  }

  h3 + div {
    border: 1px solid ${(props) => props.theme.gray};
    padding: 1.5rem 2rem;
    flex-grow: 1;

    table {
      width: 100%;

      tr {
        line-height: 2.5;

        td:first-of-type {
          width: 25%;
          font-weight: bold;
        }
      }
    }
  }
`;

const MyInfo = () => {
  return (
    <MyInfoContainer>
      <section className="flex-box">
        <article className="flex-box">
          <h3>입금 정보</h3>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>은행명</td>
                  <td>한국은행</td>
                </tr>
                <tr>
                  <td>계좌번호</td>
                  <td>110-123456-54321</td>
                </tr>
                <tr>
                  <td>예금주</td>
                  <td>홍길동</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className="flex-box">
          <h3>배송 정보</h3>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>수신인</td>
                  <td>홍길동</td>
                </tr>
                <tr>
                  <td>주소</td>
                  <td>서울시 마포구 홍길동로 12-19 102호</td>
                </tr>
                <tr>
                  <td>우편번호</td>
                  <td>01234</td>
                </tr>
                <tr>
                  <td>연락처</td>
                  <td>010-1234-4567</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </MyInfoContainer>
  );
};

export default MyInfo;
