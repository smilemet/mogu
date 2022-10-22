import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import styled from "styled-components";

import title from "../../assets/img/title2.png";
import SearchBox from "../SearchBox.js";
import useWindowWidth from "../../hooks/useWindowWidth";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 0.75rem 0;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  position: fixed;
  z-index: 1;

  .inner {
    padding: 0 1.5rem;
    justify-content: space-between;

    .title {
      width: 12rem;
      flex-shrink: 0;

      img {
        width: 8rem;
        cursor: pointer;
      }
    }

    .navbar {
      flex-grow: 1;
      padding: 0 1rem;

      .menu {
        position: relative;

        &:first-of-type {
          margin-right: 3rem;
        }
      }

      .under-bar {
        position: absolute;
        width: 100%;
        height: 2px;
        margin: 0 auto;
        margin-top: 0.3rem;
        border-radius: 1rem;
        background-color: ${(props) => props.theme.pointColorDarker};
      }
    }

    .login {
      flex-shrink: 0;
      text-align: right;
      width: 10%;
    }
  }

  .flex-box {
    align-items: center;
  }

  @media screen and (${(props) => props.theme.medium}) {
    .search-box {
      display: none;
    }
  }

  @media screen and (${(props) => props.theme.mobile}) {
    .inner {
      .title {
        width: 9rem;
      }

      .navbar .menu:first-of-type {
        margin-right: 1rem;
      }

      .login {
        text-align: right;
        width: 3rem;
      }
    }
  }
`;

const Header = () => {
  const [menu, setMenu] = useState({ gonggu: "공구모아요", chongdae: "총대구해요" });
  const windowWidth = useWindowWidth();
  const location = useLocation();

  return (
    <HeaderContainer>
      <div className="inner flex-box">
        <div className="title">
          <Link to="/">
            <img src={title} alt="모구" />
            <h1 className="blind-text">MOGU!</h1>
          </Link>
        </div>

        <nav className="navbar flex-box">
          <NavLink to="/product" className="menu">
            {windowWidth <= 550 ? <p>공구</p> : <p>공구모아요</p>}
            <div
              className="under-bar"
              style={{ display: location.pathname === "/product" ? "block" : "none" }}
            />
          </NavLink>
          <NavLink to="/seek" className="menu">
            {windowWidth <= 550 ? <p>총대</p> : <p>총대구해요</p>}
            <div
              className="under-bar"
              style={{ display: location.pathname === "/seek" ? "block" : "none" }}
            />
          </NavLink>
        </nav>

        <div className="search-box">
          <SearchBox />
        </div>

        <div className="login">
          <Link to="/account/login">로그인</Link>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
