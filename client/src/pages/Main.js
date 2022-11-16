import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { getProductPopular, getProductNews, getProductRecommend } from "../slices/ProductSlice.js";
import { getSeekList } from "../slices/SeekSlice.js";

import SideNav from "../components/SideNav.js";
import CategoryList from "../components/CategoryList.js";
import GridList from "../components/GridList.js";

import notice1 from "../assets/img/notice.png";

const Main = () => {
  const dispatch = useDispatch();

  const { popular, news, recommend } = useSelector((state) => state.productList);
  const { data: seekList } = useSelector((state) => state.seekList);

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

            <CategoryList />

            <div className="posts">
              <h2>지금 인기 있는 공구</h2>
              <GridList data={popular} type="product" />
            </div>

            <div className="posts ">
              <h2>새로 등록된 공구</h2>
              <GridList data={news} type="product" />
            </div>

            <div className="posts ">
              <h2>총대 찾아요</h2>
              <GridList data={seekList} type="seek" />
            </div>

            <div className="posts ">
              <h2>이런 공구는 어때요?</h2>
              <GridList data={recommend} type="product" />
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
