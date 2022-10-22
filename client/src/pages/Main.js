import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import notice1 from "../assets/img/notice.png";
import GridList from "../components/GridList";
import ProductItem from "../components/ProductItem.js";
import SeekItem from "../components/SeekItem.js";
import SideNav from "../components/SideNav";

const MainContainer = styled.main`
  margin-top: 3.7rem;

  .section-title {
    text-align: center;
    background-color: ${(props) => props.theme.ivory};

    img {
      max-width: 100%;
    }
  }

  .section-main {
    padding: 2.2rem 0;

    .categories {
      margin-bottom: 2.5rem;

      li {
        margin-right: 2rem;
        font-size: 1rem;
        font-weight: bold;
      }
    }

    .posts {
      margin-bottom: 2.5rem;
      padding: 1rem 0;

      h2 {
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }

  @media ${(props) => props.theme.desktop} {
    .posts ul {
      li:last-of-type {
        display: none;
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

      <div className="wrapper">
        <section className="section-main">
          <div className="inner">
            <SideNav />

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
              <h2>지금 인기 있는 공구</h2>
              <GridList data={Array(6).fill(true)}>
                <ProductItem
                // url=""
                // name="이름"
                // join="숫자주세요"
                // title="타이틀"
                // category={["카테1", "카테2"]}
                />
              </GridList>
            </div>

            <div className="posts ">
              <h2>이런 공구는 어때요?</h2>
              <GridList data={Array(6).fill(true)}>
                <ProductItem
                // url=""
                // name="이름"
                // join="숫자주세요"
                // title="타이틀"
                // category={["카테1", "카테2"]}
                />
              </GridList>
            </div>

            <div className="posts ">
              <h2>총대 찾아요</h2>
              <GridList data={Array(6).fill(true)}>
                <SeekItem
                // url=""
                // name="이름"
                // join="숫자주세요"
                // title="타이틀"
                // category={["카테1", "카테2"]}
                />
              </GridList>
            </div>

            <div className="posts ">
              <h2>새로 등록된 공구</h2>

              <GridList data={Array(6).fill(true)}>
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
    </MainContainer>
  );
};

export default Main;
