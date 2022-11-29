import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Styled = styled.div`
  p {
    background-color: teal;
    margin: 1rem;
  }
  button {
    background-color: grey;
    &:focus {
      background-color: grey;
    }
    &:hover {
      background-color: grey;
    }
  }
`;

export default function SliderAdjWidth({ slides, SlideComponent }) {
  const numSlides = slides.length;
  const numShow = 3;
  const numScroll = 3;
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: false,
    speed: 700,
    slidesToScroll: numScroll,
    slidesToShow: numShow,
    variableWidth: true,
  };
  return (
    <Styled>
      <Slider {...settings}>
        {slides.map((ele, idx) => (
          <SlideComponent key={idx} item={ele} />
        ))}
      </Slider>
    </Styled>
  );
}
