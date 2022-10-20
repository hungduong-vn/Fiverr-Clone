import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-repeat: no-repeat;
  background-size: auto 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: none;
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  animation: fade 2s linear;
  transition: opacity 0.9s;
  background-color: ${({ bgColor }) => bgColor};
  @media only screen and (min-width: 900px) {
    background-position: 100% 100%;
    display: flex;
    justify-content: flex-end;
    background-image: url(${({ imgSmUrl }) => imgSmUrl});
  }
  @media only screen and (min-width: 1160px) {
    background-image: url(${({ imgLgUrl }) => imgLgUrl});
    background-position: bottom;
  }
`;

export default function CarouselBackSilde({ content, isShow }) {
  const { imgLgUrl, imgSmUrl, bgColor, name, jobTitle } = content;
  return (
    <Wrapper
      isShow={isShow}
      imgLgUrl={imgLgUrl}
      imgSmUrl={imgSmUrl}
      bgColor={bgColor}
    >
      Item
    </Wrapper>
  );
}
