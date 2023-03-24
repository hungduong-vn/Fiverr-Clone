import React from "react";
import styled from "styled-components";
import { bgUrls } from "./data";
import NotFoundFooter from "./NotFoundFooter/NotFoundFooter";
import NotFoundHeader from "./NotFoundHeader/NotFoundHeader";
import NotFoundMain from "./NotFoundMain/NotFoundMain";

export default function NotFound() {
  const randomIdx = Math.floor(Math.random() * bgUrls.length);
  const bgImg = bgUrls[randomIdx];
  return (
    <Styled className="not-found-page" bgImg={bgImg}>
      <NotFoundHeader />
      <NotFoundMain />
      <NotFoundFooter />
    </Styled>
  );
}
const Styled = styled.div`
  background-color: #000;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #fff;
  padding: 20px 16px;
  box-sizing: border-box;
  margin: 0;
  background-image: linear-gradient(
      180deg,
      #000 0.21%,
      rgba(0, 0, 0, 0.8) 34.96%,
      rgba(0, 0, 0, 0.32) 78.47%,
      rgba(0, 0, 0, 0.25) 85.43%,
      rgba(0, 0, 0, 0.75) 99.97%
    ),
    url(${({ bgImg }) => bgImg});

  @media screen and (min-width: 600px) {
    padding: 1.5rem 2rem;
  }
  @media screen and (min-width: 900px) {
    padding: 1.5rem 4rem;
    background-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.81) 17.97%,
        rgba(0, 0, 0, 0.31) 57.6%,
        transparent 77.6%
      ),
      url(${({ bgImg }) => bgImg});
  }
`;
