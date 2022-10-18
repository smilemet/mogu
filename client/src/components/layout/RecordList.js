import React from "react";

import styled from "styled-components";

const RecordListContainer = styled.main`
  padding-top: 6rem;

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .flex-box {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    .option {
      input[name="selection"] {
        display: none;
      }

      input + label {
        display: inline-block;
        padding: 0.5rem 1rem;
        background-color: ${(props) => props.theme.lightGray};
        border-radius: 1rem;
        margin-right: 0.5rem;
      }

      input:checked + label {
        background-color: ${(props) => props.theme.pointColorToneDown};
      }
    }

    .years {
      border: none;
      outline: none;
    }
  }
`;

const RecordList = ({ children, ...props }) => {
  return (
    <RecordListContainer>
      <div className="wrapper">
        <div className="inner">
          <h2>찜 목록</h2>

          <div className="flex-box">
            <div className="option">
              {props.option.map((v) => {
                return (
                  <>
                    <input type="radio" id={v.id} name={v.name} checked />
                    <label className={v.name} htmlFor={v.id}>
                      {v.option}
                    </label>
                  </>
                );
              })}
            </div>

            {props.data ? (
              <select name="years" className="years">
                <option value="2022">2022년</option>
                <option value="2021">2021년</option>
                <option value="2020">2020년</option>
              </select>
            ) : null}
          </div>

          {children}
        </div>
      </div>
    </RecordListContainer>
  );
};

export default RecordList;
