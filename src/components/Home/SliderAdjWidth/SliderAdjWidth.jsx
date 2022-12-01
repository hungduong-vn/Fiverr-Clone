import React, { useState } from "react";
import { useEffect } from "react";
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

export default function SliderAdjWidth({
  slides,
  SlideComponent,
  setClickNext,
  setClickPrev,
}) {
  // const numSlides = slides.length;
  const numShow = 3;
  const numScroll = 3;
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    speed: 700,
    arrows: false,
    slidesToScroll: numScroll,
    slidesToShow: numShow,
    variableWidth: true,
  };
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    console.log({ slider });
    if (slider !== null) {
      setClickNext(() => {
        return slider.slickNext;
      });
      setClickPrev(() => {
        return slider.slickPrev;
      });
    }
  }, [slider]);
  return (
    <Styled>
      <Slider
        {...settings}
        ref={(c) => {
          setSlider(c);
        }}
      >
        {slides.map((ele, idx) => (
          <SlideComponent key={idx} item={ele} />
        ))}
      </Slider>
      {}
    </Styled>
  );
}
