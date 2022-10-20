import React from "react";
import styled from "styled-components";
import CarouselHeading from "./CarouselHeading";
import CarouselSearchBar from "./CarouselSearchBar/CarouselSearchBar";
import CarouselSearchPopular from "./CarouselSearchPopular";

const Styled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .carousel-search-header {
    @media screen and (min-width: 600px) {
      padding: 6rem 4rem;
    }
    @media screen and (min-width: 900px) {
      max-width: 560px;
      padding: 0;
    }
    @media only screen and (min-width: 1160px) {
      max-width: 650px;
    }
  }
  .carousel-search-wrapper {
    z-index: 5;
    position: relative;
    @media only screen and (min-width: 600px) {
      display: block;
    }
  }
`;

export default function CarouselSearch() {
  return (
    <Styled className="max-width-container">
      <div className="carousel-search-header">
        <CarouselHeading />
        <div className="carousel-search-wrapper">
          <CarouselSearchBar />
        </div>
        <CarouselSearchPopular />
      </div>
    </Styled>
  );
}
