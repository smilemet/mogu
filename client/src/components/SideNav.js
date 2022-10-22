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

    p {
      width: 100%;
      position: absolute;
      font-size: ${(props) => props.theme.smallFont};
      transform: translate(-13%);
    }
  }

  @media screen and (min-width: 1329px) {
    left: 50%;
    margin-left: 38rem;
  }
`;

const SideNav = () => {
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
