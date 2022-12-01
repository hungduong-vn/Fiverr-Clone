import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  background-color: #fff;
  z-index: 4;
  /* top: 50%; */
  /* transform: translateY(-50%); */
  width: 48px;
  height: 48px;
  text-align: center;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 15%);
  border: 0;
  font-size: 16px;
  line-height: 100%;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  &:before {
    content: none;
  }
  &:after {
    content: "";
    position: absolute;
    display: inline-block;
    background: url("https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/arrows.a8b0bad.svg")
      no-repeat;
    background-size: 16px 64px;
    width: 16px;
    height: 16px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    /* left: 50%; */
  }
  &.prev {
    /* left: -17px; */
    &:after {
      background-position: 0 -32px;
    }
  }
  &.next {
    /* right: -17px; */
    &:after {
      background-position: 0 -48px;
    }
  }
`;
export default function SliderArrow({ left, func }) {
  return (
    <Styled className={`${left ? "prev" : "next"}`} onClick={func}></Styled>
  );
}
