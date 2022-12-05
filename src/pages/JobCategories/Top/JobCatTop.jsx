import React from "react";
import styled from "styled-components";
import JobCatBanner from "./JobCatBanner/JobCatBanner";
import JobCatSliders from "./JobCatSlider/JobCatSliders";

const Styled = styled.div``;

export default function JobCatTop({ name, banner, popularList }) {
  // console.log({ banner: banner[0] });
  return (
    <Styled>
      <JobCatBanner name={name} banner={banner} />
      <JobCatSliders slides={popularList} name={name} />
    </Styled>
  );
}
