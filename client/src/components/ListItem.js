import React from "react";
import styled from "styled-components";

import bookmark from "../assets/img/bookmark.png";
import bookmarkFill from "../assets/img/bookmark-fill.png";
import fakeImg from "../assets/img/fakeImg.png";
import { Link } from "react-router-dom";

const ListItemContainer = styled(Link)`
  width: 100%;
  position: relative;

  .bookmark {
    width: 1.5rem;
    position: absolute;
    top: 0.5rem;
    right: 0.7rem;
  }

  .thumbnail {
    width: 100%;
    aspect-ratio: 4 / 3.5;

    .item-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }

  .info {
    margin-top: 0.5rem;
    color: ${(props) => props.theme.darkGray};
    font-size: ${(props) => props.theme.smallFont};
    align-items: center;

    .icon {
      flex-shrink: 0;
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.2rem;
      border-radius: 50%;
      background-color: ${(props) => props.theme.gray};
    }

    .name {
      ${(props) => props.theme.textOverflow};
    }

    .mark {
      color: ${(props) => props.theme.yellow};

      span:first-of-type {
        margin-right: 0.1rem;
      }
    }
  }

  .title {
    margin-top: 0.5rem;
    font-weight: bold;
    ${(props) => props.theme.textOverflow};
  }

  .category {
    margin-top: 1.4rem;

    span {
      display: inline-block;
      margin-right: 0.5rem;
      padding: 0.35rem 0.5rem;
      font-size: ${(props) => props.theme.smallFont};
      border-radius: 0.3rem;
      background-color: ${(props) => props.theme.lightGray};
    }
  }
`;

const ListItem = (props) => {
  return (
    <ListItemContainer to={props.url}>
      <img className="bookmark" src={bookmark} alt="즐겨찾기 하기" />
      <div className="thumbnail">
        <img className="item-img" src={props.thumbnail} alt="" />
      </div>
      <div className="info flex-box">
        <span className="icon" />
        <span className="name">{props.name}</span>
        <div className="mark">
          <span>★</span>
          <span>{props.join}</span>
        </div>
      </div>
      <p className="title">{props.title}</p>
      <div className="category">
        <span>{props.category[0]}</span>
        {props.category[1] ? <span>{props.category[0]}</span> : null}
      </div>
    </ListItemContainer>
  );
};

ListItem.defaultProps = {
  url: "/detail",
  thumbnail: fakeImg,
  name: "이름이름이름이름이름이름이름이름이름이름이름",
  title: "타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀",
  category: ["카테고리", "카테고리", "카테고리", "카테고리"],
};

export default ListItem;
