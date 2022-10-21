import React, { useState } from "react";
import styled from "styled-components";

import Selection from "../components/Selection.js";
import CommentList from "../components/CommentList.js";
import GridList from "../components/GridList.js";
import ProductItem from "../components/ProductItem.js";

import DetailHeading from "../components/DetailHeading.js";

const ProductDetailContainer = styled.main`
  ${(props) => props.theme.mainPadding}
  ${(props) => props.theme.detailPage}

  .heading {
    table {
      tr {
        line-height: 1.7;
      }
    }

    .post-process {
      margin-bottom: 1.5rem;

      table td:first-of-type {
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

        table td:first-of-type {
          width: 47%;
        }
      }

      p {
        font-size: ${(props) => props.theme.smallFont};
        text-align: right;
        margin-bottom: 2rem;
      }
    }
  }

  .selection {
    .item {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 0.5rem;
      grid-row-gap: 0.5rem;
    }

    .order-btn {
      margin: 0 auto;
      margin-top: 1rem;

      button {
        width: 100%;
        ${(props) => props.theme.buttonFill}
        font-size: 1rem;
      }
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
    }

    .text-content {
      & > div {
        margin-bottom: 1.5rem;
      }

      p {
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
        line-height: 1.5;
      }
    }
  }
`;

const ProductDetail = () => {
  const [count, setCount] = useState({});

  const data = {
    title: "노랑공방 에디션 공구 열어주실 분!",
    createAt: "2020-10-26",
    updateAt: "2020-10-26",
    category: ["인형옷", "드레스", "20cm"],
    user: {
      id: "goggu@gmail.com",
      name: "공구하다가사탕진",
      rate: 4.54,
    },
    items: [
      {
        name: "상품 제목을 입력하세요.",
        price: 18900,
        limit: 2,
        stock: 100,
      },
      {
        name: "상품 제목을 입력하세요.",
        price: 18900,
        limit: 2,
        stock: 100,
      },
    ],
    process: "1차 입금 > 현물도착 > 2차 입금",
    shipping: true,
    startDate: "2022.10.01 20:00",
    endDate: "2022.10.04 20:00",
    content: "긴 장문",
    faq: [
      { q: "질문", a: "내용" },
      { q: "질문", a: "내용" },
      { q: "질문", a: "내용" },
    ],
  };

  return (
    <ProductDetailContainer data={data}>
      <div className="wrapper">
        <div className="inner">
          <section>
            <DetailHeading
              className="heading"
              title={data.title}
              price={Math.min(...data.items.map((v) => v.price))}
              category={data.category}
            >
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
                  공구 마감이 <span className="alert">3일</span> 남았습니다.
                </p>
              </div>
            </DetailHeading>
          </section>

          <hr />

          <section className="selection">
            <h3>공구 물품</h3>
            <div className="item">
              {data.items.map((v) => {
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

          <section className="FAQ">
            <h3>많이 묻는 질문</h3>
            <p className="alert">*질문 전에 꼭 확인해주세요.</p>
            <div className="text-content">
              <div>
                <p className="bold">Q. 여기에는 무엇을 적나요?</p>
                <p>
                  A. 판매자가 FAQ 답변을 적어두는 곳이에요. 자주 들어오는 문의사항에 대한 것은
                  이곳에 적어요.
                </p>
              </div>
              <div>
                <p className="bold">Q. 여기에는 무엇을 적나요?</p>
                <p>
                  A. 판매자가 FAQ 답변을 적어두는 곳이에요. 자주 들어오는 문의사항에 대한 것은
                  이곳에 적어요.
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

          <section className="otherItem">
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
      </div>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
