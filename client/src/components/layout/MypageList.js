import React from "react";

import styled from "styled-components";

const MypageListContainer = styled.main`
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

const MypageList = ({ children, ...props }) => {
  return (
    <MypageListContainer>
      <div className="wrapper">
        <div className="inner">
          <h2>{props.title}</h2>

          <div className="flex-box">
            <div className="option">
              {props.option.map((v, i) => {
                return i === 0 ? (
                  <>
                    <input type="radio" id={v.id} name="selection" checked />
                    <label htmlFor={v.id}>{v.option}</label>
                  </>
                ) : (
                  <>
                    <input type="radio" id={v.id} name="selection" />
                    <label htmlFor={v.id}>{v.option}</label>
                  </>
                );
              })}
            </div>

            {props.date ? (
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
    </MypageListContainer>
  );
};

export default MypageList;
