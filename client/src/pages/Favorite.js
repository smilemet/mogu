import React from "react";

import styled from "styled-components";
import GridList from "../components/GridList";
import ProductItem from "../components/ProductItem";

const FavoriteContainer = styled.main`
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

const Favorite = () => {
  return (
    <FavoriteContainer>
      <div className="wrapper">
        <div className="inner">
          <h2>찜 목록</h2>

          <div className="flex-box">
            <div className="option">
              <input type="radio" id="every" name="selection" checked />
              <label className="selection" htmlFor="every">
                전체
              </label>

              <input type="radio" id="recruiting" name="selection" />
              <label className="selection" htmlFor="recruiting">
                모집 중
              </label>

              <input type="radio" id="end" name="selection" />
              <label className="selection" htmlFor="end">
                모집 종료
              </label>
            </div>

            <select name="years" className="years">
              <option value="2022">2022년</option>
              <option value="2021">2021년</option>
              <option value="2020">2020년</option>
            </select>
          </div>

          <GridList data={Array(3).fill(true)}>
            <ProductItem />
          </GridList>
        </div>
      </div>
    </FavoriteContainer>
  );
};

export default Favorite;
