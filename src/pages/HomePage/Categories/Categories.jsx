import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Styled = styled.div`
  .slide-inner {
    margin: 1rem;
    height: 5rem;
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 6rem;
  }
`;

export default function Categories() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Styled className="max-width-container">
      <h2> Responsive </h2>
      <Slider {...settings}>
        <div className="slide">
          <div className="slide-inner">
            <h3>1</h3>
          </div>
        </div>
        <div className="slide">
          <div className="slide-inner">
            <h3>2</h3>
          </div>
        </div>
        <div className="slide">
          <div className="slide-inner">
            <h3>3</h3>
          </div>
        </div>
        <div className="slide">
          <div className="slide-inner">
            <h3>4</h3>
          </div>
        </div>
        <div className="slide">
          <div className="slide-inner">
            <h3>5</h3>
          </div>
        </div>
        <div className="slide">
          <div className="slide-inner">
            <h3>6</h3>
          </div>
        </div>
        <div className="slide">
          <div className="slide-inner">
            <h3>7</h3>
          </div>
        </div>
        <div className="slide">
          <div className="slide-inner">
            <h3>8</h3>
          </div>
        </div>
      </Slider>
    </Styled>
  );
}
