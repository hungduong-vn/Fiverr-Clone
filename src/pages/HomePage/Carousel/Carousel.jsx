import React from "react";
import styled from "styled-components";
import CarouselBack from "./CaourselBack/CarouselBack";
import "./Carousel.scss";

const Wrapper = styled.div`
  margin-bottom: 0 !important;
  background-color: #023a15;
  margin: 0 auto 3rem;
  position: relative;
  @media only screen and (min-width: 600px) {
    margin-bottom: 5rem;
  }
  @media only screen and (min-width: 900px) {
    margin-bottom: 6rem;
    height: 680px;
  }
`;

export default function Carousel() {
  return (
    <Wrapper className="carousel__wrapper">
      {/* <div className="carousel__background"></div> */}
      <CarouselBack/>
    </Wrapper>
  );
}
