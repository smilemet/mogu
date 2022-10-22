import React from "react";

import styled from "styled-components";

const SelectionAddContainer = styled.div`
  border: 1px solid ${(props) => props.theme.gray};
  border-radius: 0.3rem;
  padding: 1rem;

  .selection-left {
    max-width: 10rem;
    background-color: #ccc;
  }

  .selection-right {
    margin-left: 2rem;

    & > div:nth-child(2) {
      margin-top: 1rem;

      div + div {
        margin-left: 1rem;
      }
    }
  }

  .input-container {
    position: relative;
  }

  .caption {
    position: absolute;
    transform: translate(50%);
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.pointColorToneDown};

    &::after {
      position: absolute;
      transform: translate(90%, 15%);
      content: "?";
      font-size: ${(props) => props.theme.smallFont};
    }
  }
`;

const SelectionAdd = () => {
  return (
    <SelectionAddContainer className="flex-box">
      <div className="selection-left"></div>
      <div className="selection-right">
        <div className="input-container">
          <p>
            제목<span className="alert">*</span>
          </p>
          <input type="number" />
        </div>
        <div className="flex-box">
          <div className="input-container">
            <p>
              가격<span className="alert">*</span>
            </p>
            <input type="number" />
          </div>
          <div className="input-container">
            <p>
              재고량<span className="alert">*</span>
            </p>
            <input type="number" />
          </div>
          <div className="input-container">
            <p>
              1인구매제한<span className="alert">*</span>
              <span className="caption" title="0 입력 시 무제한" />
            </p>
            <input type="number" />
          </div>
        </div>
      </div>
    </SelectionAddContainer>
  );
};

export default SelectionAdd;
