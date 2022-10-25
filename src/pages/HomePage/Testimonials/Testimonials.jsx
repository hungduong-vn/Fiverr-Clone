import React from "react";
import styled from "styled-components";
import CustomSlider from "../../../components/Home/Slider/CustomSlider";

const Styled = styled.div`
  .slide-content {
    width: 100%;
    height: 100px;
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
  }
`;

export default function Testimonials() {
  return (
    <Styled className="max-width-container main-section">
      <CustomSlider>
        {[1, 2, 3, 4].map((ele, idx) => (
          <div className="slide-wrapper" key={idx}>
            <div className="slide-content">
              <h1>{ele}</h1>
            </div>
          </div>
        ))}
      </CustomSlider>
    </Styled>
  );
}
