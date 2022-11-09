import React, { useState } from "react";
import styled from "styled-components";

import CreateHeading from "../../components/CreateHeading.js";
import QnaAdd from "../../components/QnaAdd.js";
import SelectionAdd from "../../components/SelectionAdd.js";

const ProductCreateContainer = styled.main`
  ${(props) => props.theme.mainPadding}
  ${(props) => props.theme.detailPage}

  &,
  * {
    width: 100%;
  }

  article + article {
    margin-top: 2rem;
  }

  h4 {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    ${(props) => props.theme.inputSomething}
  }

  .input-container {
    &.flex-box {
      & > div + div {
        margin-left: 1rem;
      }
    }

    p {
      margin-bottom: 0.5rem;
    }
  }

  .input-container + div {
    align-items: center;
    margin-top: 1rem;
  }

  .flex-box .input-container + div {
    margin-top: 0;
  }

  .added-item > div {
    margin-top: 0.3rem;

    &:first-of-type {
      margin-top: 0;
    }
  }

  .add-btn button {
    display: block;
    ${(props) => props.theme.buttonPlus}
    width: 10rem;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
  }

  .create-btn button {
    ${(props) => props.theme.buttonFill}
  }

  button {
    margin-top: 1rem;
  }
`;

const ProductCreate = () => {
  const [count, setCount] = useState();
  const [selections, setSelections] = useState([]);
  const [qnas, setQnas] = useState(1);

  const onPlusSelection = () => {
    setSelections([...selections, count]);
  };

  const onPlusQna = () => {};

  return (
    <ProductCreateContainer>
      <div className="wrapper">
        <div className="inner2">
          <section>
            <CreateHeading className="heading">
              <div className="post-item">
                <label htmlFor="process">
                  공구방식
                  <span className="alert">*</span>
                </label>
                <input type="text" id="process" placeholder="ex) 1차 입금 > 현물도착 > 2차 입금" />

                <label htmlFor="shipping">
                  배송정보
                  <span className="alert">*</span>
                </label>
                <input type="text" id="shipping" placeholder="ex) 국내 배송비 별도" />
              </div>

              <div className="post-item flex-box">
                <div>
                  <label htmlFor="title">
                    공구시작일<span className="alert">*</span>
                  </label>
                  <input type="date" id="title" />
                </div>

                <div>
                  <label htmlFor="title">
                    공구종료일<span className="alert">*</span>
                  </label>
                  <input type="date" id="title" />
                </div>
              </div>
            </CreateHeading>
          </section>

          <hr />

          <section>
            <h3>상품 정보</h3>

            <article>
              <h4>
                상품 등록<span className="alert">*</span>
              </h4>
              <div className="added-item">
                {Array(selections)
                  .fill(true)
                  .map((v, i) => (
                    <SelectionAdd key={i} />
                  ))}
              </div>
              <div className="add-btn">
                <button type="button" onClick={() => setSelections(selections + 1)}>
                  + 상품 추가하기
                </button>
              </div>
            </article>

            <article>
              <h4>
                글 내용<span className="alert">*</span>
              </h4>
            </article>

            <article>
              <h4>자주 묻는 질문</h4>
              <div className="added-item">
                {Array(qnas)
                  .fill(true)
                  .map((v) => (
                    <QnaAdd />
                  ))}
              </div>
              <div className="add-btn">
                <button type="button" onClick={() => setQnas(qnas + 1)}>
                  + 질답 추가하기
                </button>
              </div>
            </article>
          </section>

          <hr />

          <section>
            <h3>입금 정보</h3>

            <article>
              <div className="input-container flex-box">
                <div>
                  <p>
                    은행명<span className="alert">*</span>
                  </p>
                  <input type="text" />
                </div>
                <div>
                  <p>
                    예금주<span className="alert">*</span>
                  </p>
                  <input type="text" />
                </div>
              </div>
              <div className="input-container">
                <p>
                  계좌번호<span className="alert">*</span>
                </p>
                <input type="text" />
              </div>
            </article>
          </section>

          <div className="create-btn">
            <button type="button">새 글 등록하기</button>
          </div>
        </div>
      </div>
    </ProductCreateContainer>
  );
};

export default ProductCreate;
