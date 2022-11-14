import React from "react";
import { redirect } from "react-router-dom";

import styled from "styled-components";
import SearchIcon from "../assets/img/search.png";

const SearchBox = () => {
  /** Header 검색창에서 검색 시, 공구모아요 페이지에서 검색결과를 표기한다. */
  // const onSearch = (e) => {
  //   e.preventDefault();

  //   window.location.href = "/product";
  // };

  return (
    <SearchBoxContainer className="flex-box" action="/product" method="get">
      <input className="search-box" type="search" name="query" placeholder="검색하기" />
      <button className="search-icon" type="submit" />
    </SearchBoxContainer>
  );
};

const SearchBoxContainer = styled.form`
  width: 250px;
  border: 1px solid #ccc;
  padding: 0.3rem 0.5rem;
  align-items: center;
  justify-content: space-between;

  .search-box {
    width: 200px;
    outline: none;
    border: none;
  }

  .search-icon {
    border: none;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background: no-repeat center/cover url(${SearchIcon});
    cursor: pointer;
  }
`;

export default SearchBox;
