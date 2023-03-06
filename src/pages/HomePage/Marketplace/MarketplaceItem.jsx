import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styled = styled.li`
  width: 50%;
  padding: 0 10px 32px;
  text-align: center;
  a {
    color: #222325;
    text-align: center;
    position: relative;
    display: inline-block;
    &::after {
      content: "";
      position: absolute;
      top: 45px;
      right: 50%;
      transform: translateX(50%);
      padding: 0 0 8px;
      width: 48px;
      border-bottom: 2px solid #c5c6c9;
      transition: border-color 0.2s ease-in-out, padding 0.2s ease-in-out;
      box-sizing: content-box;
    }
    &:hover {
      &::after {
        padding: 0 20px 8px;
        border-color: #1dbf73;
      }
    }
    img {
      display: block;
      width: 48px;
      height: 48px;
      margin: 0 auto 15px;
    }
  }
  @media screen and (min-width: 600px) {
    width: 33.3333%;
  }
  @media screen and (min-width: 900px) {
    width: 20%;
    padding-bottom: 55px;
  }
`;

export default function MarketplaceItem({ text, iconUrl, id }) {
  return (
    <Styled>
      <Link to={`/categories/${id}`}>
        <img src={iconUrl} alt="" />
        {text}
      </Link>
    </Styled>
  );
}
