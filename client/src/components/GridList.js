import React from "react";
import styled from "styled-components";

const GridListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0px, 1fr));
  grid-column-gap: 1.5rem;
  row-gap: 1rem;
`;

const GridList = ({ children, ...props }) => {
  return (
    <GridListContainer>
      {props.data.map((v, i) => {
        return <React.Fragment key={i}>{children}</React.Fragment>;
      })}
    </GridListContainer>
  );
};

export default GridList;
