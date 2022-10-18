import React, { useState } from "react";
import styled from "styled-components";

import GridList from "../components/GridList.js";
import ProductItem from "../components/ProductItem.js";

import fakeImg from "../assets/img/fakeImg.png";
import moreArrow from "../assets/img/more-arrow.png";
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
        flex-grow: 1;

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

      .post-btn {
        margin: 0 auto;
        margin-top: 1rem;
        margin-bottom: 3rem;

        button {
          width: 100%;
          font-size: 0.875rem;
        }

        .together-btn {
          ${(props) => props.theme.button}
          padding: 1.5rem 0;
          margin-bottom: 0.5rem;
          font-weight: normal;
        }

        .letsgo-btn {
          ${(props) => props.theme.buttonFill}
          padding: 1.5rem 0;
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

        .more-arrow {
          margin-left: 1rem;
          display: inline-block;
          width: 0.6rem;
          height: 0.6rem;
          transform: translate(0, 15%);
          background: no-repeat center/contain url(${moreArrow});
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

  .text-content {
    padding: 1rem 1rem;
    text-align: justify;
    word-break: keep-all;
  }

  .content {
    p {
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
      line-height: 1.5;
    }
  }

  @media ${(props) => props.theme.medium} {
    .heading {
      display: block;

      .h-left {
        width: 100%;
      }

      .h-right {
        width: 100%;
        padding-left: 0;
      }
    }

    .heading + hr {
      margin-top: 1rem;
    }

    .otherItem {
      ul {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    .otherItem {
      ul {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  }
`;

const Detail = () => {
  const [count, setCount] = useState({});

  return (
    <DetailContainer>
      <div className="wrapper">
        <div className="inner">
          <section className="heading flex-box">
            <div className="h-left">
              <img src={fakeImg} alt="상품이미지" />
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

              <div className="post-btn">
                <button className="together-btn">
                  같이할래요 <span className="alert">★28</span>
                </button>
                <button className="letsgo-btn">총대 매고 공구글 작성하기!</button>
              </div>

              <div className="post-by">
                <div className="flex-box">
                  <span className="icon" />
                  <span className="name">공구하다가사탕진</span>
                  <span className="more-arrow" />
                </div>
                <div className="rate">
                  <span>★★★★☆</span>
                  <span>(5)</span>
                </div>
              </div>
            </div>
          </section>

          <hr />

          <section className="content">
            <h3>요청 사항</h3>
            <div className="text-content">
              <p>
                오늘도 또 우리 수탉이 막 쫓기었다. 내가 점심을 먹고 나무를 하러 갈 양으로 나올
                때이었다. 산으로 올라서려니까 등 뒤에서 푸드득 푸드득 하고 닭의 횃소 리가 야단이다.
                깜짝 놀라서 고개를 돌려 보니 아니나 다르랴 두 놈이 또 얼리 었다.*
              </p>
              <p>
                점순네 수탉(대강이가 크고 똑 오소리같이 실팍하게* 생긴 놈)이 덩저리 작은 우리 수탉을
                함부로 해내는 것이다. 그것도 그냥 해내는 것이 아니라 푸드득하 고 면두*를 쪼고
                물러섰다가 좀 사이를 두고 푸드득하고 모가지를 쪼았다. 이렇 게 멋을 부려 가며
                여지없이 닦아* 놓는다. 그러면 이 못생긴 것은 쪼일 적마다 주둥이로 땅을 받으며 그
                비명이 킥, 킥, 할뿐이다. 물론 미처 아물지도 않은 면 두를 또 쪼이며 붉은 선혈은 뚝뚝
                떨어진다. 이걸 가만히 내려다보자니 내 대강 이가 터져서 피가 흐르는 것같이 두 눈에서
                불이 번쩍 난다. 대뜸 지게막대기를 메고 달려들어 점순네 닭을 후려칠까 하다가 생각을
                고쳐먹고 헛매질로 떼어만 놓았다.
              </p>
              <p>
                - 계집애가 나물을 캐러 가면 갔지 남 울타리 엮는 데 쌩이질*을 하는 것은 다 뭐냐.
                그것도 발소리를 죽여 가지고 등 뒤로 살며시 와서,
              </p>
              <p>- 나흘 전 감자건만 하더라도 나는 저에게 조금도 잘못한 것은 없다. </p>
              <p>- 나흘 전 감자건만 하더라도 나는 저에게 조금도 잘못한 것은 없다. </p>
            </div>
          </section>

          <hr />

          <section className="otherItem">
            <h3>같은 카테고리의 다른 요청</h3>
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
      </div>
    </DetailContainer>
  );
};

export default Detail;
