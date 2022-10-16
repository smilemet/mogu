import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const FooterContainer = styled.footer`
  margin-top: 2rem;
  padding: 5rem 7rem;
  text-align: center;
  font-size: 12px;
  background-color: ${(props) => props.theme.pointColorToneDown};

  .footer-nav {
    max-width: 43rem;
    margin: 0 auto;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 3rem;
  }

  .description {
    margin-bottom: 1.5rem;

    p:first-of-type {
      margin-bottom: 0.5rem;
    }
  }

  .address {
    span {
      margin-right: 1rem;

      &:last-of-type {
        margin-right: 0;
      }
    }

    a {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="inner">
        <ul className="footer-nav flex-box">
          <li>
            <Link to="/">공지사항</Link>
          </li>
          <li>
            <Link to="/">문의하기</Link>
          </li>
          <li>
            <Link to="/">이용약관</Link>
          </li>
          <li>
            <Link to="/">개인정보처리방침</Link>
          </li>
          <li>
            <Link to="/">서비스소개</Link>
          </li>
        </ul>

        <div className="description">
          <p>이 사이트는 개인 프로젝트의 일환으로 제작되었습니다.</p>
          <p>smilemet@gmail.com</p>
        </div>

        <div className="address">
          <span>
            <a href="/" target="_blank">
              Github
            </a>
          </span>
          <span> | </span>
          <span>
            <a href="/" target="_blank">
              Notion
            </a>
          </span>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
