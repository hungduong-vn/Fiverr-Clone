import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    padding-bottom: 2rem;
    color: #fff;
    font-weight: 700;
    .custom-text {
      font-family: DomaineDisplay, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-style: italic;
      font-weight: 400;
    }
  }
  @media screen and (min-width: 600px) {
    h1 {
      padding-bottom: 1rem;
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }
  @media screen and (min-width: 900px) {
    padding: 0;
    h1 {
      padding-bottom: 1.5rem;
    }
  }
  @media only screen and (min-width: 1160px) {
    h1 {
      font-size: 3rem;
      line-height: 3.5rem;
    }
  }
`;

export default function CarouselHeading() {
  return (
    <Wrapper>
      <h1>
        Find the perfect <span className="custom-text">freelance</span> services
        for your business
      </h1>
    </Wrapper>
  );
}
