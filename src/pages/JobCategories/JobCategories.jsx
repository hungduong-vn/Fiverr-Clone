import React from "react";
import styled from "styled-components";
import SliderAdjWidth from "../../components/Home/SliderAdjWidth/SliderAdjWidth";
import JobCatBody from "./Body/JobCatBody";
import JobCatBottom from "./Bottom/JobCatBottom";
import { slides } from "./data/defaultData";
import JobCatSliderItem from "./Top/JobCatSlider/JobCatSliderItem";
import JobCatSliders from "./Top/JobCatSlider/JobCatSliders";
import JobCatTop from "./Top/JobCatTop";

const Styled = styled.div`
  display: block;
`;

export default function JobCategories() {
  return (
    <Styled className="content-row">
      <JobCatTop />
      <JobCatBody />
      <JobCatBottom />
      {/* <SliderAdjWidth slides={slides} SlideComponent={JobCatSliderItem}/> */}
      <JobCatSliders slides={slides} />
    </Styled>
  );
}
