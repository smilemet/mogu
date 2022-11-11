import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";

import styled from "styled-components";
import axios from "../config/axios";

const UserMenu = () => {
  const userId = useSelector((state) => state.auth.userId);

  /**
   * 로그아웃 후 DB와 localStorage에서 토큰을 삭제한다.
   * @param payload 아이디와 비밀번호
   */
  const onLogout = useCallback(async (e) => {
    e.preventDefault();

    try {
      await axios.post("/auth/logout");
      localStorage.removeItem("moguAccessToken");
      localStorage.removeItem("moguRefrechToken");
    } catch (err) {
      console.error(err);
    }

    window.location.href = process.env.REACT_APP_ORIGIN;
  }, []);

  return (
    <UserMenuContainer>
      <ul>
        <Link to={`/user/${userId}`}>
          <li>마이페이지</li>
        </Link>
        <Link to="/mypage/favorite">
          <li>북마크</li>
        </Link>
        <Link to="/mypage/buy">
          <li>구매내역</li>
        </Link>
        <Link to="/mypage/sell">
          <li>판매내역</li>
        </Link>
        <Link to="/">
          <li>FAQ</li>
        </Link>
        <Link to="/" onClick={onLogout}>
          <li className="alert">로그아웃</li>
        </Link>
      </ul>
    </UserMenuContainer>
  );
};

const UserMenuContainer = styled.div`
  position: absolute;
  top: 2rem;

  width: 7rem;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 0.3rem;
  text-align: left;
  box-shadow: 0 0 0.2rem #ccc;

  ul {
    a {
      display: block;
      padding: 0.5rem 0.7rem;

      &:hover {
        background-color: #eee;
        transition: 0.35s;
      }
    }

    a:nth-of-type(1),
    a:nth-of-type(4),
    a:nth-of-type(5) {
      border-bottom: 1px solid #eee;
    }
  }
`;

export default UserMenu;
