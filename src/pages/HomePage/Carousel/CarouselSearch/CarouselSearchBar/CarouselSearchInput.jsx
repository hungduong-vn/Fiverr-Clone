import React from "react";
import styled from "styled-components";

const Styled = styled.input`
  font-size: 16px;
  height: 48px;
  /* padding-left: 44px; */
  margin-bottom: 0;
  border-radius: 4px;
  padding: 7px 7px 7px 44px;
  @media screen and (min-width: 900px) {
    border-radius: 0.25rem 0 0 0.25rem;
    font-size: 15px;
    padding-top: 8px;
  }
  @media screen and (min-width: 1160px) {
    border-right: 0;
    /* border-radius: 3px 0 0 3px; */
  }
`;

export default function CarouselSearchInput() {
  return <Styled placeholder={`Try "building mobile app"`}></Styled>;
}
