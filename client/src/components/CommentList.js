import React from "react";
import styled from "styled-components";

import Comment from "./Comment.js";

const CommentListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0px, 1fr));
  grid-row-gap: 0.5rem;
`;

const CommentList = (props) => {
  return (
    <CommentListContainer>
      {props.data.map((v) => {
        return <Comment />;
      })}
    </CommentListContainer>
  );
};

export default CommentList;
