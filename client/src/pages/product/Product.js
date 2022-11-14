import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FixedSizeGrid as Grid } from "react-window";

import styled from "styled-components";
import GridList from "../../components/GridList.js";

import { getProductList } from "../../slices/ProductSlice.js";
import { getSearch } from "../../slices/SearchSlice.js";

const Product = () => {
  const dispatch = useDispatch();

  /** header 검색창 결과 표시 */
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const query = params.get("query");

  const category = useSelector((state) => state.category);
  const { searchResult } = useSelector((state) => state.search);
  const { productList } = useSelector((state) => state.productList);
  const [list, setList] = useState();

  const [sorting, setSorting] = useState("createdAt");

  const templateArr = Array(30).fill(true);

  /** 정렬 옵션 변경 */
  const onSorting = (e) => {
    setSorting(e.currentTarget.value);
  };

  /** 게시글 데이터 취득 */
  const getList = useCallback(async () => {
    query ? dispatch(getSearch({ query, sort: sorting })) : dispatch(getProductList({ sort: sorting }));
  }, [dispatch, query, sorting]);

  /** 페이지 마운트 시 조회 or 검색 결과에 따른 공구모아요 게시글 로딩
   * sort 결과가 바뀔때마다 새 목록을 출력한다.
   */
  useEffect(() => {
    getList();
  }, [query, dispatch, getList]);

  /** 조회 or 검색 결과를 리스트로 출력 */
  useEffect(() => {
    query ? setList(searchResult) : setList(productList);
  }, [query, searchResult, productList]);

  return (
    <ProductContainer>
      <div className="wrapper">
        <section className="section-category">
          <div className="inner">
            <ul className="categories flex-box">
              {category.data?.map((v, i) => {
                return (
                  <li key={i}>
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
                <h2>#공구모아요</h2>
              </div>
              <div className="flex-box">
                {query ? (
                  <p>
                    <span className="keyword">'{query}'</span> 검색 결과입니다.
                  </p>
                ) : (
                  <></>
                )}
                <select onChange={onSorting}>
                  <option value="createdAt">최신순</option>
                  <option value="views">조회수순</option>
                  <option value="favorite">좋아요순</option>
                  <option value="ordered">주문순</option>
                </select>
              </div>
              {list ? <GridList data={list} type="product" /> : <GridList data={templateArr} />}
            </div>
          </div>
        </section>
      </div>
    </ProductContainer>
  );
};

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

          .keyword {
            font-size: 1.2rem;
            color: ${(props) => props.theme.pointColorDarker};
          }
        }

        h2 {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default Product;
