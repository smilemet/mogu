import React from "react";

import styled from "styled-components";

const SelectionAddContainer = styled.div`
  border: 1px solid ${(props) => props.theme.gray};
  border-radius: 0.3rem;
  padding: 1rem;

  .img-container {
    width: 5rem;
    background-color: #ccc;
  }
`;

const SelectionAdd = () => {
  return (
    <SelectionAddContainer className="flex-box">
      <div className="img-container"></div>
      <div>
        <div>
          <div className="input-container">
            <p>
              제목<span className="alert">*</span>
            </p>
            <input type="number" />
          </div>
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
              <span title="0 입력 시 무제한"> ?</span>
            </p>
            <input type="number" />
          </div>
        </div>
      </div>
    </SelectionAddContainer>
  );
};

export default SelectionAdd;
