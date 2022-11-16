import React from "react";
import styled from "styled-components";

import ListItem from "./layout/ListItem.js";
import ProductItem from "./ProductItem.js";
import SeekItem from "./SeekItem.js";

const Wrapper = ({ type, item, tags, i }) => {
  console.log(type, item, tags, i);
  if (!item) return;

  if (type === "product") {
    return (
      <ProductItem
        url={`/product/${item.id}`}
        thumbnail={item.thumbnail}
        name={item.writer.nickname}
        join={item.favorite_count}
        title={item.title}
        tags={tags}
        key={`${item.title}${i}`}
      />
    );
  } else if (type === "seek") {
    return (
      <SeekItem
        url={`/product/${item.id}`}
        thumbnail={item.thumbnail}
        name={item.writer.nickname}
        join={item.favorite_count}
        title={item.title}
        tags={tags}
        key={`${item.title}${i}`}
      />
    );
  }
};

const GridList = ({ data, type }) => {
  if (!data || !type) {
    return (
      <GridListContainer>
        {Array(6)
          .fill(true)
          .map((v, i) => {
            return <ListItem key={i} />;
          })}
      </GridListContainer>
    );
  }

  return (
    <GridListContainer>
      {data.map((item, i) => {
        const tags = [item.category.name, item.tags[0]?.name, item.tags[1]?.name];
        return <Wrapper item={item} tags={tags} i={i} type={type} />;
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
