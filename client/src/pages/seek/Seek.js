import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";
import GridList from "../../components/GridList.js";
import SeekItem from "../../components/SeekItem.js";

const Seek = () => {
  const category = useSelector((state) => state.category);

  return (
    <SeekContainer>
      <div className="wrapper">
        <section className="section-category">
          <div className="inner">
            <ul className="categories flex-box">
              {category.data?.map((v) => {
                return (
                  <li>
                    <Link to="/">{`#${v}`}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="section-main">
          <div className="inner">
            <div className="posts">
              <div>
                <h2>#총대찾아요</h2>
              </div>
              <div className="flex-box">
                <p>'어쩌고' 검색 결과입니다.</p>
                <select>
                  <option value="createdAt">최신순</option>
                  <option value="views">조회수순</option>
                  <option value="favorite">좋아요순</option>
                  <option value="ordered">주문순</option>
                </select>
              </div>
              <GridList data={Array(25).fill(true)}>
                <SeekItem
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
    </SeekContainer>
  );
};

const SeekContainer = styled.main`
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

export default Seek;