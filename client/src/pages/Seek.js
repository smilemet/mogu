import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import SeekItem from "../components/SeekItem.js";

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

      ul {
        display: grid;
        grid-template-columns: repeat(5, minmax(0px, 1fr));
        grid-column-gap: 1.5rem;
        row-gap: 4.5rem;
      }
    }
  }
`;

const Seek = () => {
  return (
    <SeekContainer>
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
              <h2>#총대찾아요</h2>
            </div>
            <ul>
              {Array(25)
                .fill(true)
                .map((v) => {
                  return (
                    <li>
                      <SeekItem width="14rem" />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    </SeekContainer>
  );
};

export default Seek;
