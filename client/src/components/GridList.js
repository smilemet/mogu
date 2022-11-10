import React from "react";
import styled from "styled-components";

import ListItem from "./layout/ListItem.js";
import ProductItem from "./ProductItem.js";
import SeekItem from "./SeekItem.js";

const GridList = ({ children, ...props }) => {
  return props.type === "product" ? (
    <GridListContainer>
      {props.data?.map((v, i) => {
        const tags = [v.category.name, v.tags[0]?.name, v.tags[1]?.name];

        return (
          <ProductItem
            url={`/product/${v.id}`}
            thumbnail={v.thumbnail}
            name={v.writer.nickname}
            join={v.favorite_count}
            title={v.title}
            tags={tags}
            key={`${v.title}${i}`}
          />
        );
      })}
    </GridListContainer>
  ) : props.type === "seek" ? (
    <GridListContainer>
      {props.data?.map((v, i) => {
        const tags = [v.category.name, v.tags[0]?.name, v.tags[1]?.name];

        return (
          <SeekItem
            url={`/seek/${v.id}`}
            thumbnail={v.thumbnail}
            name={v.writer.nickname}
            join={v.favorite_count}
            title={v.title}
            tags={tags}
            key={`${v.title}${i}`}
          />
        );
      })}
    </GridListContainer>
  ) : (
    <GridListContainer>
      {props.data?.map((v, i) => {
        return <ListItem key={i} />;
      })}
    </GridListContainer>
  );
};

const GridListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0px, 1fr));
  grid-column-gap: 1.5rem;
  row-gap: 2rem;

  @media ${(props) => props.theme.medium} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export default GridList;
