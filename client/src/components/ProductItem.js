import React from "react";
import styled from "styled-components";

import bookmark from "../assets/img/bookmark.png";
import bookmarkFill from "../assets/img/bookmark-fill.png";
import fakeImg from "../assets/img/fakeImg.png";

const ProductItemContainer = styled.div`
  max-width: 14.8rem;
  position: relative;

  .bookmark {
    width: 1.5rem;
    position: absolute;
    top: 0.5rem;
    right: 0.7rem;
  }

  .item-img {
    width: inherit;
    height: 14rem;
    border-radius: 0.5rem;
    background: no-repeat center/cover url(${fakeImg});
  }

  .info {
    margin-top: 0.5rem;
    color: ${(props) => props.theme.darkGray};
    font-size: ${(props) => props.theme.smallFont};
    align-items: center;

    .icon {
      flex-shrink: 0;
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.2rem;
      border-radius: 50%;
      background-color: ${(props) => props.theme.gray};
    }

    .name {
      ${(props) => props.theme.textOverflow};
    }

    .mark {
      color: ${(props) => props.theme.alertText};

      span:first-of-type {
        margin-right: 0.1rem;
      }
    }
  }

  .title {
    margin-top: 0.5rem;
    font-weight: bold;
    ${(props) => props.theme.textOverflow};
  }

  .category {
    margin-top: 1.4rem;

    span {
      display: inline-block;
      margin-right: 0.5rem;
      padding: 0.35rem 0.5rem;
      font-size: ${(props) => props.theme.smallFont};
      border-radius: 0.3rem;
      background-color: ${(props) => props.theme.lightGray};
    }
  }
`;

const ProductItem = () => {
  return (
    <ProductItemContainer>
      <img className="bookmark" src={bookmark} alt="즐겨찾기 하기" />
      <div className="item-img" />
      <div className="info flex-box">
        <span className="icon"></span>
        <span className="name">공구주 이름공구주 이름공구주 이름공구주 이름</span>
        <div className="mark">
          <span>♥</span>
          <span>256</span>
        </div>
      </div>
      <p className="title">1차 20cm 인형옷 공동구매 모집! 1차 20cm 인형옷 공동구매 모집!</p>
      <div className="category">
        <span>#카테고리</span>
        <span>#카테고리</span>
      </div>
    </ProductItemContainer>
  );
};

export default ProductItem;
