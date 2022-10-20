import React from "react";
import styled from "styled-components";

import FakeImg from "../assets/img/fakeImg.png";

const Selection2Container = styled.div`
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
  }
`;

const Selection2 = () => {
  return (
    <Selection2Container className="flex-box">
      <div className="selection-img">
        <img src={FakeImg} alt="상품이미지" />
      </div>
      <div className="selection-name">
        <p className="name">상품 제목을 입력하세요.</p>
        <p className="price">18,900원</p>
      </div>
      <div className="selection-count">
        <span className="count">수량 1개</span>
      </div>
    </Selection2Container>
  );
};

export default Selection2;
