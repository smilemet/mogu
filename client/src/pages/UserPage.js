import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import GridList from "../components/GridList.js";
import ProductItem from "../components/ProductItem.js";
import AfterComment from "../components/AfterComment.js";

import fakeImg from "../assets/img/fakeImg.png";
import optionIcon from "../assets/img/option-icon.png";
import moreArrow from "../assets/img/more-arrow.png";
import MyInfo from "../components/MyInfo.js";
import SeekItem from "../components/SeekItem.js";

const UserPageContainer = styled.main`
  padding-top: 1rem;
  position: relative;

  .bg-img {
    height: 12rem;
    background-color: ${(props) => props.theme.lightGray};
  }

  .user-info {
    & > div {
      height: 7.5rem;
      margin-bottom: 3rem;
      justify-content: space-between;
      align-items: center;
    }

    .icon {
      width: 9.5rem;
      position: relative;

      img {
        ${(props) => props.theme.icon}
        width: 9.5rem;
        height: 9.5rem;
        position: absolute;
        bottom: 0;
        transform: translate(0, 40%);
      }
    }

    .name {
      margin-left: 4rem;
      flex-grow: 1;

      & > * {
        margin-bottom: 0.3rem;
      }

      .nickname {
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 1rem;
        }

        span.alert {
          margin-left: 4rem;
          font-size: ${(props) => props.theme.smallFont};
          text-decoration: underline;
        }

        .option-btn {
          border: none;
          outline: none;
          background-color: transparent;
          width: 1.5rem;
          height: 1.5rem;
          background: no-repeat center/contain url(${optionIcon});
          cursor: pointer;
        }
      }

      .user-id {
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.darkGray};
        font-size: ${(props) => props.theme.smallFont};
      }

      .rate {
        span:first-of-type {
          margin-right: 1.5rem;
        }
      }
    }
  }

  .user-post {
    margin-bottom: 4rem;

    nav {
      height: 2.3rem;
      margin-bottom: 1.5rem;
      font-size: 1rem;
      border-bottom: 1px solid ${(props) => props.theme.gray};

      input[name="tab-item"] {
        display: none;
      }

      input + .tab-item {
        position: relative;
        height: 2.3rem;
        padding: 0.5rem 1rem;
        border-top: 1px solid transparent;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        border-bottom: 1px solid ${(props) => props.theme.gray};
      }

      input:checked + .tab-item {
        border-top: 1px solid ${(props) => props.theme.gray};
        border-left: 1px solid ${(props) => props.theme.gray};
        border-right: 1px solid ${(props) => props.theme.gray};
        border-bottom: 1px solid #fff;
      }
    }

    article {
      margin-bottom: 2rem;

      .more-btn {
        margin: 0 auto;
        margin-top: 2rem;
        width: 40%;

        button {
          width: 100%;
          border: none;
          ${(props) => props.theme.button}
          padding: 0.7rem;
          cursor: pointer;
        }
      }
    }
  }

  .after-comment {
    .title {
      align-items: center;
      margin-bottom: 1rem;
    }

    .title ~ div {
      margin-bottom: 0.5rem;
    }

    h3 {
      font-size: 1rem;
      font-weight: bold;
    }

    .more-arrow {
      margin-left: 1rem;
      display: inline-block;
      width: 0.6rem;
      height: 0.6rem;
      transform: translate(0, 15%);
      background: no-repeat center/contain url(${moreArrow});
      cursor: pointer;
    }
  }
`;

const UserPage = () => {
  const [tab, setTab] = useState("product-tab");

  const onChangeTab = useCallback((e) => {
    setTab(e.currentTarget.id);
  }, []);

  return (
    <UserPageContainer>
      <div className="bg-img" />

      <div className="wrapper">
        <div className="inner2">
          <section className="user-info">
            <div className="flex-box">
              <div className="icon">
                <img src={fakeImg} alt="유저 프로필 이미지" />
              </div>
              <div className="name">
                <div className="nickname flex-box">
                  <div>
                    <span>공구하다 가산탕진 님</span>
                    <span className="alert private">닉네임 수정</span>
                  </div>
                  <Link to="/">
                    <button className="option-btn"></button>
                  </Link>
                </div>
                <p className="user-id">member01</p>
                <div className="rate">
                  <span>모구별점</span>
                  <span>★★★★☆(5)</span>
                </div>
              </div>
            </div>
          </section>

          <section className="user-post">
            <nav className="flex-box">
              <input
                type="radio"
                id="product-tab"
                name="tab-item"
                onClick={onChangeTab}
                defaultChecked
              />
              <label className="tab-item" htmlFor="product-tab">
                공구모아요
              </label>

              <input type="radio" id="seek-tab" name="tab-item" onClick={onChangeTab} />
              <label className="tab-item" htmlFor="seek-tab">
                총대찾아요
              </label>

              <input type="radio" id="my-tab" name="tab-item" onClick={onChangeTab} />
              <label className="tab-item" htmlFor="my-tab">
                내 정보
              </label>
            </nav>

            <article>
              {tab === "seek-tab" ? (
                <>
                  <GridList data={Array(2).fill(true)}>
                    <SeekItem />
                  </GridList>

                  <div className="more-btn">
                    <Link to="/">
                      <button>더 보기</button>
                    </Link>
                  </div>
                </>
              ) : tab === "my-tab" ? (
                <MyInfo />
              ) : (
                <>
                  <GridList data={Array(2).fill(true)}>
                    <ProductItem />
                  </GridList>

                  <div className="more-btn">
                    <Link to="/">
                      <button>더 보기</button>
                    </Link>
                  </div>
                </>
              )}
            </article>
          </section>

          <section className="after-comment">
            <div className="title flex-box">
              <h3>받은 거래 후기</h3>
              <span className="more-arrow" />
            </div>
            <AfterComment />
            <AfterComment />
            <AfterComment />
          </section>

          <section className="user-info"></section>
        </div>
      </div>
    </UserPageContainer>
  );
};

export default UserPage;
