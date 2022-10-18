import React from "react";
import styled from "styled-components";

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
  return (
    <GridListContainer>
      {props.data.map((v, i) => {
        return <React.Fragment key={i}>{children}</React.Fragment>;
      })}
    </GridListContainer>
  );
};

export default GridList;
