import React, { useCallback, useEffect, useInsertionEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import notice1 from "../assets/img/notice.png";
import GridList from "../components/GridList";
import SideNav from "../components/SideNav.js";

import { getProductPopular, getProductNews, getProductRecommend } from "../slices/ProductsSlice.js";
import { getSeekList } from "../slices/SeekSlice.js";

const Main = () => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.category);
  const { data: productLists } = useSelector((state) => state.productLists);
  const { data: seekList } = useSelector((state) => state.seekList);

  const templateArr = Array(6).fill(true);

  /** 페이지 마운트 시 section별 게시글 로딩 */
  useEffect(() => {
    dispatch(getProductPopular());
    dispatch(getProductNews());
    dispatch(getProductRecommend());
    dispatch(getSeekList({ size: 6, page: 1, sort: "random" }));
  }, [dispatch]);

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
              {category.data?.map((v) => {
                return (
                  <li>
                    <Link to="/">{`#${v}`}</Link>
                  </li>
                );
              })}
            </ul>

            <div className="posts">
              <h2>지금 인기 있는 공구</h2>
              {productLists?.popular ? (
                <GridList data={productLists.popular} type="product" />
              ) : (
                <GridList data={templateArr} />
              )}
            </div>

            <div className="posts ">
              <h2>새로 등록된 공구</h2>
              {productLists?.news ? (
                <GridList data={productLists.news} type="product" />
              ) : (
                <GridList data={templateArr} />
              )}
            </div>

            <div className="posts ">
              <h2>총대 찾아요</h2>
              {seekList ? <GridList data={seekList} type="seek" /> : <GridList data={templateArr} />}
            </div>

            <div className="posts ">
              <h2>이런 공구는 어때요?</h2>
              {productLists?.recommend ? (
                <GridList data={productLists.recommend} type="product" />
              ) : (
                <GridList data={templateArr} />
              )}
            </div>
          </div>
        </section>
      </div>
    </MainContainer>
  );
};

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

export default Main;
