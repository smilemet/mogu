import React from "react";
import styled from "styled-components";

import bookmark from "../../assets/img/bookmark.png";
import bookmarkFill from "../../assets/img/bookmark-fill.png";
import fakeImg from "../../assets/img/fakeImg.png";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  return (
    <ListItemContainer>
      <img className="bookmark" src={bookmark} alt="즐겨찾기 하기" />
      <Link to={props.url}>
        <div className="thumbnail">
          <img className="item-img" src={props.thumbnail} alt="" />
        </div>
        <div className="info flex-box">
          <div className="user flex-box">
            <img className="icon" src={fakeImg} alt="유저 아이콘" />
            <span className="name">{props.name}</span>
          </div>
          <div className="mark">
            <span>★</span>
            <span>{props.join}</span>
          </div>
        </div>
        <p className="title">{props.title}</p>
        <div className="tags">
          {props?.tags ? (
            <>
              <span className="category">{props.tags[0]}</span>
              {props.tags[1] ? <span>{props.tags[1]}</span> : null}
            </>
          ) : null}
        </div>
      </Link>
    </ListItemContainer>
  );
};

ListItem.defaultProps = {
  url: "/product/detail",
  thumbnail: fakeImg,
  name: "",
  join: 0,
  title: "",
  category: [""],
};

const ListItemContainer = styled.li`
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
    justify-content: space-between;

    .user {
      align-items: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .icon {
        ${(props) => props.theme.icon}
      }

      .name {
        ${(props) => props.theme.textOverflow};
      }
    }

    .mark {
      white-space: nowrap;
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

  .tags {
    margin-top: 1.4rem;

    span {
      display: inline-block;
      margin-right: 0.5rem;
      padding: 0.35rem 0.5rem;
      font-size: ${(props) => props.theme.smallFont};
      border-radius: 0.3rem;
      background-color: ${(props) => props.theme.lightGray};

      &.category {
        background-color: ${(props) => props.theme.pointColorToneDown};
      }
    }
  }
`;

export default ListItem;
