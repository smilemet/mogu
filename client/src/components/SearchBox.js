import React from "react";

import styled from "styled-components";
import SearchIcon from "../assets/img/search.png";

const SearchBoxContainer = styled.div`
  width: 250px;
  border: 1px solid #ccc;
  padding: 0.3rem 0.5rem;
  align-items: center;
  justify-content: space-between;

  input {
    width: 200px;
    outline: none;
    border: none;
  }

  span {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background: no-repeat center/cover url(${SearchIcon});
    cursor: pointer;
  }
`;

const SearchBox = () => {
  return (
    <SearchBoxContainer className="flex-box">
      <input type="search" placeholder="검색하기" />
      <span></span>
    </SearchBoxContainer>
  );
};

export default SearchBox;
