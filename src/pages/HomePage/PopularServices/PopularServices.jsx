import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { servicesList, slickSlideSettings } from "./data";

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

export default function PopularServices() {
  const renderSlides = () => {
    return servicesList.map((ele, idx) => (
      <div className="slide" key={idx}>
        <div className="slide-inner">
          <h4>
            <small>{ele.heading.sub}</small>
            {ele.heading.main}
          </h4>
          {ele.pictureEle}
        </div>
      </div>
    ));
  };

  return (
    <Styled className="max-width-container">
      <h2> Popular professional services </h2>
      <Slider {...slickSlideSettings}>{renderSlides()}</Slider>
    </Styled>
  );
}
