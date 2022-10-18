import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import GridList from "../components/GridList.js";
import ProductItem from "../components/ProductItem.js";

const ProductContainer = styled.main`
  padding-top: 6rem;

  .section-category {
    margin-bottom: 1rem;

    li {
      margin-right: 2rem;
      font-size: 1rem;
      font-weight: bold;
    }
  }

  .section-main {
    padding: 2.2rem 0;

    .posts {
      margin-bottom: 2.5rem;
      padding: 1rem 0;

      & > div {
        justify-content: space-between;
        margin-bottom: 1rem;
        font-weight: bold;

        p {
          font-size: 1rem;
        }

        h2 {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

const Product = () => {
  return (
    <ProductContainer>
      <div className="wrapper">
        <section className="section-category">
          <div className="inner">
            <ul className="categories flex-box">
              {Array(6)
                .fill(true)
                .map((v) => {
                  return (
                    <li>
                      <Link to="/">#카테고리명</Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>

        <section className="section-main">
          <div className="inner">
            <div className="posts">
              <div className="flex-box">
                <p>'어쩌고' 검색 결과입니다.</p>
                <h2>#공구모아요</h2>
              </div>
              <GridList data={Array(25).fill(true)}>
                <ProductItem
                // url=""
                // name="이름"
                // join="숫자주세요"
                // title="타이틀"
                // category={["카테1", "카테2"]}
                />
              </GridList>
            </div>
          </div>
        </section>
      </div>
    </ProductContainer>
  );
};

export default Product;
