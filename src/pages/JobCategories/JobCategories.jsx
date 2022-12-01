import React from "react";
import styled from "styled-components";
import JobCatBody from "./Body/JobCatBody";
import JobCatBottom from "./Bottom/JobCatBottom";
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
      {/* <JobCatSliders slides={slides} /> */}
    </Styled>
  );
}
