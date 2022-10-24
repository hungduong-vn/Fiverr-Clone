import React from "react";
import styled from "styled-components";
import CustomSlider from "../../../components/Home/Slider/CustomSlider";
import { servicesList } from "./data";
import PopularServiceItem from "./PopularServiceItem.jsx";

const Styled = styled.div`
  h2 {
    padding-bottom: 20px;
  }
  .slick-initialized {
    margin: 0 -6px;
  }
  @media only screen and (min-width: 600px) {
    .slick-initialized {
      margin: 0 -9px;
    }
  }
  @media only screen and (min-width: 900px) {
    .slick-initialized {
      margin: 0 -18px;
    }
    h2 {
      padding-bottom: 24px;
    }
  }
`;

export default function PopularServices() {
  const renderSlides = () => {
    return servicesList.map((ele, idx) => (
      <PopularServiceItem key={idx} ele={ele} />
    ));
  };
  return (
    <Styled className="max-width-container">
      <div className="main-section">
        <h2> Popular professional services </h2>
        <CustomSlider>{renderSlides()}</CustomSlider>
      </div>
    </Styled>
  );
}
