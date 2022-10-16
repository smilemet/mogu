import React from "react";

import styled from "styled-components";

import FakeImg from "../assets/img/fakeImg.png";
import MoreIcon from "../assets/img/right-arrow.png";

const DetailContainer = styled.main`
  padding-top: 5rem;

  .heading {
    .h-left {
      width: 55%;
      height: 100%;
      aspect-ratio: 4 / 3.5;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .h-right {
      width: 45%;
      padding: 2rem 0 2rem 2.5rem;
      position: relative;

      & > * {
        width: 100%;
      }

      .post-title {
        h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        h3 {
          font-size: 1.75rem;
          margin-bottom: 2.2rem;
        }

        .category {
          margin-bottom: 2.5rem;

          span {
            margin-right: 1rem;

            &:last-of-type {
              margin-right: 0;
            }
          }
        }
      }

      .post-process table {
        margin-bottom: 1.5rem;

        tr {
          line-height: 1.7;
        }

        td:first-of-type {
          width: 37%;
        }
      }

      .post-date {
        div {
          padding: 1.5rem 1rem;
          font-size: 1rem;
          border-top: 1px solid ${(props) => props.theme.lightGray};
          border-bottom: 1px solid ${(props) => props.theme.lightGray};
          margin-bottom: 0.7rem;

          table {
            tr {
              line-height: 1.7;
            }

            td:first-of-type {
              width: 45%;
            }
          }
        }

        p {
          font-size: ${(props) => props.theme.smallFont};
          text-align: right;

          span {
            color: ${(props) => props.theme.alertText};
          }
        }
      }

      .post-by {
        width: 90%;
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 2rem;

        .icon {
          flex-shrink: 0;
          display: inline-block;
          width: 2rem;
          height: 2rem;
          margin-right: 0.5rem;
          border-radius: 50%;
          background-color: ${(props) => props.theme.gray};
        }

        .more {
          display: inline-block;
          width: 1.5rem;
          height: 1.5rem;
          background: url({MoreIcon});
        }
      }

      .post-rate {
        text-align: right;
        position: absolute;
        right: 0;
        bottom: 2rem;
      }
    }
  }
`;

const Detail = () => {
  return (
    <DetailContainer>
      <div className="inner">
        <section className="heading flex-box">
          <div className="h-left">
            <img src={FakeImg} alt="상품이미지" />
          </div>
          <div className="h-right">
            <div className="post-title">
              <h2>파랑공방 11월 신상! 선착 50인 모아요~</h2>
              <h3>21,000원~</h3>
              <div className="category">
                <span>#인형옷</span>
                <span>#드레스</span>
                <span>#20cm</span>
              </div>
            </div>
            <div className="post-process">
              <table>
                <tr>
                  <td>공구방식</td>
                  <td colSpan={3}>1차 입금 &gt; 현물도착 &gt; 2차 입금</td>
                </tr>
                <tr>
                  <td>배송정보</td>
                  <td colSpan={3}>국내 배송비 별도</td>
                </tr>
              </table>
            </div>
            <div className="post-date">
              <div>
                <table>
                  <tr>
                    <td>공구 시작일</td>
                    <td>2022.10.01 pm 08:00</td>
                  </tr>
                  <tr>
                    <td>공구 종료일</td>
                    <td>2022.10.03 pm 08:00</td>
                  </tr>
                </table>
              </div>
              <p>
                공구 마감이 <span>3일</span> 남았습니다.
              </p>
            </div>
            <div className="post-by">
              <span className="icon" />
              <span className="name">공구하다가사탕진</span>
              <span className="more" />
            </div>
            <div className="post-rate">
              <span>★★★★☆</span>
              <span>(5)</span>
            </div>
          </div>
        </section>
        <section className="selection">
          <h3>공구 물품</h3>
          <div className="item"></div>
        </section>
        <section className="content"></section>
      </div>
    </DetailContainer>
  );
};

export default Detail;
