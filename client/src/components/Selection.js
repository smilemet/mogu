import React from "react";
import styled from "styled-components";

import FakeImg from "../assets/img/fakeImg.png";
import minus from "../assets/img/minus.png";
import plus from "../assets/img/plus.png";

const SelectionContainer = styled.div`
  padding: 0.7rem 1rem;
  background-color: ${(props) => props.theme.whiteGray};
  justify-content: space-between;
  align-items: center;

  .selection-img {
    flex-shrink: 0;
    width: 3rem;
    margin-right: 1rem;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .selection-name {
    flex-grow: 1;

    .name {
      margin-bottom: 0.5rem;
    }

    .price {
      font-size: 1rem;
      font-weight: bold;
    }
  }

  .selection-count {
    height: 2.2rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    flex-shrink: 0;
    background-color: #fff;
    display: flex;
    align-items: center;

    span {
      display: inline-block;
      width: 0.7rem;
      height: 1rem;
      text-align: center;
      cursor: pointer;
      background-color: #fff;

      &.down-btn {
        background: no-repeat center/contain url(${minus});
      }

      &.count {
        width: 4.5rem;
      }

      &.up-btn {
        background: no-repeat center/contain url(${plus});
      }
    }
  }
`;

const Selection = () => {
  return (
    <SelectionContainer className="flex-box">
      <div className="selection-img">
        <img src={FakeImg} alt="상품이미지" />
      </div>
      <div className="selection-name">
        <p className="name">상품 제목을 입력하세요.</p>
        <p className="price">18,900원</p>
      </div>
      <div className="selection-count">
        <span className="down-btn" />
        <span className="count">0개</span>
        <span className="up-btn" />
      </div>
    </SelectionContainer>
  );
};

export default Selection;
