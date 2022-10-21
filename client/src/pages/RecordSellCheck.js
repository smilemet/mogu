import React from "react";
import styled from "styled-components";
import OrderJoin from "../components/OrderJoin";

const RecordSellCheckContainer = styled.div`
  padding-top: 6rem;

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  section {
    margin-bottom: 3.5rem;

    &.nav-bar {
      justify-content: space-between;

      button {
        outline: none;
        border: none;
        box-shadow: none;
        line-height: 1;
        display: inline-block;
        margin-right: 0.5rem;
        padding: 0.5rem 1rem;
        background-color: ${(props) => props.theme.lightGray};
        border-radius: 0.2rem;

        &:hover {
          transition: all 0.4s;
          background-color: ${(props) => props.theme.pointColor};
        }
      }

      & > div {
        .export {
          margin-right: 1rem;
        }

        .sort {
          line-height: 1;
          border: none;
          outline: none;
        }
      }
    }

    &.check-container {
      table {
        /* margin-bottom: 1rem; */
      }
    }
  }
`;

const RecordSellCheck = () => {
  return (
    <RecordSellCheckContainer>
      <div className="wrapper">
        <div className="inner">
          <h2>참여명단 관리</h2>

          <section className="nav-bar flex-box">
            <nav>
              <button>입금확인처리</button>
              <button>배송확인처리</button>
              <button>발송처리</button>
            </nav>
            <div className="flex-box">
              <button className="export">내보내기</button>

              <select name="sort" className="sort">
                <option value="deposit">최근입금순</option>
                <option value="order">주문순</option>
              </select>
            </div>
          </section>

          <section className="check-container">
            <OrderJoin />
          </section>
        </div>
      </div>
    </RecordSellCheckContainer>
  );
};

export default RecordSellCheck;
