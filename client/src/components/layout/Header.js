import React, { useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import styled from "styled-components";
import { animateScroll } from "react-scroll";

import title from "../../assets/img/title2.png";
import SearchBox from "../SearchBox.js";

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  padding: 0.75rem 0;
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
      width: 38rem;
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
      text-align: right;
      width: 9rem;
    }
  }

  .flex-box {
    align-items: center;
  }
`;

const Header = () => {
  let location = useLocation();

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
            공구모아요
            <div
              className="under-bar"
              style={{ display: location.pathname === "/product" ? "block" : "none" }}
            />
          </NavLink>
          <NavLink to="/seek" className="menu">
            총대찾아요
            <div
              className="under-bar"
              style={{ display: location.pathname === "/seek" ? "block" : "none" }}
            />
          </NavLink>
        </nav>

        <SearchBox />

        <div className="login">
          <Link to="/">로그인</Link>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
