import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { slides } from "../data/defaultData";
import JobCatBanner from "./JobCatBanner/JobCatBanner";
import JobCatSliders from "./JobCatSlider/JobCatSliders";

const Styled = styled.div``;

export default function JobCatTop() {
  const params = useParams();
  console.log({ params });
  const jobCatName = "Graphics & Design";
  return (
    <Styled>
      <JobCatBanner />
      <JobCatSliders slides={slides} jobCatName={jobCatName} />
    </Styled>
  );
}
