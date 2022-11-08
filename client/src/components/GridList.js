import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import SeekItem from "./SeekItem";

const GridListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0px, 1fr));
  grid-column-gap: 1.5rem;
  row-gap: 1rem;

  @media ${(props) => props.theme.medium} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const GridList = ({ children, ...props }) => {
  return props.type === "product" ? (
    <GridListContainer>
      {props.data.map((v, i) => {
        const tags = [v.category.name, v.tags[0]?.name, v.tags[1]?.name];

        return (
          <ProductItem url="" name={v.writer.nickname} join={v.favorite_count} title={v.title} tags={tags} />
        );
      })}
    </GridListContainer>
  ) : (
    <GridListContainer>
      {props.data.map((v, i) => {
        return <SeekItem url="" name="이름" join="숫자주세요" title="타이틀" category={["카테1", "카테2"]} />;
      })}
    </GridListContainer>
  );
};

export default GridList;
