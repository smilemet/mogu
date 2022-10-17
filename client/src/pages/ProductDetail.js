import React, { useState } from "react";
import styled from "styled-components";

import Selection from "../components/Selection.js";
import CommentList from "../components/CommentList.js";
import GridList from "../components/GridList.js";
import ProductItem from "../components/ProductItem.js";

import FakeImg from "../assets/img/fakeImg.png";
import MoreIcon from "../assets/img/right-arrow.png";
import bookmark from "../assets/img/bookmark.png";
import bookmarkFill from "../assets/img/bookmark-fill.png";

const DetailContainer = styled.main`
  padding-top: 5rem;

  hr {
    margin: 2.5rem 0 1.5rem;
    border: none;
    border-top: 1px solid ${(props) => props.theme.gray};
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

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
      padding: 1rem 0 1rem 2.5rem;
      position: relative;
      flex-direction: column;

      & > * {
        width: 100%;
      }

      .post-title {
        .title-box {
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.2rem;

          h2 {
            font-size: 1.5rem;
            font-weight: bold;
          }

          .bookmark {
            width: 1.5rem;
            top: 0.5rem;
            right: 0.7rem;
          }
        }

        p {
          font-size: 1.75rem;
          margin-bottom: 1.2rem;
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
        flex-grow: 1;

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
              width: 47%;
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        right: 0;
        bottom: 2rem;

        & > div {
          align-items: center;
        }

        .icon {
          flex-shrink: 0;
          display: inline-block;
          width: 2rem;
          height: 2rem;
          margin-right: 0.5rem;
          border-radius: 50%;
          background-color: ${(props) => props.theme.gray};
        }

        .name {
          /* ${(props) => props.theme.textOverflow} */
        }

        .more {
          margin-left: 1rem;
          display: inline-block;
          width: 0.6rem;
          height: 0.6rem;
          transform: translate(0, 15%);
          background: no-repeat center/contain url(${MoreIcon});
        }

        .rate {
          text-align: right;
          right: 0;
          bottom: 2rem;
        }
      }
    }
  }

  section ~ section {
    margin-bottom: 3rem;
  }

  .selection {
    .item {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 0.5rem;
      grid-row-gap: 0.5rem;
    }

    .order-btn {
      /* width: 50%; */
      margin: 0 auto;
      margin-top: 1rem;

      button {
        width: 100%;
        height: 2.5rem;
        ${(props) => props.theme.buttonFill}
      }
    }
  }

  .text-content {
    padding: 1rem 1rem;
    text-align: justify;
    word-break: keep-all;
  }

  .content,
  .FAQ {
    p {
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
      line-height: 1.5;
    }
  }

  .FAQ {
    & > h3,
    & > p {
      display: inline-block;
    }

    & > p {
      margin-left: 1rem;
      font-size: 0.875rem;
      color: ${(props) => props.theme.alertText};
    }

    .text-content {
      & > div {
        margin-bottom: 1.5rem;
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    .heading {
      display: block;

      .h-left {
        width: 100%;
      }

      .h-right {
        width: 100%;
        padding-left: 0;
      }

      .post-date {
        & > div {
          padding-left: 0;
        }

        p {
          margin-bottom: 2rem;
        }
      }
    }

    .heading + hr {
      margin-top: 1rem;
    }
  }
`;

const Detail = () => {
  const [count, setCount] = useState({});

  return (
    <DetailContainer>
      <div className="inner">
        <section className="heading flex-box">
          <div className="h-left">
            <img src={FakeImg} alt="상품이미지" />
          </div>
          <div className="h-right flex-box">
            <div className="post-title">
              <div className="title-box flex-box">
                <h2>노랑공방 에디션 공구 열어주실 분!</h2>
                <img className="bookmark" src={bookmark} alt="즐겨찾기 하기" />
              </div>
              <p>21,000원~</p>
              <div className="category">
                <span>#인형옷</span>
                <span>#드레스</span>
                <span>#20cm</span>
              </div>
            </div>
            <div className="post-process">
              <table>
                <tbody>
                  <tr>
                    <td>공구방식</td>
                    <td colSpan={3}>1차 입금 &gt; 현물도착 &gt; 2차 입금</td>
                  </tr>
                  <tr>
                    <td>배송정보</td>
                    <td colSpan={3}>국내 배송비 별도</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="post-date">
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>공구 시작일</td>
                      <td>2022.10.01 pm 08:00</td>
                    </tr>
                    <tr>
                      <td>공구 종료일</td>
                      <td>2022.10.03 pm 08:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                공구 마감이 <span>3일</span> 남았습니다.
              </p>
            </div>
            <div className="post-by">
              <div className="flex-box">
                <span className="icon" />
                <span className="name">공구하다가사탕진</span>
                <span className="more" />
              </div>
              <div className="rate">
                <span>★★★★☆</span>
                <span>(5)</span>
              </div>
            </div>
          </div>
        </section>

        <hr />

        <section className="selection">
          <h3>공구 물품</h3>
          <div className="item">
            {Array(3)
              .fill(true)
              .map((v) => {
                return <Selection setCount={setCount} />;
              })}
          </div>
          <div className="order-btn">
            <button type="button">주문하기</button>
          </div>
        </section>

        <hr />

        <section className="content">
          <h3>제품 안내</h3>
          <div className="text-content">
            <p>
              오늘도 또 우리 수탉이 막 쫓기었다. 내가 점심을 먹고 나무를 하러 갈 양으로 나올
              때이었다. 산으로 올라서려니까 등 뒤에서 푸드득 푸드득 하고 닭의 횃소 리가 야단이다.
              깜짝 놀라서 고개를 돌려 보니 아니나 다르랴 두 놈이 또 얼리 었다.*
            </p>
            <p>
              점순네 수탉(대강이가 크고 똑 오소리같이 실팍하게* 생긴 놈)이 덩저리 작은 우리 수탉을
              함부로 해내는 것이다. 그것도 그냥 해내는 것이 아니라 푸드득하 고 면두*를 쪼고
              물러섰다가 좀 사이를 두고 푸드득하고 모가지를 쪼았다. 이렇 게 멋을 부려 가며 여지없이
              닦아* 놓는다. 그러면 이 못생긴 것은 쪼일 적마다 주둥이로 땅을 받으며 그 비명이 킥, 킥,
              할뿐이다. 물론 미처 아물지도 않은 면 두를 또 쪼이며 붉은 선혈은 뚝뚝 떨어진다. 이걸
              가만히 내려다보자니 내 대강 이가 터져서 피가 흐르는 것같이 두 눈에서 불이 번쩍 난다.
              대뜸 지게막대기를 메고 달려들어 점순네 닭을 후려칠까 하다가 생각을 고쳐먹고 헛매질로
              떼어만 놓았다.
            </p>
            <p>
              - 계집애가 나물을 캐러 가면 갔지 남 울타리 엮는 데 쌩이질*을 하는 것은 다 뭐냐. 그것도
              발소리를 죽여 가지고 등 뒤로 살며시 와서,
            </p>
            <p>- 나흘 전 감자건만 하더라도 나는 저에게 조금도 잘못한 것은 없다. </p>
            <p>- 나흘 전 감자건만 하더라도 나는 저에게 조금도 잘못한 것은 없다. </p>
          </div>
        </section>

        <hr />

        <section className="FAQ">
          <h3>많이 묻는 질문</h3>
          <p>*질문 전에 꼭 확인해주세요.</p>
          <div className="text-content">
            <div>
              <p className="bold">Q. 여기에는 무엇을 적나요?</p>
              <p>
                A. 판매자가 FAQ 답변을 적어두는 곳이에요. 자주 들어오는 문의사항에 대한 것은 이곳에
                적어요.
              </p>
            </div>
            <div>
              <p className="bold">Q. 여기에는 무엇을 적나요?</p>
              <p>
                A. 판매자가 FAQ 답변을 적어두는 곳이에요. 자주 들어오는 문의사항에 대한 것은 이곳에
                적어요.
              </p>
            </div>
          </div>
        </section>

        <hr />

        <section className="QNA">
          <h3>문의하기</h3>
          <div className="text-content">
            <CommentList data={Array(3).fill(true)} />
          </div>
        </section>

        <hr />

        <section className="FAQ">
          <h3>같은 카테고리의 다른 상품</h3>
          <GridList data={Array(3).fill(true)}>
            <ProductItem
            // url=""
            // name="이름"
            // join="숫자숫자"
            // title="타이틀"
            // category={["카테1", "카테2"]}
            />
          </GridList>
        </section>
      </div>
    </DetailContainer>
  );
};

export default Detail;
