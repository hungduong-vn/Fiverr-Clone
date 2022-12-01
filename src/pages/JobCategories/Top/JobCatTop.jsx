import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { slides } from "../data/defaultData";
import JobCatBanner from "./JobCatBanner/JobCatBanner";
import JobCatSliders from "./JobCatSlider/JobCatSliders";

const Styled = styled.div``;

export default function JobCatTop({name, banner}) {
  const params = useParams();
  console.log({ params });
  return (
    <Styled>
      <JobCatBanner
        name={name}
        banner={banner}
      />
      <JobCatSliders slides={slides} name={name} />
    </Styled>
  );
}
