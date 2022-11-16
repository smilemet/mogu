import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategoryListContainer = styled.ul`
  display: flex;
  margin-bottom: 2.5rem;

  li {
    margin-right: 2rem;
    font-size: 1rem;
    font-weight: bold;
  }
`;

const CategoryList = () => {
  const category = useSelector((state) => state.category);

  return (
    <CategoryListContainer>
      {category.data?.map((v, i) => {
        return (
          <li key={i}>
            <Link to="/">#{v}</Link>
          </li>
        );
      })}
    </CategoryListContainer>
  );
};

export default CategoryList;
