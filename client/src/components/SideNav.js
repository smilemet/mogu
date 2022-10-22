import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import plusIcon from "../assets/img/plus-w.png";

const SideNavContainer = styled.nav`
  position: fixed;
  z-index: 99;
  right: 2.5rem;
  bottom: 2.5rem;
  border-radius: 10rem;
  /* left: 50%; */ /* margin-left: 10rem; */

  button {
    ${(props) => props.theme.buttonFill}
    width: 3.5rem;
    height: 3.5rem;
    padding: 0;
    border: 2px solid #fff;
    border-radius: 10rem;

    img {
      width: 50%;
    }
  }

  @media screen and (min-width: 1329px) {
    left: 50%;
    margin-left: 38rem;
  }
`;

const SideNav = () => {
  // 로그인했다면 새글쓰기로
  // 아니라면 로그인화면으로

  return (
    <SideNavContainer>
      <Link to="/product/write">
        <button>
          <img src={plusIcon} alt="새글쓰기" />
        </button>
      </Link>
    </SideNavContainer>
  );
};

export default SideNav;
