import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import notice1 from "../assets/img/notice.png";
import ProductItem from "../components/ProductItem";

const MainContainer = styled.main`
  .section-title {
    text-align: center;
    padding-top: 1rem;
    background-color: #f7f6f4;

    img {
      max-width: 100%;
    }
  }

  .section-main {
    padding: 2.2rem 0;

    .categories {
      li {
        font-size: 1.2rem;
        font-weight: bold;
        margin-right: 2rem;
      }
    }

    .posts {
      padding: 1rem 0;

      ul {
        ${(props) => props.theme.textOverflow}
        li {
          margin-right: 1rem;

          &:last-of-type {
            margin-right: 0;
          }
        }
      }
    }
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <section className="section-title">
        <img className="notice-img" src={notice1} alt="모두의 공구 정식 서비스 오픈!" />
      </section>

      {/* <section className="section-main">
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

          <div className="posts">
            <ul className="flex-box">
              {Array(6)
                .fill(true)
                .map((v) => {
                  return (
                    <li>
                      <ProductItem />
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="posts "></div>

          <div className="posts "></div>

          <div className="posts "></div>
        </div>
      </section> */}
    </MainContainer>
  );
};

export default Main;
