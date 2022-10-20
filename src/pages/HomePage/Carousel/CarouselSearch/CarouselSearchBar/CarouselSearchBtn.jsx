import React from "react";
import styled from "styled-components";
import { styles } from "../../../../../constants/styles";

const Styled = styled.button`
  color: #fff;
  font-weight: 700;
  background-color: ${styles.colorFiverr};
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  margin: 0.75rem 0 0;
  height: 48px;
  width: 100%;
  /* flex-shrink: 0; */
  @media screen and (min-width: 900px) {
    border-left: 0;
    /* display: block; */
    width: auto;
    margin: 0;
    border-radius: 0 0.25rem 0.25rem 0;

  }
`;

export default function CarouselSearchBtn() {
  return <Styled>Search</Styled>;
}
