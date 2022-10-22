import React, { Fragment } from "react";
import styled from "styled-components";

import fakeImg from "../assets/img/fakeImg.png";
import moreArrow from "../assets/img/more-arrow.png";
import bookmark from "../assets/img/bookmark.png";
import bookmarkFill from "../assets/img/bookmark-fill.png";

const DetailHeadingContainer = styled.div`
  display: flex;

  .h-left {
    width: 55%;
    height: 100%;
    aspect-ratio: 4 / 3.5;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .h-right {
    width: 45%;
    padding: 1rem 0 1rem 2.5rem;
    position: relative;
    flex-direction: column;

    & > * {
      width: 100%;
    }

    .post-title {
      .title-box {
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1.2rem;

        h2 {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .bookmark {
          width: 1.5rem;
          top: 0.5rem;
          right: 0.7rem;
        }
      }

      p {
        font-size: 1.75rem;
        margin-bottom: 1.2rem;
      }

      .category {
        margin-bottom: 2.5rem;

        span + span {
          margin-left: 1rem;
        }
      }
    }

    .post-by {
      display: flex;
      justify-content: space-between;
      align-items: center;
      right: 0;
      bottom: 2rem;

      & > div {
        align-items: center;
      }

      .icon {
        flex-shrink: 0;
        display: inline-block;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50%;
        background-color: ${(props) => props.theme.gray};
      }

      .name {
        /* ${(props) => props.theme.textOverflow} */
      }

      .more-arrow {
        margin-left: 1rem;
        display: inline-block;
        width: 0.6rem;
        height: 0.6rem;
        transform: translate(0, 15%);
        background: no-repeat center/contain url(${moreArrow});
      }

      .rate {
        text-align: right;
        right: 0;
        bottom: 2rem;
      }
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

const DetailHeading = ({ children, ...props }) => {
  return (
    <DetailHeadingContainer className="heading">
      <div className="h-left">
        <img src={fakeImg} alt="상품이미지" />
      </div>
      <div className="h-right flex-box">
        <div className="post-title">
          <div className="title-box flex-box">
            <h2>{props.title}</h2>
            <img className="bookmark" src={bookmark} alt="즐겨찾기 하기" />
          </div>
          {props.price ? <p>{props.price} 원~</p> : null}
          <div className="category">
            {props.category.map((v) => {
              return <span>{v}</span>;
            })}
          </div>
        </div>

        {children}

        <div className="post-by">
          <div className="flex-box">
            <span className="icon" />
            <span className="name">공구하다가사탕진</span>
            <span className="more-arrow" />
          </div>
          <div className="rate">
            <span>★★★★☆</span>
            <span>(5)</span>
          </div>
        </div>
      </div>
    </DetailHeadingContainer>
  );
};

export default DetailHeading;
