import React from "react";
import styled from "styled-components";

import fakeImg from "../assets/img/fakeImg.png";

const CreateHeadingContainer = styled.div`
  display: flex;

  .h-left {
    width: 55%;
    height: 100%;
    aspect-ratio: 4 / 3.5;
    background-color: ${(props) => props.theme.lightGray};

    /* img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    } */
  }

  .h-right {
    width: 45%;
    padding: 1rem 0 1rem 2.5rem;
    position: relative;
    flex-direction: column;

    & > * {
      width: 100%;
    }

    .post-item {
      flex-grow: 1;
    }

    .post-item + .post-item {
      margin-top: 2rem;
    }

    .post-item.flex-box {
      flex-grow: 0;
      justify-content: space-between;

      & > div {
        width: 100%;

        &:nth-of-type(2) {
          margin-left: 1rem;
        }
      }
    }

    label,
    input {
      display: block;
      width: 100%;
    }

    input {
      margin-top: 0.5rem;
      ${(props) => props.theme.inputSomething}
    }

    input + label {
      margin-top: 1rem;
    }
  }

  @media ${(props) => props.theme.medium} {
    display: block;

    .h-left {
      width: 100%;
    }

    .h-right {
      width: 100%;
      padding-left: 0;
    }

    .post-date {
      & > div {
        padding-left: 0;
      }
    }
  }
`;

const CreateHeading = ({ children, ...props }) => {
  return (
    <CreateHeadingContainer className="heading">
      <div className="h-left">{/* <img src={fakeImg} alt="상품이미지" /> */}</div>
      <div className="h-right flex-box">
        <div className="post-item">
          <label htmlFor="title">
            글 제목<span className="alert">*</span>
          </label>
          <input type="text" id="title" />

          <label htmlFor="category">
            카테고리<span className="alert">*</span>
          </label>
          <input type="text" id="category" />
        </div>

        {children}
      </div>
    </CreateHeadingContainer>
  );
};

export default CreateHeading;
