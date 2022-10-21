import React, { Fragment, useCallback, useState } from "react";

import styled from "styled-components";

const MypageListContainer = styled.main`
  padding-top: 6rem;

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .option-list {
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

    .sort {
      border: none;
      outline: none;
    }
  }
`;

const MypageList = ({ children, ...props }) => {
  const [option, setOption] = useState("");

  const onSetOption = (e) => {
    setOption(e.currentTarget.value);
  };

  return (
    <MypageListContainer>
      <div className="wrapper">
        <div className="inner">
          <h2>{props.title}</h2>

          <div className="option-list flex-box">
            <div className="option">
              {props.option.map((v, i) => {
                return i === 0 ? (
                  <Fragment key={i}>
                    <input
                      type="radio"
                      id={v.id}
                      name="selection"
                      value={v.id}
                      onChange={onSetOption}
                      defaultChecked
                    />
                    <label htmlFor={v.id}>{v.option}</label>
                  </Fragment>
                ) : (
                  <Fragment key={i}>
                    <input
                      type="radio"
                      id={v.id}
                      name="selection"
                      value={v.id}
                      onChange={onSetOption}
                    />
                    <label htmlFor={v.id}>{v.option}</label>
                  </Fragment>
                );
              })}
            </div>

            {props.date ? (
              <select name="sort" className="sort">
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
